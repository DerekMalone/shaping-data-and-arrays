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
  <button type="button" class="filter-btn" id="filter-btn">Filter</button>
  </div>
  <div id="accounts-container"></div>
  <div id="ny-accounts-container"></div>
  <div id="agents-container"></div>
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

const onlyAgents = (array) => {
  const agents = array.map((business) => business.purchasingAgent);
  agents.forEach((agent) => {
    let domString = '';
    domString += `
    <div>
    <div>
    <h2>Purchasing Agent:</h2>
    </div>
    <div>${agent.nameFirst} ${agent.nameLast}</div>
    </div>
    `;
    renderToDom('#agents-container', domString);
  });
};

const nyBusinesses = (array) => {
  let domString = '';
  array.forEach((element, i) => {
    domString += `
    <div>
    <h3>NY Businesses</h3>
     <div class="biz-container">
      <h3 id="biz-name">${element.companyName}</h3>
     </div>
     <div id="biz-street">${element.addressFullStreet}</div>
     <div id="biz-city-state-zip">${element.addressCity}, ${element.addressStateCode} ${element.addressZipCode}</div>
     <button type="button" id="${i}"></button>
    </div>
    `;
    renderToDom('#ny-accounts-container', domString);
  });
};

const filtereredBusinesses = (array) => {
  const locationsInNY = array.filter((arr) => arr.addressStateCode === 'NY');
  nyBusinesses(locationsInNY);
};

const domEvents = () => {
  // document.querySelector('#filter-btn').addEventListener('click', filtereredBusinesses(array));
  // document.querySelector().addEventListener();
};

const init = () => {
  greetingHeader();
  domEvents();
  activeAcounts(businesses);

  filtereredBusinesses(businesses);
  onlyAgents(businesses);
};

init();
