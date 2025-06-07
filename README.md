# CodeSync

**CodeSync** is a real-time collaborative interview platform built using Next.js and powered by Clerk for authentication, Convex for backend/database, and Stream for video calling. It features a Monaco-powered code editor, responsive UI, and secure communication.

## 🌐 Tech Stack

- **Frontend:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS, Tailwind CSS Animate, Lucide Icons
- **Auth:** Clerk
- **Database & Functions:** Convex
- **Video Calling:** Stream Video React SDK
- **Code Editor:** Monaco Editor
- **UI Components:** Radix UI

## 📁 Folder Structure

.
├── public/ # Static assets (favicons, icons, etc.)
├── src/
│ ├── app/ # Next.js App Router structure
│ ├── components/ # UI components, providers
│ ├── actions/ # Convex client actions
│ └── styles/ # Global CSS (e.g., globals.css)
├── .env.local # Environment variables (DO NOT commit)
├── package.json # Project dependencies and scripts
├── tailwind.config.js # TailwindCSS configuration
└── tsconfig.json # TypeScript configuration


## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CONVEX_DEPLOYMENT=your_convex_deployment_url
NEXT_PUBLIC_CONVEX_URL=your_convex_url

NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
```

##🛠️ Setup & Installation

1. Clone the repository
git clone https://github.com/your-username/codesync.git
cd codesync

2. Install dependencies
npm install

3. Setup Convex
npx convex dev

4. Run Next.js development server
npm run dev

##✨ Features
🌍 Full-stack real-time code interview platform

🔐 Clerk-based authentication (sign-in/out, protected routes)

🎥 Stream-based video calling integration

💾 Convex functions + backend for real-time syncing

🎨 Dark mode + Theme support via next-themes

🧠 Monaco Editor for rich coding experience

🔔 Toast notifications via react-hot-toast


##Screenshots
![image](https://github.com/user-attachments/assets/1e8337e3-9c7d-4e77-8c40-13b28dd8af50)
![image](https://github.com/user-attachments/assets/1918c1c6-02eb-43c9-90bf-e3b919cf58c5)
![image](https://github.com/user-attachments/assets/5549a1f4-2886-4804-8761-3798f9ffca88)
![image](https://github.com/user-attachments/assets/5796ad95-17b8-4405-a04c-9152284f7b03)
![image](https://github.com/user-attachments/assets/d8e7e167-37d5-4a3a-ab80-d30c9b5fa3e9)
