const {contextBridge, ipcRenderer} = require("electron")

function cadastrarUsuario(nome, email){
    ipcRenderer.invoke("Cadastrar-meu-usuario-palavra", nome, email)
}
contextBridge.exposeInMainWorld("api", {
    cadastrarUsuario
})