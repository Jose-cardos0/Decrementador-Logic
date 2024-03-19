//seleção de tags

const frm = document.querySelector("form");
const enviar = document.querySelector(".enviar");
const resp = document.querySelector("h2");
const resp2 = document.querySelector("h3");

//eventos

enviar.addEventListener("click", (e) => {  //adiciona um ouvinte do click no botão submit do html
    e.preventDefault();  //evita o recarregamento da página

    let num   //declara uma variável de entrada para colhermos o valor

    do {  //iniciamos um do...while ( do = Faça) && (While = Enquanto)
        num = Number(frm.inNumber.value);  //damos um get no formularios, onde temos um input no hrml com id de inNumber, pegaremos o valor digitado
        if(num == 0 || isNaN(num)) {   //if = SE . Se num for igual a 0 ou não for um número então -->
            num = "valor inválido"     //--> ele declara que num não existe.
            resp2.innerText = num;      //Utilizaremos o innerText para por na nossa tag vazia no html h3 o texto declarado na linha acima.
            h2.classList.add("hide");   //Se o if for false e o valor for acima de 0 ou numérico, ele vai por uma class hide no h2 obs(o h2 é a resposta do laço após o ...while que declara os valores pares se o número declarado for maior que 0)
            h3.classList.remove("hide"); //se o if for true, ele então sera 0 ou letras, ai ele remove o hide do h3 e aparecer o valor de num = "valor inválido declarado na linha 18"
            break  //break é para se o valor for true ou seja 0, ele para este if e pula para a linha 24 > 26.
        }
    }while (num == 0 || isNaN(num));  //do...While, este laço de repetição é utilizado quando queremos que a variável (num) seja testada ao menos uma vez, a condição só é imposta no final em whille... 

    let pares = `Pares entre 1 e ${num}:`; //como demos um break caso o valor seja true para 0, iniciamos uma nova variável let onde faremos um for que acumula valores pares.
    for(let i = 2; i <= num; i = i + 2) { //para cada i o valor é 2, se o i for menor ou igual ao valor de num (nossa variável de entrada), então i é o valor de i que é 2 somando +2
        // ou seja se colocarmos o valor de 10 em num = ficará i = 2, i = 2 + 2 = 4, i = 4 + 2 = 6, i = 6 + 2 = 8, i = 8 + 2 = 10... OPA, chegamos igual a 10, então o incrementador +2 para.
        pares = pares + i + ", "; //aqui vamos usar um acumulador, o acumulador é o valor dele + um outro valor, nesse caso os valores de i. OBS: Como PARES não tem nem um valor númerico declarado ou sendo colhido, ele se torna 0
        //veja... pares = pares que é 0 + i ou seja pares + i = 2, pares + i + i = 4, pares + i + i + i = 6 e assim por diante (ALERT : se referindo a linha 28)
        resp.innerText = pares //aqui faremos o mesmo que a linha 19, o h2 mostrará os valores pares caso o while seja um número maior que 0.
        h3.classList.add("hide");  //se ele for true e o valor for acima de 0, então sera adicionado a classe hide que tem o display none no nosso css e o valor do if da linha 17 some da tela
        h2.classList.remove("hide"); //se ele true e o valor acima de 0, então ele será removido a classe hide e fica visível na tela.
    }

})

