# Web App Test

A basic vanilla JavaScript web application built with Vite and containerized with Docker.

## Project Structure

```
web-app-test/
├── src/
│   └── extscript.js    # Main JavaScript file (served at root in production)
├── index.html          # Entry HTML file
├── package.json        # Node.js dependencies
├── vite.config.js      # Vite configuration
├── Dockerfile          # Docker configuration
└── .dockerignore       # Docker ignore file
```

## Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:3000`

**Note:** In development, the script is loaded from `/src/extscript.js`, but in production (Docker), it's served from `/extscript.js` at the root level.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Docker

### Build Docker Image

```bash
docker build -t web-app-test .
```

### Run Container

```bash
docker run -p 8080:80 web-app-test
```

Then open your browser at `http://localhost:8080`

### File Serving in Docker

The Dockerfile copies `src/extscript.js` to the root level of the nginx server, so it's accessible at `/extscript.js` instead of `/src/extscript.js`. This keeps the repository structure clean while serving the file at the desired location in production.

## Features

- ⚡️ Vite for fast development and optimized builds
- 🐳 Docker support with lightweight nginx image
- 📦 Minimal dependencies (vanilla JavaScript)
- 🔧 Simple configuration
- 📁 Flexible file serving (src in repo, root in production)

## License

MIT
