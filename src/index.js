console.log('index.js!');
import * as d3 from 'd3';
import * as jquery from 'jquery';
import './style/appStyles.scss';
import fetchCsv from './components/utils'

//Import data using the Promise interface
Promise.all([
  fetchCsv('../dist/data/baseball.csv')])
  .then(([baseball]) => {
    console.log(baseball);
  });
