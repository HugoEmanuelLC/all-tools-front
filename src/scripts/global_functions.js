
/**
 * Function to create a paragraph from a string of text
 * @param {string} description - The string of text to be split into paragraphs
 * @return {Array} - An array of paragraphs
 */ 
export const createParagraphs = (description) => {
    let tab = description.split(".");
    tab = tab.filter((el) => el !== "")
    let newTab = [];
    tab.forEach((el) => newTab.push(el.trim()+".") );
    return newTab;
};


