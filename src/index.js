"use strict";

/**
 * Creates an HTML element
 * @param {string} tag -Tag HTML element
 * @param {object} attrs - Attributes HTML element
 * @param {string} text - Text in HTML element
 * @returns Created element
 */
function createElement(tag, attrs = {}, text = "") {
    const element = document.createElement(tag);
    for (const attr in attrs) {
        element.setAttribute(attr, attrs[attr]);
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

// container
const divContainer = createElement("div", { class: "container" });
document.body.append(divContainer);

// header
const divHeader = createElement("div", { class: "header" });
const h1Header = createElement("h1", {}, "Create an account");
const parHeader = createElement("p", {}, "We always keep your name and email address private");
divHeader.append(h1Header, parHeader);

// form
const form = createElement("form");
divContainer.append(divHeader, form);

// inputs-1
const divInputs1 = createElement("div", { class: "inputs" });
const input1 = createElement("input", { type: "text", placeholder: "First name" });
const input2 = createElement("input", { type: "text", placeholder: "Second name" });
divInputs1.append(input1, input2);

// inputs-2
const divInputs2 = createElement("div", { class: "inputs" });
const input3 = createElement("input", { type: "text", placeholder: "Display Name" });
const input4 = createElement("input", { type: "email", placeholder: "Email Address" });
divInputs2.append(input3, input4);

// inputs-3
const divInputs3 = createElement("div", { class: "inputs" });
const input5 = createElement("input", { type: "password", placeholder: "Password" });
const input6 = createElement("input", { type: "password", placeholder: "Password Confirmation" });
divInputs3.append(input5, input6);

// radiobuttongroup
const radioButtonGroups = createElement("div", { class: "radioButtonGroups" });

// radio-1
const divRadio1 = createElement("div");
const inputByuer = createElement("input", { type: "radio", name: "person", id: "buyer" });
const labelBuyer = createElement("label", { for: "buyer" });
const span1 = createElement("span", {}, "Join As a Buyer");
const span2 = createElement("span", {}, "I am looking for a Name, Logo or Tagline for my bussiness, brand or product.");
labelBuyer.append(span1, span2);
divRadio1.append(inputByuer, labelBuyer);

// radio-2
const divRadio2 = createElement("div");
const inputCreative = createElement("input", { type: "radio", name: "person", id: "cr" });
const labelCreative = createElement("label", { for: "cr" });
const span3 = createElement("span", {}, "Join As a Creative or Marketplace Seller");
const span4 = createElement(
    "span",
    {},
    "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.",
);
labelCreative.append(span3, span4);
divRadio2.append(inputCreative, labelCreative);
radioButtonGroups.append(divRadio1, divRadio2);

// checkbox
const divCheckbox = createElement("div", { class: "checkbox" });
const inputCheckbox = createElement("input", { type: "checkbox", id: "chb" });
const labelCheckbox = createElement(
    "label",
    { for: "chb" },
    "Allow Squadhelp to send marketing/promotional from time to time",
);
divCheckbox.append(inputCheckbox, labelCheckbox);

// submit
const submit = createElement("input", { type: "submit", value: "Create account", class: "btn" });
form.append(divInputs1, divInputs2, divInputs3, radioButtonGroups, divCheckbox, submit);
