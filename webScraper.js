const axios = require('axios')
const cheerio = require('cheerio')
const Knwl = require('knwl.js')

// hard coded basic info
const email = 'tim@canddi.com';
const url = 'https://www.canddi.com/'

// make get request to the url
axios.get(url)
.then(response => {
    // if it is a succesful request then...    
    if (response.status === 200) {

        // using cheerio to save all the data  
        const $ = cheerio.load(response.data)
        // get all text and save html in variable
        const responseData = $('html').text()

        // create a new instance and 
        const knwlInstance = new Knwl()
        // initialise it with the data
        knwlInstance.init(responseData)

        // using default plugins to extract info and save it
        const emailAddresses = knwlInstance.get('emails')
        const phoneNumbers = knwlInstance.get('phones')
        const addresses = knwlInstance.get('places')

        // log it in terminal
        console.log('Email Addresses:', emailAddresses)
        console.log('Phone Numbers:', phoneNumbers)
        console.log('Addresses:', addresses)
    }
    })
.catch(error => {
    console.error('Error >>>', error)
});
