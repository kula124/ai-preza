# Case Study #3: QA Automation

## The Challenge

Our last tool had bad QA. We decided to automate that as well.

## The Solution

Using **Playwright MCP** and **Jira**, we had an agent:

1. Define QA acceptance criteria
2. Test the task
3. Review the PR
4. Make a QA report automatically

## How It Works

On PR deploy to QA, a GitHub workflow runs an n8n flow that:

1. Pulls the task from Jira and reads it
2. Creates a series of test cases
3. After build, tests cases are tested by an agent with Playwright MCP
4. Result returned from the flow

## Current Status

🚧 **Work in progress** but initial tests look promising

## The Challenges

- Playwright MCP is quite "heavy" on both system and token usage
- Comes up with really crazy test cases which are hard to test in Playwright
- **New approach**: Prepare test cases in Jira before the flow runs instead of letting agent make up random stuff

## The Meta Idea

**Real world test idea: Use this tool to test and fix the previous one.**

🤖 Agents fixing agents' work.
