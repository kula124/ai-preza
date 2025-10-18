#!/bin/bash

set -e

echo "🚀 Starting deployment to Raspberry Pi..."

# Configuration
REMOTE_HOST="ssh.kulify.me"
REMOTE_PATH="~/ai-preza"
# APP_NAME="ai-preza"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install

echo -e "${BLUE}📦 Building production bundle...${NC}"
npm run build

echo -e "${BLUE}📁 Creating remote directory if it doesn't exist...${NC}"
ssh $REMOTE_HOST "mkdir -p $REMOTE_PATH"

echo -e "${BLUE}🔄 Syncing files to remote server...${NC}"
rsync -avz --delete \
  --exclude '.git' \
  --exclude '.next/cache' \
  ./ $REMOTE_HOST:$REMOTE_PATH/

echo -e "${BLUE}✅ Files synced successfully${NC}"

echo -e "${BLUE}🔄 Restarting application with PM2...${NC}"
ssh $REMOTE_HOST <<'ENDSSH'
cd ~/ai-preza

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Stop and delete existing process if it exists
pm2 delete ai-preza 2>/dev/null || true

# Start the application using ecosystem file
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

# Setup PM2 startup script if not already done
pm2 startup systemd -u $(whoami) --hp $(eval echo ~$(whoami)) 2>/dev/null || true

ENDSSH

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}🌐 Application is running on the Raspberry Pi on port 8888${NC}"
echo ""
echo "Useful commands:"
echo "  ssh $REMOTE_HOST 'pm2 logs ai-preza'     - View logs"
echo "  ssh $REMOTE_HOST 'pm2 restart ai-preza'  - Restart app"
echo "  ssh $REMOTE_HOST 'pm2 stop ai-preza'     - Stop app"
echo "  ssh $REMOTE_HOST 'pm2 status'            - Check status"
