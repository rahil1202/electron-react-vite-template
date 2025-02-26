const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

const isDev = !app.isPackaged;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        show: true,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            contextIsolation: true,
            nodeIntegration: false,
            sandbox: true,  // Enables sandbox for better security
            enableRemoteModule: false,  // Prevents unnecessary remote access
            webSecurity: true,  // Enforces security policies
        },
    });

   const startURL = isDev
        ? "http://localhost:5173"
        : `file://${path.join(__dirname, "frontend", "dist", "index.html")}`;

    mainWindow.loadURL(startURL).catch((err) => {
        console.error("Failed to load URL:", err);
    });

    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
}

app.on("ready", createMainWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});
