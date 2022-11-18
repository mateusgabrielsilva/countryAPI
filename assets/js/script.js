
//const apiCountryURL = "https://restcountries.com/v3.1/?"

const countryElement = document.querySelector("#country")
const capitalElement = document.querySelector("#capital")
const flagElement = document.querySelector("#flag")
const flagImageElement = document.querySelector("#flag-image")
const faviconElement = document.querySelector("#favicon")
const currencieNameElement = document.querySelector("#currencie-name")
const continentElement = document.querySelector("#continent")
const languageElement = document.querySelector("#language")

const country = "brasil"

// Loader
const toggleLoader = () => {
    loader.classList.toggle("hide");
}; 
  
const getCountryData = async (country) => {
    toggleLoader();
  
    const apiCountryURL = `https://restcountries.com/v3.1/name/${country}`;
  
    const res = await fetch(apiCountryURL);
    //const res = apiCountryURL;
    const data = await res.json();
  
    toggleLoader();

    const response = data[0]
   
    countryElement.innerHTML = `<span>Nome:</span><p> ${response.name.nativeName.por.common}</p>`

    capitalElement.innerHTML = `<span>Capital:</span><p> ${response.capital[0]}</p>`

    currencieNameElement.innerHTML = `<span>Moeda:</span><p> ${response.currencies.BRL.name}, ${response.currencies.BRL.symbol}</p>`

    continentElement.innerHTML = `<span>Continente:</span><p> ${response.continents[0]}</p>`

    languageElement.innerHTML = `<span>Linguagem:</span><p> ${response.languages.por}</p>`


    flagImage = response.flags.svg

    flagImageElement.setAttribute("src", `${flagImage}`)

    faviconElement.setAttribute("href", `${flagImage}`)

    console.log(response.continents[0])

    console.log(response.languages.por)
  
    return data;   
    
};

getCountryData(country)
