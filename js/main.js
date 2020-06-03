// console.log("Mensagem teste");
const tarefas =[
    {
    id: 1,
    prioridade: 1,
    testo:"Lavar Louças",
    feita: true
},
{
    id: 2,
    prioridade: 2,
    testo:"Lavar banheiro",
    feita: true
},
{
    id: 3,
    prioridade: 1,
    testo:"Cozinhar",
    feita: true
}
];

const table = document.getElementById('table');

function mostrarTarefa(t){
    
    // console.log();

    // Criar uma nova linha
    table.appendChild(tr);

    // Dar a essa linha a classe adequada (done ou "")
    tr.className = t.feita?'done':'';
    // tr.classList.add("done");

    // criar um input checkbox
    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");

    // Marcar o input checkbnox caso nessário
    checkbox.checked = t.feita;

    // Criar uma célula 
    let tdCheckbox = document.createElement("td");

    // Adicionar o input à célula criada
    tdCheckbox.appendChild(checkbox);

    // Criar a célula de texto (td) e adicionar a ela o texto
    let tdText = document.createElement("td");
    let srtPrioridade = ["baixa", "media", "alta"][t.prioridade -1];
    tdTexto.innerText = `[${srtPrioridade}] ${t.texto}`;

    // por fim, criar um elemento "i" da classe material-icons
    // contendo o texto delete
    let i = document.createElement('i');
    i.className = "material-icons";
    i.innerText = "delete";
    i.addEventListener('click',()=>{console.log(`clicou ${t.id}`)});

    // Criar uma célula
    

    // adicionar à célula criada o elemento i
    tdDelete.appendChild(i);

    // Adicionar as três células criadas a linha criada.
    tr.appendChild(tdCheckbox);
    tr.appendChild(tdTexto);
    tr.appendChild(tdDelete);

    // Adicionar a linha a tabela.
    table.appendChild(tr);

    // Para criar um atributo em um elemento
    elemento.setAttribute("nomeDoAtributo","valorDoAtributo");

    // Para marcar um checkbox como checked
    checkbox.checked = true;

    // Para atribuir uma classe css
    elemento.className = "nomesDasClassesSemPonto"

    // para adicionar texto ao elemento
    elemento.innerText = "Texto a ser adicionado"




    

/* parametros DOM para ações:

document.getElementById  - elemento ID
document.getElementByClassName -Elemento classe
document.getElementByTagName - regra CSS
document.querySelector
document.querySelectorAll
*/


}

function mostrarTarefas(tarefas){

}

function digaOla(){
    console.log("Olá" + Math.random());
    

}

mostrarTarefa(tarefas);


let bt=document.getElementById("botão");
// bt.onclick = digaOla();

bt.addEventListener('click', digaOla);