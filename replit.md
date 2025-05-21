# Full Stack Web Application with React and Express

## Overview

This repository contains a full-stack web application built with React (frontend) and Express (backend). The application uses a modern tech stack including Vite for bundling, Tailwind CSS for styling, React Query for data fetching, and Drizzle ORM for database interactions.

The project is structured as a monorepo with client and server code separated into their own directories, while sharing common code through a shared directory.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a client-server architecture:

1. **Frontend**: React-based single-page application
   - Built with Vite for fast development and optimized production builds
   - Uses Tailwind CSS for styling with the shadcn/ui component library
   - State management with React Query
   - Routing with Wouter (lightweight alternative to React Router)

2. **Backend**: Express.js server
   - RESTful API endpoints
   - In-memory storage implementation with interface for future database integration
   - Middleware for logging and error handling

3. **Database**: 
   - Currently using in-memory storage
   - Schema defined using Drizzle ORM with PostgreSQL dialect
   - Ready for PostgreSQL integration

4. **Shared Code**:
   - Database schema definitions shared between client and server
   - Type definitions for consistent data handling

## Key Components

### Frontend

1. **Component Structure**:
   - UI components using shadcn/ui (based on Radix UI primitives)
   - Page components for different routes
   - Layout components (Navbar, Footer)
   - Feature-specific components organized by domain

2. **State Management**:
   - React Query for server state
   - Local component state with React hooks

3. **Routing**:
   - Simple routing with Wouter

### Backend

1. **Express Server**:
   - REST API endpoints under /api prefix
   - Middleware for logging and error handling

2. **Storage Layer**:
   - Interface-based design with implementation swappable
   - Currently using in-memory storage (MemStorage)
   - Prepared for future database integration

3. **Schema**:
   - Defined using Drizzle ORM
   - Currently includes a basic User model
   - Schema validation with Zod

## Data Flow

1. **API Requests**:
   - Frontend makes requests to the backend using React Query
   - Custom apiRequest utility for consistent fetch handling
   - Error handling and response formatting

2. **Data Storage**:
   - Backend receives requests through Express routes
   - Storage layer handles data operations
   - Data validation using Zod schemas

3. **State Management**:
   - Server state managed by React Query
   - Query invalidation for data refreshing

## External Dependencies

### Frontend Dependencies
- React and React DOM for UI rendering
- Tailwind CSS for styling
- shadcn/ui components (based on Radix UI)
- React Query for data fetching
- Wouter for routing
- Lucide React for icons
- Various utility libraries (clsx, class-variance-authority)

### Backend Dependencies
- Express for the web server
- Drizzle ORM for database schema definition
- Zod for validation
- Connect-pg-simple (prepared for session management)

## Deployment Strategy

The application is configured for deployment on Replit with the following strategy:

1. **Development Mode**:
   - Run with `npm run dev` command
   - Serves the React app through Vite's dev server middleware
   - Hot module replacement enabled

2. **Production Mode**:
   - Build process: `npm run build`
   - Frontend built with Vite
   - Backend bundled with esbuild
   - Static assets served by Express
   - Run with `npm run start` command

3. **Database**:
   - Currently using in-memory storage
   - Ready for PostgreSQL integration with Drizzle
   - Environment variable `DATABASE_URL` expected for database connection

## Getting Started

1. Set up the environment variables:
   - `DATABASE_URL` - Connection string for PostgreSQL database

2. Install dependencies:
   ```
   npm install
   ```

3. Start development server:
   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```

5. Start production server:
   ```
   npm run start
   ```

6. Push schema changes to database:
   ```
   npm run db:push
   ```