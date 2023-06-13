# Land Laws AI

A chatbot with access to local zoning documents, so you can ask questions related to ordinances and get back concise replies along with the pdf and page number the context for the reply was found on.
Built off [Chatbot UI Lite](https://github.com/mckaywrigley/chatbot-ui-lite) and using Supabase Edge functions, Auth, and DB for vector and user storage.

No demo available yet.

## Features

Land Laws AI implements a simple, chat interface via [Chatbot UI Lite](https://github.com/mckaywrigley/chatbot-ui-lite) that can be connected to your supabase client.

Modify the chat interface in `components/Chat`.

Adjust the Supabase edge function call in `pages/api/chat.ts`.

Tweak the assistant prompt in `pages/index.tsx`.

Manage routing and protected routes in `/pages/_app.tsx`.

## Deploy

**Vercel**

Probably gunna be a Vercel deployment soon.

## Running Locally

**1. Install Dependencies**

```bash
npm i
```

**2. Provide OpenAI API Key**

Create a .env.local file in the root of the repo with your OpenAI API Key, and Supabase stuff:

```bash
OPENAI_API_KEY=<YOUR_KEY>
SUPABASE_URL=<YOUR_URL>
SUPABASE_ANON_KEY=<YOUR_ANON_KEY>
```

**3. Run App**

```bash
npm run dev

or

vercel dev
```

**4. Start Building**

You should be able to start chatting with the bot.
