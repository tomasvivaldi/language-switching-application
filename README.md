# Next.js 14 Multi-Language Application

This project is a lightweight Next.js 14 application developed using TypeScript that supports a multi-language UI based on folder routes. The languages included are English (default), French, and Japanese. The application redirects users based on their browser's language settings.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
3. [Cypress E2E Testing](#cypress-e2e-testing)
   - [Setup and Running Tests](#setup-and-running-tests)
4. [Hosting on Vercel](#hosting-on-vercel)
5. [Contributing](#contributing)

## Features

- **Multi-Language Support**: Supports English (default), French, and Japanese.
- **Automatic Redirection**: Automatically redirects based on the browser's language settings.
- **Optimized Layouts**: Adjusts layouts dynamically based on the selected language.
- **End-to-End Testing**: Comprehensive tests using Cypress.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/tomasvivaldi/language-switching-application.git
    cd language-switching-application
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Access the application at `http://localhost:3000`.

3. For production build:

    ```bash
    npm run build
    npm start
    ```

## Cypress E2E Testing

With cypress we can peform an end-to-end text, simulating the change of language on the browser without having to deal with caches, manual language configurations and other incoviniences. Here is how we get started

### Setup and Running Tests

1. **Install Cypress**:

    ```bash
    npm install cypress --save-dev
    ```

2. **Add Cypress Commands**:

    Add the following commands to your `package.json`:

    ```json
    "scripts": {
      "cypress:open": "cypress open",
      "cypress:run": "cypress run"
    }
    ```

3. **Run Cypress Tests**:

    To open the Cypress test runner and run the tests interactively:

    ```bash
    npx cypress open
    ```

    For headless testing:

    ```bash
    npm run cypress:run
    ```

4. **Run E2E Test**
![image](https://github.com/tomasvivaldi/language-switching-application/assets/82857928/d80b219a-91a6-4ea6-bd94-495da85fe9f2)

5. **Start Test on Chrome**
![image](https://github.com/tomasvivaldi/language-switching-application/assets/82857928/e62de6a9-abef-45be-b383-2fa01a99c35e)


## Hosting on Vercel

The application is hosted on Vercel. You can check out the live demo here:

- [Language Switch Application](https://language-switching-application.vercel.app/app)

You will be redirected to the page correspondent to the current language settings on your browser's cookies


## Contributing

Feel free to open issues or pull requests if you find bugs or have ideas for new features.


