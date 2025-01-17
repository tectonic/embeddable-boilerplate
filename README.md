# Embeddable Boilerplate Repo

Hello and welcome to the boilerplate repository for the Embeddable. If you haven't already gone through the [Onboarding Repo](https://github.com/embeddable-hq/onboarding), we **strongly recommend** doing so first. Seriously. It'll take three hours or less and you'll be so happy you did it. [Go now!](https://github.com/embeddable-hq/onboarding)

### Installation

`npm i` # requires Node.js 20 or later

### Build & Deploy

This is how you push code changes to your Embeddable workspace

1.  Head to https://app.us.embeddable.com (or https://app.eu.embeddable.com) and grab your **API Key**.

2.  **Set your location**: in [embeddable.config.ts](./embeddable.config.ts), uncomment either the US or EU config section.

3.  **Build** the code bundle: `npm run embeddable:build`

4.  **Push** the above code bundle to your workspace:

`npm run embeddable:push -- --api-key <API Key> --email <Email> --message <Message>`

4.  Head back to https://app.embeddable.com (or https://app.eu.embeddable.com) and "Create new Embeddable" using the **components** and **models** from your code bundle

### Local Development

This is a "Preview workspace" (local to you) that allows you make changes locally and see them instantly without needing to "Build and Deploy".

`npm run embeddable:dev`

It opens a "Preview" workspace, that uses your local components and models.
