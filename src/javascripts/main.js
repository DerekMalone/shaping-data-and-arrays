import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const greetingHeader = () => {
  const domString = `
  <div class="business-box" id="business-container">
  <div>Active Accounts</div>
  </div>
  `;
  console.warn(domString);
  renderToDom('#welcome-title', domString);
};

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
  document.querySelector().addEventListener();
  document.querySelector().addEventListener();
  document.querySelector().addEventListener();
};

const init = () => {
  // currentBusinesses(businesses);
  greetingHeader();
  domEvents();
};

init();
