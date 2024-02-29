const main = document.querySelector(".cards-container");

for (i = 0; i < cards.length; i++) {
    main.innerHTML += `<div class="card">
    <div class="card-img">
        <img src="${cards[i].image}">
    </div>
    <div class="card-intro">
        <div class="card-title">
            <p class="card-name">${cards[i].name}</p>
            <p class="card-author">${cards[i].postUser}</p>
        </div>
        <div class="card-rating">
            <div class="rating-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" /></svg>
            </div>
            <p class="rating">${cards[i].rating}</p>
            <p class="num-ratings">(${cards[i].numRatings})</p>
        </div>
    </div>
    <div class="card-tags" id="${cards[i].num}"> 
    </div>
    <div class="card-description">
        ${cards[i].description}
    </div>
    <div class="card-stats">
        <div class="stat intensity">
            <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z" /></svg>
            </div>
            <p>${cards[i].intensity}</p>
        </div>
        <div class="stat days">
            <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M7 11H9V13H7V11M21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5M5 7H19V5H5V7M19 19V9H5V19H19M15 13H17V11H15V13M11 13H13V11H11V13Z" /></svg>
            </div>
            <p>${cards[i].numDays} Day</p>
        </div>
        <div class="stat time">
            <div class="stat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFFFFF" d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 12.8L7.7 15.6L7 14.2L11 11.9V7H12.5V12.8Z" /></svg>
            </div>
            <p>${cards[i].averageDailyHours} Hrs</p>
        </div>
    </div>
</div>`;
};

// Add tags for each object into respective containe


const tagsContainer = document.querySelectorAll(".card-tags");
tagsContainer.forEach( e => {
    console.log(cards[e.id-1]);

    for (t = 0; t < cards[e.id-1].tags.length; t++) {
        e.innerHTML += `<div class="tag">
        <p>${cards[e.id-1].tags[t]}</p>
    </div>`;
    }
})

