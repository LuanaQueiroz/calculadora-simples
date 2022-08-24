    const screen = document.getElementById('text')
    let screenText = ""
    
    //inserir o conteúdo dos botões na tela
    const insertValues = (btt) => {
        screenText += String(btt)
        screen.innerHTML = screenText
    }
 

    //limpar o visor
    const clearUp = () => {
        screenText = ""
        screen.innerHTML = screenText
    }
    
    
    //calculadora
    const calculator = () => {
        const result = eval(screenText)
        screen.innerHTML = result
        

    }



 
    


