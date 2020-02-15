var bigCountry = document.querySelector('#BigCountry')
async function renderData() {
    const result = await fetch('https://restcountries.eu/rest/v2/all');
    const data = await result.json();
}

function detail(){
    console.log(INDEX);
    var country =  document.getElementById('country');
    // console.log(country[2].getAttribute('index'));
    for(let i = 0;i < country.length; i++){
      country[i].addEventListener('click', () => {
        let htmtDetail = `<div id="Country">
        <img src="" alt="" width="300" height="200" id="flag">
          <div id='infor'>
            <p id='name'></p>
            <p><span>Domain: </span><span id='domain'></span></p>
            <p><span>Calling code: </span><span id='callingCode'></span></p>
            <p><span>Capital: </span><span id="Capital"></span></p>
            <p><span>AltSpelling: </span><span id="AltSpelling"></span></p>
            <p><span>Region: </span><span id="Region"></span></p>
            <p><span>SubRegion: </span><span id="SubRegion"></span></p>
            <p><span>Population: </span><span id="Population"></span><span>million people</span></p>
            <p><span>Dymonym: </span><span id="Dymonym"></span></p>
            <p><span>Area: </span><span id="Area"> </span><span>km2</span></p>
            <p><span>Gini: </span><span id="Gini"></span></p>
            <p><span>Time Zone :</span><span id="Time Zone"></span></p>
            <p><span>Borders</span><span id="Borders">
                <ul>
                  <ol></ol>
                  <ol></ol>
                  <ol></ol>
                </ul>
              </span></p>
            <p><span>Native Name: </span><span id="Native Name"></span></p>
            <p><span>NumericCode: </span><span id="NumbericCode"></span></p>
            <p><span>Language: </span><span id="Language"></span></p>
          </div>`;
        bigCountry.insertAdjacentHTML('beforeend', htmlDetail)
        
      });
    }
  }
  
 
  