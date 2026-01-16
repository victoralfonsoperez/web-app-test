# Web App Test

A basic vanilla JavaScript web application built with Vite and containerized with Docker.

## Project Structure

```
web-app-test/
├── src/
│   └── extscript.js    # Main JavaScript file (served at root in production)
├── public/
│   └── extscript.js    # Placeholder for build
├── index.html          # Entry HTML file
├── package.json        # Node.js dependencies
├── vite.config.js      # Vite configuration
├── nginx.conf          # Nginx server configuration
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

**Note:** In development, the script is loaded from `/src/extscript.js`.

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

The application uses a custom nginx configuration (`nginx.conf`) that includes a rewrite rule to serve `extscript.js` at the root level:

```nginx
location = /extscript.js {
    alias /usr/share/nginx/html/src/extscript.js;
}
```

This allows the file to remain in the `src/` folder in the repository while being accessible at `/extscript.js` in production.

## Configuration Files

- **nginx.conf**: Custom nginx server configuration with URL rewriting
- **vite.config.js**: Vite build configuration
- **Dockerfile**: Multi-stage build with Node.js and nginx

## Features

- ⚡️ Vite for fast development and optimized builds
- 🐳 Docker support with lightweight nginx image
- 📦 Minimal dependencies (vanilla JavaScript)
- 🔧 Simple configuration
- 📁 Flexible file serving (src in repo, accessible at root in production)
- 🔄 Custom nginx configuration for URL rewriting

## License

MIT
