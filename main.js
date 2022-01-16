const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1600,
        height: 1080
    });

    mainWindow.setTitle('SecureCall');
    mainWindow.loadURL('https://securecall.herokuapp.com/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});