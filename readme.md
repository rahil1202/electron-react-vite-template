# React Frontend + Vite + Node.js Backend + Electron

A complete setup for building a cross-platform desktop application using React (frontend), Vite (development tooling), Node.js (backend), and Electron (desktop environment). This project serves as a template for developers looking to build modern desktop applications with a lightweight backend.

---

## Features

- **Frontend**: React powered by Vite for fast builds and development.
- **Backend**: Node.js with Express and ES6+.
- **Electron**: Cross-platform desktop application framework.
- **Integrated Workflow**:
  - Single command to run frontend, backend, and Electron together.
  - Easy packaging for production with `electron-builder`.

---

## Getting Started

### Prerequisites

- **Node.js**: Install from [Node.js website](https://nodejs.org/).

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rahil1202/react-electron-vite-template.git
   cd electron-react-vite-template
   ```

2. Install dependencies:

   ```bash
   npm install 
   cd frontend && npm install
   cd backend && npm install
   ```

---

### Development

To run the project in development mode:
Go to root directory

```bash
npm run dev
```

This will:

- Start the **React frontend** (`http://localhost:5173`).
- Start the **Node.js backend** (`http://localhost:4000`).
- Launch the **Electron desktop application**.

---

### Build for Production

1. Build the React frontend:

   ```bash
   npm run build
   ```

2. Package the app for distribution:

   ```bash
   npx electron-builder
   ```
If it fails run terminal as administrator and then run above code again.

3. The packaged app will be available in the `dist/` directory, with name `react-electron-vite-template Setup.exe`
   You may install it and use it. It can be share across easily

---

### Project Structure

```plaintext
project/
├── backend/            # Node.js backend
│   ├── src/            # Backend source code
│   └── package.json    # Backend dependencies
│
├── frontend/           # React frontend (with Vite)
│   ├── src/            # React source code
│   └── package.json    # Frontend dependencies
│
├── electron/           # Electron main and preload scripts
│   ├── main.js         # Main process
│   └── preload.js      # Preload script
│
├── package.json        # Root dependencies for Electron
└── README.md           # Project documentation
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

- GitHub: [rahil1202](https://github.com/rahil1202)
- Email: <rahilisvahora@gmail.com>
- LinkedIn:[rahil-vahora](https://linkedin.com/in/rahil-vahora)
