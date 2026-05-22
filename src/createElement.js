/**
 * Creates an HTML element
 * @param {string} tag -Tag HTML element
 * @param {object} attrs - Attributes HTML element
 * @param {string} text - Text in HTML element
 * @returns Created element
 */
export function createElement(tag, attrs = {}, text = '') {
    const element = document.createElement(tag);
    for (const attr in attrs) {
        element.setAttribute(attr, attrs[attr]);
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}