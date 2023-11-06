const { app, BrowserWindow } = require('electron');

let mainWindow;
// Add these lines at the top of the file
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 640, // Match the width of the video
		height: 390, // Match the height of the video
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false, // Make sure to turn this off to use Node.js features
		},
		frame: true, // the default window frame
		resizable: true, // resizing
	});

	// and load the index.html of the app.
	const startUrl = isDev
		? 'http://localhost:3000' // URL for the dev server
		: `file://${path.join(__dirname, '../build/index.html')}`; // Path for production build

	mainWindow.loadURL(startUrl);

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
	app.quit();
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});
