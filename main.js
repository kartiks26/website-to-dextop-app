const { app, BrowserWindow, nativeTheme } = require("electron");
const path = require("path");

function createWindow() {
	const win = new BrowserWindow({
		title: "Music App",
		center: true,
		show: false,
		title: "Music App",
		titleBarOverlay: {
			color: "#0000",
			opacity: 0.5,
		},
		icon: path.join(__dirname, "assets/icons/png/64x64.png"),
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});

	win.loadURL("https://musicapp-kohl.vercel.app/");
	win.setMenu(null);
	win.maximize();
	win.show();
}

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
