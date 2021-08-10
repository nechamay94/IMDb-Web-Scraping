const axios = require("axios");
const cheerio = require("cheerio");
const async = require('async');
const await = require('await');


const fetchTitles = async () => {
 try {
  const response = await       
     axios.get('https://old.reddit.com/r/movies/');

        const html = response.data;

  const $ = cheerio.load(html);

  const titles = [];

  $('div > p.title > a').each((_idx, el) => {
   const title = $(el).text()
   titles.push(title)
  });

  return titles;
 } catch (error) {
  throw error;
 }
};

fetchTitles().then((titles) => console.log(titles));

fetchTitles().then((titles) => {
var csv = titles.join("%0A");
var a = document.createElement('a');
a.href = 'data:attachment/csv,' + csv;
a.target = '_blank';
a.download = titles.csv;

document.body.appendChild(a);
a.click();
});