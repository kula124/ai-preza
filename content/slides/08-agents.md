# Agents, Tools and MCP

## AI Agents

AI systems that can **take actions autonomously**, not just answer questions.

### Key Difference:

- **Regular AI**: You prompt → AI responds → you execute
- **Agent AI**: You set goal → AI plans, executes, verifies, iterates until done

Instead of asking "how do I fix this bug?" and copying the response, an agent can:

- Analyze your code
- Identify the issue
- Write the fix
- Run tests
- Create a PR
- All on its own

### Agent Has:

- A **goal** (input)
- **Goal validation** (a test to confirm goal is achieved)
- A **loop**: defines and executes steps until goal is achieved

## Tool Calling

Lets AI invoke external functions during its response. Instead of just generating text, it can execute code, query databases, or hit APIs.

### How It Works:

1. You define available functions in your prompt (name, parameters, description)
2. AI decides when to call them based on user input
3. You execute the function and return results
4. AI incorporates results into its response

## MCP (Model Context Protocol)

Instead of defining your own set of tools (usually API routes), define them using a **standard interface: MCP**.

**MCP is like USB-C for AI** — a universal standard so you don't need custom integrations for every tool.

### MCP Example for GitHub:

- create_pr tool
- review_pr tool
- create_repo tool
- clone_repo
- push_to_branch

### For Google Drive:

- read_document
- write_to_document
- rename_document
- delete_document
- Document CRUD 🙂

**The idea:** Define a toolbox that your agents and other developers' agents can use. Or find a ready-made MCP and plug it into your agent.
