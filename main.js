const setupEvents = require("./installers/setupEvents");
if (setupEvents.handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 400,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    },
    show: false,
    icon: __dirname + "/icons/win/icon.ico"
    // frame: false
  });
  win.setMenu(null);
  // and load the index.html of the app.
  win.loadFile("pages/index.html");
  win.once("ready-to-show", () => {
    win.show();
  });
}

app.whenReady().then(createWindow);
