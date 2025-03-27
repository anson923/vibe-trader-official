# Vibe Trader Official

A modern trading application with a vibrant UI and advanced trading features.

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- TailwindCSS v4

### Backend
- Go 1.23
- Fiber (Go web framework)
- PostgreSQL
- Docker

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Go 1.23 or higher
- Node.js and npm
- Docker and Docker Compose

### Installation

1. Clone the repository
```bash
git clone https://github.com/anson923/vibe-trader-official.git
cd vibe-trader-official
```

2. Set up the database
```bash
make docker-run
```

3. Run the backend server
```bash
make run
```

For live reloading during development:
```bash
make watch
```

4. Set up the frontend
```bash
cd frontend
npm install
npm run dev
```

## Development Commands

The project includes a Makefile with several useful commands:

```bash
make all      # Run build with tests
make build    # Build the application
make run      # Run the application
make docker-run # Create DB container
make docker-down # Shutdown DB Container
make itest    # DB Integration Tests
make watch    # Live reload the application
make test     # Run the test suite
make clean    # Clean up binary from the last build
```

## Project Structure

- `cmd/api/` - Backend API entry point
- `internal/` - Backend implementation
  - `server/` - HTTP server setup
  - `database/` - Database interaction
- `frontend/` - React frontend application

## License

This project is licensed under the MIT License - see the LICENSE file for details.
