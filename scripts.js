const buttonConverter = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyvalueToConvert = document.querySelector(".currency-value-real")  // valor em Real
    const currencyvalueConverted = document.querySelector(".currency-value-dolar") // outras moedas
   



    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const Yentoday = 0.03
    const libraToday = 6.1
    const pesoToday =  0.01


   



    if (currencySelect.value == "dolar") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("in-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"

        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "Yen") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"

        }).format(inputCurrencyValue / Yentoday)

    }

    if (currencySelect.value == "libra") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("de-AT", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }

    if(currencySelect.value == "peso") {
        currencyvalueConverted.innerHTML = new Intl.NumberFormat("ar-AG", {
         style: "currency",
         currency: "ARS"  
        }).format(inputCurrencyValue / pesoToday)

}
    currencyvalueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changecurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"

    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    }

    if (currencySelect.value == "Yen") {
        currencyName.innerHTML = "Yen japonês"
        currencyImage.src = "./assets/japao.png"

    }

     if (currencySelect.value == "libra") {
            currencyName.innerHTML = "Libra Comercial"
            currencyImage.src = "./assets/libra.png"

    }


    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso argentino"
        currencyImage.src = "./assets/peso argentino.png"
    

    
    }

    convertValues()

}


currencySelect.addEventListener("change", changecurrency)

buttonConverter.addEventListener("click", convertValues)
