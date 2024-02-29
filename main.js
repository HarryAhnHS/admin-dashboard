const main = document.querySelector(".cards-container");

for (i = 0; i < cards.length; i++) {
    main.innerHTML += `<div class="card">
        ${cards[i].name}
    </div>`;
};