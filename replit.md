# Overview

This is a modern full-stack portfolio application showcasing a mobile app developer's work and skills. The application features a React frontend with a dark theme aesthetic, built using modern web technologies including TypeScript, Tailwind CSS, and shadcn/ui components. The backend is a Node.js Express server with database integration using Drizzle ORM and PostgreSQL. The application includes a contact form system, GitHub API integration for displaying repositories, and various interactive sections including hero, about, skills, projects, and blog sections.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming, providing a dark-mode design system
- **UI Components**: shadcn/ui component library with Radix UI primitives for accessibility and consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation

## Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Development**: In-memory storage fallback (MemStorage) for development/testing
- **API Design**: RESTful API endpoints with proper error handling and validation

## Database Design
- **Primary Database**: PostgreSQL with Drizzle ORM
- **Schema**: Contact messages table with fields for full name, email, phone, subject, budget, message, and timestamps
- **Validation**: Zod schemas for both database and API validation ensuring data integrity
- **Development Fallback**: In-memory storage implementation for local development

## Development Workflow
- **Development Server**: Vite dev server with HMR (Hot Module Replacement)
- **Production Build**: Vite build system with esbuild for server bundling
- **Type Checking**: TypeScript compiler for static type analysis
- **Database Migrations**: Drizzle Kit for database schema management

## Integration Features
- **GitHub API**: Integration for fetching user profiles and repositories to dynamically display project information
- **Contact System**: Full contact form with validation, submission, and storage capabilities
- **Toast Notifications**: User feedback system using Radix UI toast components

# External Dependencies

## Core Technologies
- **Node.js & Express**: Server runtime and web framework
- **React & Vite**: Frontend framework and build tooling
- **TypeScript**: Static type checking across full stack
- **PostgreSQL**: Primary database (with @neondatabase/serverless for cloud deployment)

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

## Data & State Management
- **Drizzle ORM**: Type-safe database ORM with PostgreSQL support
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Schema validation and type inference

## Development & Build Tools
- **Vite**: Development server and build tool
- **esbuild**: JavaScript bundler for production
- **PostCSS & Autoprefixer**: CSS processing
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

## External APIs
- **GitHub API**: For fetching user profiles and repository information
- **Font APIs**: Google Fonts for typography (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)