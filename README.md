# CS PhD Journey

Arabic-first educational website designed to support deep preparation for a PhD in Computer Science through structured topic overviews, foundational scaffolding, and progressive learning paths.

This project began as a personal doctoral preparation environment based on the required PhD coursework in Computer Science at King Abdulaziz University. It is being shaped into a public learning experience so that other learners can benefit from the same idea: build mastery from first principles, strengthen technical vocabulary, and grow toward research-level understanding one concept at a time.

## Vision

The goal of this project is not to present isolated summaries of advanced topics. It is to create a serious learning space that helps the learner:

- understand each field from its foundations before moving into advanced material
- connect Arabic explanations with essential English terminology
- build enough conceptual depth to discuss topics academically and confidently
- expand the site over time into a personal knowledge base for advanced study

## Current Scope

The current version includes:

- a polished Arabic `RTL` learning interface
- a homepage introducing the discipline and its main areas
- dedicated overview pages for the core required PhD subjects
- foundational prompts that clarify what must be understood before advanced study
- English terminology support with pronunciation playback in the browser
- a content structure that can be expanded incrementally into lessons

## Core Areas

At this stage, the site covers four major subject areas inspired by the doctoral coursework:

- Advanced Computer Networks
- Software Engineering and Design
- Advanced Database Systems
- Advanced Computer Architecture

Each area page is designed as a launch point for future lessons, not as a final static reference.

## Public Use

If you are visiting this repository as a learner, you can use the published website as a guided conceptual map for these fields. The public version is intended to help you explore the structure of the subjects, review terminology, and identify what to study next.

What the public site does well:

- introduces each field clearly
- highlights prerequisite ideas that should not be skipped
- organizes topics in a way that supports deeper future study

## Personalized Lesson Expansion

One important part of the original workflow is personalized lesson creation.

In the author's local setup, new lessons are added in response to specific questions. That means the site grows interactively: a question leads to a new lesson, the lesson explains the necessary fundamentals, and the knowledge base becomes more detailed over time.

If you want that same experience for yourself, you will need to:

1. clone or download this project locally
2. open it in your own development environment
3. use Codex, or a similar coding assistant, to extend the content based on your questions

In other words, the public repository gives you the platform and structure, while the personalized lesson-generation workflow happens locally.

## Running Locally

This is a static web project and can be served with any simple local server.

Example:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open:

`http://127.0.0.1:4173`

## Project Structure

- [index.html](/Users/mohammed/Documents/Computer%20Science/index.html): main document shell
- [styles.css](/Users/mohammed/Documents/Computer%20Science/styles.css): visual design and responsive layout
- [app.js](/Users/mohammed/Documents/Computer%20Science/app.js): routing, content data, glossary, and interaction logic
- [.github/workflows/deploy-pages.yml](/Users/mohammed/Documents/Computer%20Science/.github/workflows/deploy-pages.yml): automatic deployment to GitHub Pages

## Free Deployment

This repository is configured for free automatic deployment using GitHub Pages through GitHub Actions.

After pushing the project to a GitHub repository and enabling `GitHub Actions` as the Pages source, every push to the `main` branch will trigger a new deployment.

## Who This Project Is For

This repository may be useful for:

- Arabic-speaking learners preparing for advanced study in Computer Science
- future PhD students who want a structured roadmap before coursework begins
- self-learners who want to connect terminology, intuition, and academic framing
- anyone interested in turning a personal learning journey into a living educational website

## Future Direction

The long-term direction is to transform this project into a rich, evolving educational system where each area grows through layered lessons, conceptual maps, terminology support, and question-driven expansion.

The site is intentionally built so that it can mature over time rather than trying to present a finished curriculum all at once.
