const contato = document.getElementById("contato")
const modal = document.querySelector("dialog")
const close = document.getElementById("close")

contato.onclick = function (){
    modal.showModal()
}

close.onclick = function (){
    modal.close()
}

const deslike = document.getElementById("nolike")
const like = document.getElementById("like")

deslike.onclick(('click'), ()=>{
    
})