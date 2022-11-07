function carregar(){
    var msg = window.document.getElementById('msg') //Assume o valor do elemento cujo o id é 'msg'
    var img = window.document.getElementById('imagem') //Assume o valor do elemento cujo o id é 'imagem'
    var data = new Date() //data recebe o valor da data e hora local
    //var hora = data.getHours() //hora recebe o valor da hora local da váriavel data
    var hora = 6
    msg.innerHTML = `Agora são ${hora} horas.` //.innerHTML junta a mensagem atribuida ao HTML
    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src='manha.png' //Variável img recebe a imagem manha.png
        document.body.style.background = '#ffd52f'
    }else if(hora >= 12 && hora<18){
        //Boa tarde!
        img.src='tarde.png' //Variável img recebe a imagem tarde.png
        document.body.style.background = '#ff9804'
    }else {
        //Boa noite!
        img.src='noite.png'  //Variável img recebe a imagem noite.png
        document.body.style.background = '#2e609b'
    }
}
