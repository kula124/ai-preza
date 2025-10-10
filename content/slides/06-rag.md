# RAG (Retrieval Augmented Generation)

**This is what Lovra wants to learn about**

<div style="display: flex; align-items: center; justify-content: space-between; gap: 2rem;">

<div style="flex: 1;">

## The Problem

LLMs only know their training data. They don't know about:

- Your internal docs
- Your codebase specifics
- Anything after their training cutoff

## The Naive Approach

Train or "fine-tune" a model with your own data

- Expensive
- Not practical for ever-growing data sets

## Enter RAG

### How It Works:

1. Your documents get converted to **embeddings** (vector representations) and stored in a vector database
2. When someone asks a question, the system searches for relevant chunks
3. Those chunks get injected into the AI's prompt as context
4. The AI generates an answer based on **your actual data**, not hallucinations

## Real Example

A new employee wants to know vacation rules in your company:

- ChatGPT can't help (doesn't know your policies)
- With RAG: vectorize your documents, find the information, use ChatGPT to generate the answer

</div>

<div style="flex: 1;">

![RAG Diagram](/images/slide_5-rag.png)

</div>

</div>
