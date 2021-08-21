const renderToDom (divId, element) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = element;
};

export default renderToDom;