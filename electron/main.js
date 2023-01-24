const { app, BrowserWindow } = require("electron");
const isDev = require('electron-is-dev');

const path = require('path');

const createWindow = () => {  
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    // win.loadFile("index.html");
    win.loadURL(
        isDev
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, '../build/index.html')}`
    );
    if (isDev) {
        win.webContents.openDevTools();
    }
};

// окно может быть создано только когда произодйет событие ready для модуля app
app.whenReady().then(() => {
    createWindow();

    //это для MacOS, тк при закрытии окна приложение продолжает работать
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
