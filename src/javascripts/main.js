import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

import businesses from './helpers/data/businessData';

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const greetingHeader = () => {
  const domString = `
  <div class="business-box" id="business-container">
  <div class="accounts-container">
  <h2>Active Accounts</h2>
  <button type="button" id="filter-btn">Filter</button>
  </div>
  <div id="accounts-container"></div>
  </div>
  `;
  renderToDom('#welcome-title', domString);
};

const activeAcounts = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `
    <div>
     <div class="biz-container">
      <h3 id="biz-name">${element.companyName}</h3>
     </div>
     <div id="biz-street">${element.addressFullStreet}</div>
     <div id="biz-city-state-zip">${element.addressCity}, ${element.addressStateCode} ${element.addressZipCode}</div>
     <button type="button" id="${i}"></button>
    </div>
    `;
    renderToDom('#accounts-container', domString);
  });
};

const filtereredBusinesses = (array) => {
  const locationsInNY = array.filter((arr) => arr.addressStateCode === 'NY');
  console.warn(locationsInNY);
  activeAcounts(locationsInNY);
};

// const searchBuisnessForm = () => {
//   console.warn('Clicked');
//   const domString = `
//   <div class="input-group mb-3">
//   <label for="filter-input-field">Search:</label>
//   <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
//   <input type="text" class="form-control" id="filter-input-field" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
//   </div>
//   `;
//   renderToDom('#business-container', domString);
//   filtereredBusinesses();
// };

// const currentBusinesses = (array) => {
//   let element = '';
//   array.forEach((taco) => {
//     element = `<div class="card" style="width: 18rem;">
//     <div class="card-body">
//     <h5 class="card-title">${taco.companyName}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//     </div>
//     `;
//     renderToDom('#rendered-card', element);
//   });
// };

const domEvents = () => {
  // document.querySelector('#filter-btn').addEventListener('click', filterBuisnessForm);
  // document.querySelector().addEventListener();
};

const init = () => {
  // currentBusinesses(businesses);
  greetingHeader();
  domEvents();
  // activeAcounts(businesses);
  filtereredBusinesses(businesses);
};

init();
