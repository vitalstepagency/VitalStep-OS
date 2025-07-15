# VitalStep OS

A comprehensive role-based access control system built with Next.js 15, Clerk authentication, and modern UI components. VitalStep OS provides secure authentication and authorization with three distinct user roles: Admin, Internal, and Client.

## Features

- **Role-Based Access Control**: Three distinct user roles with specific permissions
  - **Admin**: Full system access, user management, client oversight
  - **Internal**: Internal operations and client management
  - **Client**: Personalized client portal with unique client ID
- **Clerk Authentication**: Secure authentication with webhooks for automatic role assignment
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **API Routes**: RESTful API endpoints for user management and role assignment
- **Webhook Integration**: Automatic user role assignment via Clerk webhooks

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Authentication**: Clerk
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vitalstepagency/VitalStep-OS.git
cd VitalStep-OS
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_WEBHOOK_SECRET=your_webhook_secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Clerk Setup

1. Create a Clerk application at [clerk.com](https://clerk.com)
2. Configure the webhook endpoint: `https://your-domain.vercel.app/api/webhooks/clerk`
3. Subscribe to the `user.created` event
4. Add your webhook secret to the environment variables

## Project Structure

```
src/
├── app/
│   ├── admin/          # Admin dashboard and user management
│   ├── internal/       # Internal operations interface
│   ├── client/         # Client portal with dynamic routing
│   ├── api/            # API routes for user management and webhooks
│   ├── sign-in/        # Authentication pages
│   └── sign-up/
├── components/
│   ├── admin/          # Admin-specific components
│   ├── internal/       # Internal-specific components
│   ├── client/         # Client-specific components
│   └── ui/             # Reusable UI components (shadcn/ui)
├── lib/
│   └── utils.ts        # Utility functions
└── middleware.ts       # Clerk middleware for route protection
```

## API Endpoints

- `POST /api/admin/create` - Create admin users
- `POST /api/user/assign-role` - Assign roles to users
- `POST /api/webhooks/clerk` - Clerk webhook handler

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
