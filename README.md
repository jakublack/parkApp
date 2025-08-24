# ParkApp - Pilot Dashboard

Modern React application for managing parking gates and barriers with a sleek UI design.

## 🚀 Live Demo

**[View Live Application](https://wondrous-malabi-65d24b.netlify.app)**

## 📋 Features

- **🔐 Authentication System** - Secure login with mock authentication
- **🎛️ Pilot Dashboard** - Interactive interface for controlling gates and barriers
- **📱 Responsive Design** - Optimized for desktop and mobile devices
- **🎨 Modern UI** - Built with Tailwind CSS following Figma design
- **⚡ Fast Performance** - Built with Vite for optimal loading times
- **🧪 Comprehensive Testing** - Unit tests with Vitest and React Testing Library
- **🚨 Error Handling** - Global error boundary with toast notifications
- **📊 GraphQL Integration** - Apollo Client with code generation

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 4.3
- **GraphQL**: Apollo Client 3.14
- **Testing**: Vitest + React Testing Library
- **Icons**: Lucide React
- **Code Quality**: ESLint + Prettier

## 🏗️ Architecture

```
src/
├── components/           # React components
│   ├── AppRouter/       # Application routing
│   ├── LoginForm/       # Authentication form
│   ├── PilotDashboard/  # Main dashboard
│   ├── Header/          # Dashboard header
│   ├── PilotController/ # Pilot control interface
│   ├── AppNavigation/   # Bottom navigation
│   ├── ErrorBoundary/   # Error handling
│   └── Toast/           # Notifications
├── contexts/            # React contexts
│   └── ErrorContext.tsx # Global error management
├── hooks/               # Custom React hooks
│   └── useAuth.ts       # Authentication logic
├── lib/                 # External libraries setup
│   ├── apollo-client.ts # GraphQL client config
│   └── graphql/         # GraphQL schemas & types
└── test/                # Test configuration
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd park-app

# Install dependencies
npm install

# Generate GraphQL types
npm run codegen

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run codegen      # Generate GraphQL types
```

## 🔑 Authentication

**Login Credentials:**

- **Email**: `tester@parkapp.pl`
- **Password**: `testPassword`

## 🧪 Testing

The project includes comprehensive unit tests covering:

- **Authentication flow** (useAuth hook)
- **Login form interactions** (LoginForm component)
- **Pilot dashboard functionality** (PilotController component)

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🎨 UI/UX Design

The application follows a modern design system with:

- **Color Scheme**: Blue (#15215C) primary with yellow (#FFB034) accents
- **Typography**: Poppins font family
- **Components**: Rounded corners, subtle shadows, smooth transitions
- **Responsive**: Mobile-first approach with Tailwind CSS

## 🚨 Error Handling

Comprehensive error handling system:

- **Error Boundary** - Catches React component errors
- **Global Error Context** - Manages application-wide errors
- **Toast Notifications** - User-friendly error messages
- **Network Error Handling** - GraphQL and API error management

## 📱 Responsive Design

Optimized for:

- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🔧 Development

### Code Style

- **ESLint** - Code linting with React and TypeScript rules
- **Prettier** - Code formatting
- **TypeScript** - Strict mode enabled
- **Conventional Commits** - Commit message format

### Git Workflow

- **Main Branch**: `master`
- **Commit Style**: Imperative mood with "the" article
- **Example**: `Add the pilot dashboard component`

## 📦 Build & Deployment

The application is automatically deployed to Netlify:

```bash
# Production build
npm run build

# Build includes:
# 1. GraphQL code generation (prebuild)
# 2. TypeScript compilation
# 3. Vite bundling and optimization
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Run linting and tests
6. Submit a pull request

## 📄 License

This project is created as a recruitment task.

---

**Built with ❤️ using React + TypeScript + Tailwind CSS**
