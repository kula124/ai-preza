# Demystifying the Terminology

## Context Windows and Token Limits

**Context window** = How much information an AI model can "remember" in a single conversation

Think of it like **RAM for AI** — the bigger the window, the more code, docs, or conversation history it can process at once.

### Measured in Tokens

Roughly **4 characters = 1 token**, so **100K tokens ≈ 75K words**

### Current Leaders

- **Claude Opus 4**: 200K tokens (500K enterprise) - ~500 pages of text
- **GPT-4.1**: 1 million tokens - entire medium-sized codebases
- **Gemini 2.5 Pro**: 2 million tokens - the largest available

### Why It Matters for Developers

- Paste entire repos into Claude for refactoring
- Feed complete API docs to ChatGPT for integration work
- Have Gemini analyze your whole test suite at once
- No more chopping things into pieces
