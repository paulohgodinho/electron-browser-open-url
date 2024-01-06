const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  console.log("Starting Electron")

  let foundParameter = false
  let urlFromParameter = ""
  for (let i = 0; i < process.argv.length; i++) {
    const element = process.argv[i];
    if (element === "--url") {
      if (process.argv.length > i+1) {
        urlFromParameter = process.argv[i+1]
        foundParameter = true
        break;
      }
    }
  }

  if(foundParameter == false) {
    console.error("Could not find '--url' arg, usage example: 'electronstart.exe --url https://www.google.com'")
    return
  }

  console.log("Opening URL: " + urlFromParameter)
  win.loadURL(urlFromParameter)
}

app.whenReady().then(() => {
  createWindow()
})