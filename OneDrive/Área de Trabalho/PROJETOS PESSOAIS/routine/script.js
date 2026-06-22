const dias = [
  {nome: "Segunda-feira" , tarefas: [
    {texto: "Estudar JavaScript", feita: false},
    {texto: "Revisar metas da semana", feita: false }
  ]}, 
  {nome : "Terça-feira" , tarefas:[ 
  {texto: "Estudar React", feita :false},
  {texto: "Culto de Terça", feita :false},
  
  ]},
  { nome: "Quarta-feira", tarefas: [] },
  { nome: "Quinta-feira", tarefas: [] },
  { nome: "Sexta-feira", tarefas: [] },
  { nome: "Sábado", tarefas: [] },
  { nome: "Domingo", tarefas: [] },

]

function renderizar (){
  //pega a div container do HTML pelo id.
  const container = document.getElementById("containerSemana");
  //Limpa tudo que tem dentro dela
  container.innerHTML = "";
  //Para cada dia da lista, cria uma div na tela.
  dias.forEach(function(dia, indiceDia){
    //cria div do dia
  const divDia = document.createElement("div");
  divDia.classList.add("dia");
  //Criar o título com o nome do dia 
  const titulo = document.createElement("h2");
  titulo.textContent = dia.nome;

  const list = document.createElement("ul");
  dia.tarefas.forEach(function(tarefa , indiceTarefa){
    checkbox.onaChange = function(){
      marcarTarefa(indiceDia, indiceTarefa);
    }
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.feita;

    const texto = document.createElement("span");
    texto.textContent = tarefa.texto;

    item.appendChild(checkbox);
    item.appendChild(texto);
    list.appendChild(item);
  });
    divDia.appendChild(titulo);
    divDia.appendChild(list);
    container.appendChild(divDia);
  });

}

function marcarTarefa(indiceDia, indiceTarefa) {
  const tarefa = dias[indiceDia].tarefas[indiceTarefa];
  tarefa.feita = !tarefa.feita;
  renderizar();
}

//chamar a função para renderizar 
 