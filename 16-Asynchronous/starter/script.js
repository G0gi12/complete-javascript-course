'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*
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
}; */

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

console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(result => console.log(result));
console.log('Test End')

const lotteryPromise = new Promise(function(resolve, reject) {
  console.log('Lottery Draw is Happening');
  setTimeout(function() {
    if (Math.random() >= 0.5) {
      resolve('You WIN the Lottery!');
    } else {
      reject(new Error('You LOSE your money!!'));
  }
}, 1000)

})


lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));


//  Promisifying setTimeout()
function wait(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  })
};


const seconds = 2;
wait(seconds).then(() => {
  console.log(`I waited ${seconds} seconds.`)
})


navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);




function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    )
  })
};

function getCountryData (countryName) {
  getJSON(`https://restcountries.com/v3.1/name/${countryName}`, "Country Not Found")
  .then(function (data) {
    renderCountry(data[0]);
    const neighbor = data[0].borders;
    if (!neighbor) {
      throw new Error("There was no neighbor found!")
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

function whereAmI () {
  getPosition()
  .then(pos => {
    const {latitude: lat, longitude: lng} = pos.coords
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
    return fetch(url);
  }).then(response => {
    // console.log(response.status);
    if (response.status === "403") throw new Error(`Bad status request ${response.status}`);
    return response.json();
  }
)
// .then(data => console.log(`You are in ${data.city}, ${data.country}`))
.then(data => getCountryData(data.country))
.catch(err => console.log(`There was an error: ${err}`));
}

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


btn.addEventListener('click', whereAmI)

function createImage (imgPath) {
  const newImage = document.createElement('img');
  return new Promise(
    res => newImage.src = imgPath,
    err => console.error(err)
  );
}

createImage("img/img-1.jpg").then(res => console.log(res))


const imgContainer = document.querySelector('.images');

//  Promisifying setTimeout()
function wait(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  })
};

function createImage (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImage = document.createElement('img');
    newImage.src = imgPath;
    
    newImage.addEventListener('load', function () {
      imgContainer.append(newImage);
      resolve(newImage)
    });
    
    newImage.addEventListener('error', function() {
      reject(new Error('Image not found'))
    })
  })
}

let currentImage;

createImage("img/img-1.jpg")
.then(img => {
  currentImage = img;
  console.log('Image 1 loaded');
  return wait(2)
})
.then(() => {
    currentImage.style.display = 'none'
    return createImage("img/img-2.jpg")
  })
  .then(img => {
    currentImage = img
    console.log('Image 2 loaded');
    return wait(2)
  })
  .then(() => currentImage.style.display = 'none')
  .catch(err => console.error(err))

  
  function getPosition () {
    return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  });
}

async function getCountryName () {
  const position = await getPosition();
  const {latitude: lat, longitude: lng} = position.coords;
  const res = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  if (!res.ok) {
    throw new Error("Problem getting geo data")
  }
  const loc_data = await res.json()
  return await loc_data.country;
}

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


async function whereAmI () {
  try {
    let country = await getCountryName()
    country = encodeURIComponent(country);
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) {
      throw new Error("Problem getting country")
    }
    const data = await res.json();
    renderCountry(data[0])
  } catch (err) {paramsn");



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

async function getThreeCountries (c1, c2, c3) {
  try {
      const data = await Promise.all([
        getJSON(`https://restcountries.com/v3.1/name/${c1}`),
        getJSON(`https://restcountries.com/v3.1/name/${c2}`),
        getJSON(`https://restcountries.com/v3.1/name/${c3}`),
      ]);
      
      console.log(data.map(d => d[0].capital));
      // console.log(data1.capital, data2.capital, data3.capital);
    } catch (error) {
      console.error(error)
    }
  }
  

// getThreeCountries('portugal', 'canada', 'usa').then(() => console.log("Hi"))
  
  

(async function () {
  try {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/portugal`),
        getJSON(`https://restcountries.com/v3.1/name/canada`),
        getJSON(`https://restcountries.com/v3.1/name/mexico`),
    ]);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
})();

function timeout (s) {
  return new Promise(function(_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long'))
    }, s*1000);
  });
}

Promise.race(
  [
    getJSON(`https://restcountries.com/v3.1/name/portugal`),
    timeout(0.2),
  ]
).then((res) => console.log(res)).catch((err) => console.log(err));


*/

function wait(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  })
};

let currentImage;

function createImage (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImage = document.createElement('img');
    newImage.src = imgPath;
    
    newImage.addEventListener('load', function () {
      imgContainer.append(newImage);
      currentImage = newImage;
      newImage.classList.add('parallel');
      resolve(currentImage)
    });
    
    newImage.addEventListener('error', function() {
      reject(new Error('Image not found'))
    })
  })
}

const imgContainer = document.querySelector('.images');

async function loadNPause (imgPaths) {
  currentImage = await createImage(imgPaths[0]);
  await wait(2);
  currentImage.style.display = 'none';
  currentImage = await createImage(imgPaths[1]);
  await wait(2);
  currentImage.style.display = 'none';
}

// loadNPause(["img/img-1.jpg", "img/img-2.jpg"])

async function loadAll (imgPaths) {
  const imgs = imgPaths.map(
    async function (imgPath) {
      return await createImage(imgPath);
    }
  )
  const imgEls = await Promise.all(imgs);
  console.log(imgEls)
}

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]).then(() => console.log("hi"));








