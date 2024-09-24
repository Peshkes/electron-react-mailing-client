import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import * as path from 'path';
import { fileURLToPath } from 'url';

//const __dirname = new URL('.', import.meta.url).pathname;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1250,
        height: 900,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    mainWindow.loadFile(path.join(__dirname, '../public/index.html'));
};

ipcMain.handle('dialog:openFile', async () => {
    const result = await dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [
            { name: 'Images and Videos', extensions: ['jpg', 'png', 'mp4', 'mov'] },
        ],
    });
    return result.filePaths;
});

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
