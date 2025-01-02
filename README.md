# Promptly: Social Prompts Management Application

A Next.js application for managing and sharing prompts. Users can sign in via Google, create, edit, and delete their prompts. All prompts are public, enabling both authenticated and non-authenticated users to view them and their associated user details.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Environment Variables](#environment-variables)
- [Setup Locally](#setup-locally)
- [Usage](#usage)

---

## Features

- **Google Authentication**: Users can sign in using Google.
- **Prompt Management**: Create, edit, and delete prompts.
- **Public Access**: All prompts and user details are visible to everyone, including non-authenticated users.
- **Secure User Authentication**: Managed using `auth.js`.
- **Custom UI**: A unique user interface built without third-party libraries.

---

## Tech Stack

- **Frontend & Backend**: Next.js
- **Database**: MongoDB
- **Authentication**: `auth.js`
- **UI**: Fully custom implementation

---

## Environment Variables

To run this application, configure the following environment variables in a `.env` file at the root of your project:

```env
GOOGLE_CLIENT_ID="<your-google-client-id>"
GOOGLE_CLIENT_SECRET="<your-google-client-secret>"
MONGODB_URI="mongodb://localhost:27017"
```

---

## Setup Locally

Follow these steps to set up the application on your local machine:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root of your project.
   - Add the required environment variables as specified above.

4. **Run the Application**:
   ```bash
   npm run dev
   ```

5. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.

---

## Usage

1. **Sign In with Google**:
   - Click the "Sign In" button and log in using your Google account.

2. **Create a Prompt**:
   - After signing in, click "New Prompt," enter the details, and save.

3. **Edit or Delete Prompts**:
   - Manage your prompts directly from the interface.

4. **View Public Prompts**:
   - Browse all prompts and associated user details, even without signing in.

---

### Additional Notes

- Ensure MongoDB is running locally or update the `MONGODB_URI` in the `.env` file for remote usage.
- Use a valid Google Client ID and Secret for authentication to function.
- The application is built without any third-party UI libraries, ensuring complete customization.

---

Happy coding!

