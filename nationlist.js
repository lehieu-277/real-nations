var nations = document.querySelector('#nations');

async function detail() {
  const result = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await result.json();
  var country = document.getElementsByClassName('country');
  // console.log(country[2].getAttribute('index'));
  var title = document.getElementsByTagName(title);
  for (let i = 0; i < country.length; i++) {
    country[i].addEventListener('click', (e) => {
      console.log(data);
      let temp = e.target;
      let parent = temp.parentNode;
      let index = parent.getAttribute("index");
      // console.log(parent.getAttribute("index"));
      let htmtDetail = ` <div id="Country">
                            <img src="${data[index].flag}" alt="" width="300" height="200" id="flag" style=" margin:60px;">
     
                            <div id='infor' style="  text-alignment: centered;">
                          <p id='name' style="font-size: x-large;">${data[index].name}</p>
                          <p><span>Domain: </span><span id='domain' >${data[index].topLevelDomain}</span></p>
                          <p><span>Calling code: </span><span id='callingCode'>${data[index].callingCodes}</span></p>
                          <p><span>Capital: </span><span id="Capital">${data[index].capital}</span></p>
                          <p><span>AltSpelling: </span><span id="AltSpelling">${data[index].altSpellings}</span></p>
                          <p><span>Region: </span><span id="Region">${data[index].region}</span></p>
                          <p><span>SubRegion: </span><span id="SubRegion">${data[index].subregion}</span></p>
                          <p><span>Population: </span><span id="Population">${data[index].population}</span><span>  million people</span></p>
                          <p><span>Dymonym: </span><span id="Dymonym">${data[index].demonym}</span></p>
                          <p><span>Area: </span><span id="Area">${data[index].area} </span><span>km2</span></p>
                          <p><span>Gini: </span><span id="Gini">${data[index].gini}</span></p>
                          <p><span>Time Zone: </span><span id="Time Zone">${data[index].timezones}</span></p>
                          <p><span>Borders: </span><span id="Borders">${data[index].borders} </span></p>
                          <p><span>Native Name: </span><span id="Native Name">${data[index].nativeName}</span></p>
                          <p><span>NumericCode: </span><span id="NumbericCode">${data[index].numericCode}</span></p>
                          <p><span>Language: </span><span id="Language">${data[index].languages[0].nativeName}</span></p>
                        </div>
                        <style>
                        #Country {
                          width: 100%;
                          margin-left: auto;
                          margin-right: auto;
                          display: flex;
                          justify-content: space-around;
                          font-family: 'Merriweather', serif;
                          color: black;               
                      }                      
                                                              
                        </style>
                        `;
      document.title = `${data[index].name}`;
      nations.innerHTML = '';
      nations.insertAdjacentHTML('beforeend', htmtDetail);
      
    });
  }
}

async function renderData() {
  const result = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await result.json();
  // let nations = document.querySelector('#nations');

  for (let i in data) {
    // let content = ` <a href="country.html" class='country''>
    //                     <img src="${data[i].flag}" alt="">
    //                     <p class="name">${data[i].name}</p>
    //                 </a>`;
    let content = ` <div class='country' index = '${i}'>
                        <img src="${data[i].flag}" alt="">
                        <p class="name">${data[i].name}</p>
                    </div>`;
    nations.insertAdjacentHTML('beforeend', content);
    detail();
  }
  
}

async function search() {
  const result = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await result.json();

  const searchBar = document.getElementById('searchBar');
  const btnSearch = document.getElementById('searchButton');
  // let nations = document.getElementById('nations');
// button search:
  btnSearch.addEventListener('click', () => {
    let keySearch = searchBar.value;
    let temp = keySearch.replace(keySearch[0],keySearch[0].toUpperCase());
    console.log(temp);
    let hasCountry = false;
    for (let i in data) {
      if (data[i].name.startsWith(temp)) {
        hasCountry = true;
      }
    }
    console.log(hasCountry);
    if (hasCountry == false) {
      alert('Not found!');
    } else {
      nations.innerHTML = '';
      for (let i in data) {
        if (data[i].name.startsWith(temp)) {
          let content = `<div class='country' index = '${i}'>
                          <img src="${data[i].flag}" alt="">
                          <p class="name">${data[i].name}</p>
                         </div>`;
          nations.insertAdjacentHTML('beforeend', content);
          detail();
        }
      }
    }
  });
// enter key search:
searchBar.addEventListener('keyup',(event) =>{ 
  if (event.keyCode === 13) {
    event.preventDefault();
    searchBar.click();
    let keySearch = searchBar.value;
    let temp = keySearch.replace(keySearch[0],keySearch[0].toUpperCase());
    console.log(temp);
    let hasCountry = false;
    for (let i in data) {
      if (data[i].name.startsWith(temp)) {
        hasCountry = true;
      }
    }
    console.log(hasCountry);
    if (hasCountry == false) {
      alert('Not found!');
    } else {
      nations.innerHTML = '';
      for (let i in data) {
        if (data[i].name.startsWith(temp)) {
          let content = `<div class='country' index = '${i}'>
                          <img src="${data[i].flag}" alt="">
                          <p class="name">${data[i].name}</p>
                         </div>`;
          nations.insertAdjacentHTML('beforeend', content);
          detail();
        }
      }
    }
   }

 
})
detail();
}

renderData();
search();
