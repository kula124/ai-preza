# Case Study #4: ESG Report Generator

## The Challenge

Client needs **ESRS-compliant ESG reports** for companies:

- 6,000-8,000 word professional reports in Croatian
- Complex questionnaire with 9 sustainability standards (E/S/G)
- Must follow European Sustainability Reporting Standards

## Traditional Approach (What We Avoided)

**Without AI assistance:**

- Build Excel parser
- Create report templates
- Write generation logic
- Handle security (prevent prompt injection)
- Test Croatian output
- **Developer estimate: 2 weeks**

## What We Actually Did (With Claude Code)

### The Solution:

1. **Security-first**: Template-based parser (prevents prompt injection)
2. **Parallel LLM architecture**: 3 simultaneous GPT-4o calls
   - Part 1: Company profile (intro)
   - Part 2: ESRS E/S/G analysis (detailed)
   - Part 3: Recommendations (conclusion)
3. **Modular prompts**: Separate files per section
4. **Type-safe queries**: Kysely + PostgreSQL with pgvector

### The Results:

- ✅ 6,914-word professional reports
- ✅ Generated in **30-50 seconds**
- ✅ Full ESRS compliance (all 9 standards)
- ✅ Production-ready security

## The Point

**Built in 4 hours with Claude Code instead of 2 weeks.**

From concept to production-ready tool in a single afternoon. <3
