'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderCountry(data, className = '') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${Math.trunc(data.population / 1e6)} million</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1;
};

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

/* const request = fetch(
    "https://restcountries.com/v3.1/name/Portugal"
);

console.log(request);

const getCountryData = function(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    });
}

*/


function getJSON (url, errorMessage = "Something went wrong") {
    console.log(url);
    return fetch(url).then(function (response) {
        if (!response.ok) {
            throw new Error(`${errorMessage}; Status Code: ${response.status}`)
        };
        return response.json();
    }
)
}
// const countryName = "Portugal";
// getJSON(`https://restcountries.com/v3.1/name/${countryName}`).then((data) => console.log(data)); 

/* function getCountryData (countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Country not found: ${response.status}`)
        }
        return response.json();
        }
    )   
    .then(function (data) {
            console.log(data);
            renderCountry(data[0]);
            const neighbor = data[0].borders[0]
            if(!neighbor) return;

            // Country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`)
        }
    )
    .then((response) => response.json())
    .then(function (data) {
            console.log(data[0]);
            renderCountry(data[0], 'neighbour');
            }
    )
    .catch(err => console.error(err));
}
// getCountryData("Germany");

btn.addEventListener('click', function () {
    const country = prompt("What Country do you want info on?")
    getCountryData(`${country}`)
})

*/

function whereAmI (lat, lng) {
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json`
    return fetch(url).then(response => {
        // console.log(response.status);
        if (response.status === "403") throw new Error(`Bad status request ${response.status}`);
        return response.json();
    }
    )
    // .then(data => console.log(`You are in ${data.city}, ${data.country}`))
    .then(data => getCountryData(data.country))
    .catch(err => console.log(`There was an error: ${err}`));
}




// const country = whereAmI(52.508, 13.381).then();
// console.log(country);

function getCountryData (countryName) {
    getJSON(`https://restcountries.com/v3.1/name/${countryName}`, "Country Not Found")
    .then(function (data) {
        renderCountry(data[0]);
        const neighbor = data[0].borders;
        if (!neighbor) {
            throw new Error("There was no neighbor found!")
            return;
        }
        return neighbor[0];
    })
    .then((neighbor) => getJSON(`https://restcountries.com/v3.1/alpha/${neighbor}`, "Country not Found"))
    .then((data) => renderCountry(data[0], 'neighbour'))
    .catch(err => {
        // alert(`There was an error: ${err}`);
        console.log(`${err}`);
})
}

btn.addEventListener('click',() => {
    whereAmI(52.508, 13.381);
    whereAmI(19.037, 72.873);
    whereAmI(-33.933, 18.474);
})