const formulario = document.getElementById("formOS");
const tabela = document.getElementById("historico");

let contador = 2;

formulario.addEventListener("submit", function(e){

e.preventDefault();

const equipamento = formulario.querySelector("input").value;
const tipo = formulario.querySelectorAll("select")[0].value;
const status = formulario.querySelectorAll("select")[1].value;

const linha = document.createElement("tr");

linha.innerHTML=`
<td>${String(contador).padStart(3,"0")}</td>
<td>${equipamento}</td>
<td>${tipo}</td>
<td>${status}</td>
`;

tabela.appendChild(linha);

contador++;

formulario.reset();

alert("Ordem de Serviço cadastrada com sucesso!");

});
