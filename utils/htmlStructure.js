import renderToDom from './renderToDom';

// the basic HMTL structure of app

const htmlStructure = () => {
  const domString = `
    <div id="header-container" class="header mb-3"></div>
    <div id="form-container" class="container mb-3 text-center"></div>
    <div id="filter-container" class="container mb-3"></div>
    <div id="student-container" class="container d-flex"></div>
    `;

  renderToDom('#app', domString);
};

export default htmlStructure;
