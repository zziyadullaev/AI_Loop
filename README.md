# Microsoft Loop AI

This project is a **Microsoft Loop clone** with integrated AI capabilities, designed to replicate and enhance the collaborative workspace experience with intelligent features.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

**Microsoft Loop AI** is a clone of the original Microsoft Loop, enriched with AI functionalities. This project aims to provide users with an advanced collaboration platform where AI assists in task management, content generation, and data analysis, making your workflow more efficient and intelligent.

## Features

- **AI-Enhanced Collaboration:** Utilize AI to assist in content creation, task assignment, and data analysis within the Loop environment.
- **Smart Suggestions:** AI-powered suggestions to help streamline your tasks and projects.
- **Automated Workflows:** Implement AI to automate routine tasks and processes, saving time and reducing manual effort.
- **Data Analytics:** Leverage AI to provide insights and analytics on your collaborative data in real-time.

## Tech Stack

- **Gemini API (AI):** Used for generating AI templates and enhancing collaborative features with AI capabilities.
- **Google Cloud (Firebase):** Used as the database to manage and store user data securely and efficiently.
- **Clerk.com:** Handles authentication for users and organizations, ensuring secure access to the platform.
- **ShadCN Styling & Tailwind CSS:** Provides modern and responsive styling for a seamless user experience.
- **Liveblocks:** Enables real-time collaboration features, allowing multiple users to interact simultaneously.
- **Editor.js:** A text editor used within the platform for creating and editing rich content directly within the Loop.

## Installation

To set up **Microsoft Loop AI** locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/zziyadullaev/Microsoft_Loop_AI.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Microsoft_Loop_AI
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Configure your environment variables by creating a `.env` file and adding the necessary keys and URLs. For example:
    ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
    CLERK_SECRET_KEY=your_secret_key

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    NEXT_PUBLIC_MAX_FILE_COUNT=5
    NEXT_PUBLIC_LIVEBLOCK_PK="your_liveblock_pk"

    LIVEBLOCK_SK=your_liveblock_sk

    NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
    ```

5. Run the application:
    ```bash
    npm start
    ```

## Usage

Once the application is up and running, you can start using **Microsoft Loop AI** to:

- Collaborate on projects with AI providing real-time suggestions.
- Automate repetitive tasks using AI-driven workflows.
- Analyze collaborative data with AI-powered insights.

## Contributing

We welcome contributions to enhance **Microsoft Loop AI**. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a clear explanation of your changes.

Make sure to follow our [Contributing Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, issues, or suggestions, feel free to open an issue on GitHub or reach out:

- GitHub Issues: [Submit an issue](https://github.com/zziyadullaev/Microsoft_Loop_AI/issues)

---

Feel free to adjust the content as needed!
