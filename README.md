# WebScraper task

I was tasked to create a webscraper and I thought it is for the best if I create a readme document so I can look back on anything I have done to complete it.

<br>

## Re-search on required npm packages

<br>

### **Request**

https://www.npmjs.com/package/request

The "request" library is deprecated and is no longer actively maintained so I decided to use [axios](https://github.com/axios/axios ) for hhtp requests.



<br>

### **Cheerio**

https://github.com/cheeriojs/cheerio

It is for parsing and manipulating HTML or XML data using a jQuery-like syntax in Node.js. 

**Install:**
<br>

npm install cheerio <br>

**Initialise:**
<br>

const cheerio = require('cheerio') <br>

**Traversing and Manipulating the DOM:**
<br>

const $ = cheerio.load('<>Hello, Cheerio!</>') 
<br>

**Selecting and Manipulating Elements: **
<br>

const text = $('h1').text(); // Retrieves the text content of the h1 element $('h1').text('New Heading'); // Sets the text content of the h1 element to 'New Heading' <br>

**Generating Output:**
<br>

const htmlOutput = $('body').html(); // Retrieves the HTML content of the <body> element 
<br>

const xmlOutput = $('body').xml(); // Retrieves the XML representation of the <body> element

<br>

### **Kwnl**

https://github.com/loadfive/Knwl.js/

It is a library that parses through text for dates, times, phone numbers, emails, places, and more.

Install:  npm install knwl.js 
Initialise: const Knwl = require('knwl.js')
Parsing: knwlInstance.init(string)
Data extraction: let dates = knwlInstance.get('dates')

<br>

## Build

### Setting up a new Node.js project 
- create a new project using the terminal 'touch webScraper.js'
- create package.json file by running 'npm init'

<br>

### Install modules (check package.json file)
- npm i axios
- npm i cheerio
- npm i knwl.js

<br>

### Create web scraper app
- import required packages
- set up basic info (hard coded)
- make http request
- handle promise and save response data using cheerio
- extract html as plain text
- create new instanse of Knwl and initialise it
- extract required info using Knwl
- log info to console
- deal possible with error

