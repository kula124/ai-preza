# Day to Day

## Meeting to Feature Request to JIRA Tasks

### The Traditional Problem

After discovery/planning meetings:

- PM writes down requirements
- Creates tasks
- Assigns to devs and designers
- **Things get lost in translation**
- Tasks not well defined
- Requirements bounced between devs ↔ PMs ↔ client (or PO)

### AI Can Help

Similar to Case Study #2:

1. Meetings **recorded and transcribed** (already a win!)
2. Based on transcripts + **Jira MCP**:
   - PM defines tasks using **prompts**
   - AI creates tickets
3. PMs go to board and **clean things up**
4. Workflow reduced by a lot

### Out of the Box Tools:

- Otter AI
- Sembly AI

## Figma to Code

**Did you know you can turn Screenshot into React Code?** Because you can.

The code will be... **suboptimal** 😅

### Using Figma MCP + AI:

- Turn Figma component → React Component
- Pair with **Storybook**
- Designers can set up and maintain a React component library
- **No developer involvement**

### Out of the Box Tools:

- Anima (Figma plugin)
- Builder.io

### Manual Mode (The Better Way)

Using Claude Desktop with Figma MCP:

1. Give it a Figma link and screenshots
2. "Analyze the nodes recursively. Generate a JSON file called `design_specs.json` with specification from Figma and screenshots needed to build this component."
3. Then say: "Good job! Now make this in a module (or component)"

**IMPORTANT NOTE:** If you go from visual thing into code or report **HAVE TO GO TO JSON FIRST!** This is a huge boost.

The smaller you go in terms of scope, the better.
