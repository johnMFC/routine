const dias = [
  { nome: "Segunda-feira", tarefas: [
    { texto: "Estudar JavaScript", feita: false },
    { texto: "Revisar metas da semana", feita: false }
  ]},
  { nome: "Terça-feira", tarefas: [
    { texto: "Estudar React", feita: false },
    { texto: "Culto de Terça", feita: false }
  ]},
  { nome: "Quarta-feira", tarefas: [] },
  { nome: "Quinta-feira", tarefas: [] },
  { nome: "Sexta-feira", tarefas: [] },
  { nome: "Sábado", tarefas: [] },
  { nome: "Domingo", tarefas: [] },
];

function renderizar() {
  const container = document.getElementById("containerSemana");
  container.innerHTML = "";

  dias.forEach(function(dia, indiceDia) {

    const divDia = document.createElement("div");
    divDia.classList.add("dia");

    const titulo = document.createElement("h2");
    titulo.textContent = dia.nome;

    const list = document.createElement("ul");

    dia.tarefas.forEach(function(tarefa, indiceTarefa) {

      const item = document.createElement("li");

    if (tarefa.feita) {
        item.classList.add("concluida");
      }

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = tarefa.feita;
      
      checkbox.onchange = function() {
        marcarTarefa(indiceDia, indiceTarefa);
      };

      const texto = document.createElement("span");
      texto.textContent = tarefa.texto;

      const btnApagar = document.createElement("button");
      btnApagar.textContent = "X";
      btnApagar.onclick = function() {
        apagarTarefa(indiceDia, indiceTarefa); // ✅ Agora funciona!
      };

      item.appendChild(checkbox);
      item.appendChild(texto);
      item.appendChild(btnApagar);
      list.appendChild(item);

    });

    const btnAdicionar = document.createElement("button");
    btnAdicionar.textContent = "+ Adicionar Tarefa";
    btnAdicionar.onclick = function() {
      adicionarTarefa(indiceDia);

    };

    divDia.appendChild(titulo);
    divDia.appendChild(list);
    divDia.appendChild(btnAdicionar);
    container.appendChild(divDia);
  

  });
}

function adicionarTarefa(indiceDia){
  const texto = prompt("Digite uma nova tarefa:");
  if(texto && texto.trim() !== ""){
    dias[indiceDia].tarefas.push({ 
    texto: texto.trim(), 
    feita: false
   });
    renderizar();
  }
}

function marcarTarefa(indiceDia, indiceTarefa) {
  const tarefa = dias[indiceDia].tarefas[indiceTarefa];
  tarefa.feita = !tarefa.feita;
  renderizar();
}

function apagarTarefa(indiceDia, indiceTarefa) {

  dias[indiceDia].tarefas.splice(indiceTarefa, 1)
  renderizar();
}
  renderizar();