# Embeddings and Vector DBs

## Embeddings

Turn text into **arrays of numbers** that capture semantic meaning. Similar concepts end up close together in vector space.

### Simple Example:

- "cat" and "dog" have **similar embeddings** (both animals, pets)
- "cat" and "database" have **very different embeddings**
- Even though "cat" and "car" look similar as words, their embeddings are **far apart**

### Why Developers Care

This powers:

- Semantic search
- RAG systems
- Recommendation systems

When you ask "how do I authenticate users?", the system converts your question to an embedding and finds documentation with similar embeddings.

## Vector Databases

Store embeddings — numerical representations of text that capture meaning.

### Traditional DB vs Vector DB

- **Traditional search** for "login broken": Only finds docs with those exact words
- **Vector search** finds: "authentication failing," "sign-in issues," "credentials not working" — all semantically related

**We will use:** Postgres with vector extension enabled
