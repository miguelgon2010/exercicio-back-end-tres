// Catálogo inicial
let catalogoFilmes = [
    { id: 1, titulo: "Matrix", ano: 1999, diretor: "Lana Wachowski", genero: "Ficção", nota: 4.8 },
    { id: 2, titulo: "Titanic", ano: 1997, diretor: "James Cameron", genero: "Romance", nota: 4.5 },
    { id: 3, titulo: "Toy Story", ano: 1995, diretor: "John Lasseter", genero: "Animação", nota: 4.7 },
    { id: 4, titulo: "O Poderoso Chefão", ano: 1972, diretor: "Francis Ford Coppola", genero: "Drama", nota: 4.9 },
    { id: 5, titulo: "Star Wars", ano: 1977, diretor: "George Lucas", genero: "Ficção", nota: 4.6 }
];

// Simulando recebimento de API (JSON para Objeto)
const novosFilmesJSON = `[
    { "id": 6, "titulo": "Inception", "ano": 2010, "diretor": "Christopher Nolan", "genero": "Ficção", "nota": 4.8 },
    { "id": 7, "titulo": "O Rei Leão", "ano": 1994, "diretor": "Roger Allers", "genero": "Animação", "nota": 4.9 },
    { "id": 8, "titulo": "Interstellar", "ano": 2014, "diretor": "Christopher Nolan", "genero": "Ficção", "nota": 4.7 }
]`;

const novosFilmesObj = JSON.parse(novosFilmesJSON);
catalogoFilmes.push(...novosFilmesObj);

// Função para exibir os filmes na tela
function renderizarFilmes(lista) {
    const container = document.getElementById('lista-filmes');
    container.innerHTML = ""; // Limpa a tela

    lista.forEach(filme => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${filme.titulo} (${filme.ano})</h3>
            <p><strong>Diretor:</strong> ${filme.diretor}</p>
            <p><strong>Gênero:</strong> ${filme.genero}</p>
            <p class="nota">⭐ ${filme.nota}/5.0</p>
        `;
        container.appendChild(card);
    });
}

// Funções de busca/filtro
function filtrarFiccao() {
    const ficcao = catalogoFilmes.filter(f => f.genero === "Ficção");
    renderizarFilmes(ficcao);
}

function mostrarTodos() {
    renderizarFilmes(catalogoFilmes);
}

// Inicia a página mostrando todos
mostrarTodos();

// Exibe no console conforme pedido no exercício original
console.log("JSON Formatado:", JSON.stringify(catalogoFilmes, null, 2));
