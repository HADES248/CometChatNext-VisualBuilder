# How to Build CometChat in Next.js Using Visual Builder

## What You'll Be Building

![Chat UI Screenshot](https://www.cometchat.com/docs/assets/images/visual_chat_builder-3270b27870aa7586ed5b34d489b18e0b.png)  
*Alt text: Screenshot of a working CometChat-Visual Builder Next.js app with a user logged in and active chat visible*

CometChat’s Visual Build into a fresh Next.js TypeScript project to enables user login, one-on-one chat, and real-time message updates. By following each step, you’ll end up with a working chat interface powered entirely by CometChat.

---

## Introduction

In this Section, you’ll learn how to integrate CometChat into a Next.js application using the official CometChat UI Kit.

Real-time chat is a foundational feature in many modern apps, from customer support to social platforms. CometChat offers a robust SDK and UI Kit that makes it fast and reliable to add chat functionality without building everything from scratch.

---

## Prerequisites

**Knowledge Required**
- Basic React hooks
- Next.js fundamentals (pages, API routes)
- ES6+ JavaScript

**Tools Required**
- Node.js v16+  
- npm (v8+)  
- Git (optional, for cloning the repository)  
- A modern code editor (e.g., VS Code)

---

# CometChat Integration

## Step 1: Set Up Your Project

Create a new Next.js project using Create React App with the TypeScript template:

```bash
npx create-next-app@latest my-app --typescript
cd my-app
```

## Step 2: Install Dependencies

To integrate CometChat into your project, install the required SDK and UI Kit using:

```bash
npm install @cometchat/chat-sdk-javascript @cometchat/calls-sdk-javascript @cometchat/chat-uikit-react
```

### Copy the CometChat Folder
- Copy the `cometchat-app-react/src/CometChat` folder inside your src/app directory.

## Step 3: Render Experience

### we will create the `CometChatNoSSR.tsx` & `CometChatNoSSR.css` files `src/CometChatNoSSR`
- The file initializes CometChat using TypeScript.
- It imports CometChat from the SDK, builds `AppSettings` with presence subscription, and calls `CometChat.init()`.
- Logs success or error messages to the console for debugging.

  ```bash
  src/app/
  ├── CometChat/
  └── CometChatNoSSR/
    └── CometChatNoSSR.tsx
  ```

### Disabling SSR in `src/app/CometChatWrapper.tsx`
- we will disable `Server-Side Rendering (SSR)` for `CometChatNoSSR.tsx` while keeping the rest of the application’s SSR functionality intact.
- This ensures that the CometChat UI Kit components load only on the client-side, preventing SSR-related issues

With this setup, CometChat is properly integrated and ready for real-time communication.

## Step 4: Build the UI

### Components

- `CometChatNoSSR.tsx` – Manages state, handles conversation selection, and renders chat interface components.
- `CometChat` – Contains the full CometChat UI with Users, Chats, Groups & Calls functionality.
  
   ```bash
  src/app/
  ├── CometChat/
  └── CometChatNoSSR/
    └── CometChatNoSSR.tsx
   ```
This setup ensures a seamless chat experience.

## Step 5: Test & Verify

### Testing
1. Start the development server:
   ```bash
   npm run dev
   ```
- Open http://localhost:3000 in your browser.
- Log in, select a conversation, and send messages in real-time.
Troubleshooting- Ensure .env values (APP_ID, REGION, AUTH_KEY) are correct.
- Verify at least one user exists in the CometChat Dashboard.
- Confirm the recipient user is online.
### Conclusion
Your Next.js TypeScript app now integrates CometChat UI Kit, enabling users to log in, view conversations, and send messages.Next Steps- Enable image and file sharing.
- Store message history locally using IndexedDB.
- Add typing indicators and read receipts.
- Expand to voice/video calls using CometChat’s SDK
