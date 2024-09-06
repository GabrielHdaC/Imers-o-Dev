function pesquisar() {
    // Essa função é responsável por pesquisar e exibir os resultados na página.
    
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campoPesquisa").value;

    if(!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado!"
        return 0;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

        
    // Itera sobre cada dado na lista de resultados
    for(let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        if(titulo.includes(campoPesquisa) ||  descricao.includes(campoPesquisa)) {
            // Cria uma nova div para cada resultado
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
        `;
        }   
    }

    if(!resultados) {
        resultados = "Nada encontrado";
    }

    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
}