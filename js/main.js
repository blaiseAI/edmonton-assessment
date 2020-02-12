// compile requried template
// const source = document.querySelector('#project-template').innerHTML;
// const template = Handlebars.compile(source);
const form = document.querySelector("form");
const contents = document.querySelector(".project");
const inputAddress = document.querySelector("form input");

Handlebars.registerHelper('currency', (value) => {
    // pretty widespread support for toLocaleString() in browsers now, so  ...
    return Number.parseFloat(value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
});

const renderProject = (proj) => {
    document.querySelector('.project').innerHTML = Handlebars.templates["property"](proj);
};

const Invalid = (address) => {
    console.log(`No data for address ${address}`)
}


/**
 * Cashing test
 */

if ('caches' in window) {
    console.log('Yayyy, caching is support ' + navigator.appName);

} else {
    console.log('No support ' + navigator.appName);
}

// now, fetch projects and render the first one.


// on Load put some data
function fetchData() {
    fetch('https://data.edmonton.ca/resource/q7d6-ambg.json?house_number=18226&street_name=107A%20STREET%20NW').then(data => {
        return data.json();
    }).then(projects => {
        renderProject(projects[0]);
    });
}
// on click
form.addEventListener("submit", e => {
    e.preventDefault();
    const addresses = inputAddress.value.toUpperCase();
    const address = addresses.split(" ");
    const apiRequest = async address => {
        try {
            let endPointUrl = `https://data.edmonton.ca/resource/q7d6-ambg.json?house_number=${address[0]}&street_name=${address[1]}%20${address[2]}%20${address[3]}`;
            var response = await fetch(endPointUrl)
            var parsedData = await response.json();
            (parsedData.length === 1) ? renderProject(parsedData[0]): Invalid(address);

        } catch (e) {
            console.log(` Data failed to load ${e}`);
            // contents.innerHTML =
            //     `No Data found, address format(1234 45 Street NW)`;
        }
    }
    apiRequest(address);
})