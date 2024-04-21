const button = document.querySelector('button');

button.addEventListener('click', showCountries)

function showCountries() {
    // 1. initialize new httpReq obj
    let xhr = new XMLHttpRequest()

    // 2. initialize the request
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true) // open method is stored on the XMLHttpRequest object
        // 1st arg: GET, SET, etc.
        // 2nd arg: the endpoint
        // 3rd arg: is this asynchronous?

    // 3. send the request
    xhr.send()

    // 4. handle the response
    xhr.onload = function() {
        // check if response is successsful
        if (xhr.status == 200) {
            console.log('success')
            
            // assign countries to an array parsed objects from the JSON data we got from response
            let countries = JSON.parse(this.response) // countries = an array of objects of all countries from api
            console.log(countries)

            // iterate over countries 
            countries.forEach(country => { // FOR EVERY COUNTRY OBJECT 
                // create a div called countryCard
                const countryCard = document.createElement('div')

                // assign the innerHTML of countryCard to the name and flag of current country index
                countryCard.innerHTML = country.name.common + country.flag
                
                //append countryCard to feed div
                document.querySelector('#feed').appendChild(countryCard)
                // now the feed contains all countryCard divs that contain the name of each country
            })
        }
    }

}