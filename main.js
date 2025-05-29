const { app, BrowserWindow, ipcMain } = require('electron')

const mysql = require('mysql2/promise')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      preload: __dirname + "/preload.js",
    }
  })

  win.loadFile('pages/index.html')
}

function conexaoComBanco() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'electron_db'
    })
}

ipcMain.handle("Cadastrar-meu-usuario-palavra", function(event, nome, email) {
  console.log("Nome:",nome)
  console.log("Email:",email)
  console.log("Eita")
})

app.whenReady().then(() => {
  createWindow()
})

