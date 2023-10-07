const glossaryData = [
    { term: "Vitamina K", definition: "A vitamina K é uma vitamina lipossolúvel essencial para a coagulação sanguínea, encontrada sob três formas:"},
    { term: "Biodiversidade", definition: "Variedade de formas de vida na Terra." },
    { term: "Ecossistema", definition: "Comunidade de seres vivos e seu ambiente físico interagindo juntos." },
    { term: "Fotossíntese", definition: "Processo pelo qual as plantas convertem luz solar em energia química." },
    // Adicione mais termos e definições conforme necessário
];

const searchInput = document.getElementById("search");
const glossaryContainer = document.getElementById("glossary");

function createGlossaryCard(term, definition) {
    const card = document.createElement("div");
    card.classList.add("glossary-card");

    const cardInner = document.createElement("div");
    cardInner.classList.add("glossary-card-inner");

    const front = document.createElement("div");
    front.classList.add("glossary-card-front");
    front.textContent = term;

    const back = document.createElement("div");
    back.classList.add("glossary-card-back");
    back.textContent = definition;

    cardInner.appendChild(front);
    cardInner.appendChild(back);

    card.appendChild(cardInner);

    return card;
}

function updateGlossary(query) {
    glossaryContainer.innerHTML = "";

    for (const entry of glossaryData) {
        if (entry.term.toLowerCase().includes(query.toLowerCase())) {
            const glossaryCard = createGlossaryCard(entry.term, entry.definition);
            glossaryContainer.appendChild(glossaryCard);
        }
    }
}

searchInput.addEventListener("input", () => {
    updateGlossary(searchInput.value);
});

updateGlossary("");
