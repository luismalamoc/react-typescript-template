# React TypeScript Template

A modern React application template built with TypeScript, React, and shadcn/ui. This template provides a solid foundation for building web applications with a beautiful UI and well-organized code structure. It includes a task management feature as an example implementation.

## Features

- 🎨 Modern UI with shadcn/ui components
- 🌙 Light and dark mode support
- 📱 Responsive design for all device sizes
- 🔒 Authentication flow (login, register, forgot password)
- ✅ Task management (create, update, delete tasks)
- 🏷️ Task filtering by status
- 🔄 State management with Zustand

## Project Structure

```
react-typescript-template/
├── public/                  # Static assets
├── src/
│   ├── api/                 # API client and service definitions
│   ├── assets/              # Images, fonts, and other assets
│   ├── components/          # Reusable UI components
│   │   └── ui/              # shadcn/ui components
│   ├── config/              # Application configuration
│   ├── context/             # React context providers
│   ├── features/            # Feature-based modules
│   │   ├── auth/            # Authentication feature
│   │   │   ├── components/  # Auth-specific components
│   │   │   └── pages/       # Auth pages (login, register, etc.)
│   │   └── tasks/           # Tasks feature
│   │       ├── components/  # Task-specific components
│   │       └── pages/       # Task pages (dashboard, etc.)
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Layout components
│   ├── routes/              # Routing configuration
│   ├── schemas/             # Validation schemas
│   ├── services/            # Service layer
│   ├── store/               # State management
│   ├── styles/              # Global styles
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main App component
│   └── index.tsx            # Application entry point
├── .env.example             # Example environment variables
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.js           # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-typescript-template.git
cd react-typescript-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Customization

### Styling

This template uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file.

### Adding New Features

To add a new feature:

1. Create a new directory in `src/features/` for your feature
2. Add components, pages, and other necessary files
3. Update the routes in `src/routes/AppRoutes.tsx` to include your new feature

### Authentication

This template includes a simple authentication system. In a real application, you would need to:

1. Connect to a real authentication API
2. Implement proper token management
3. Add additional security measures

## Deployment

To build the application for production:

```bash
npm run build
# or
yarn build
```

This will generate a `dist` directory with the production-ready files.

## License

MIT
