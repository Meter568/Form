import { createElement } from './createElement.js';
import Person from './person.js';

function collectProps(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    localStorage.setItem(data.lastName, JSON.stringify(new Person(data)));
}

// container
const divContainer = createElement('div', { class: 'container' });
document.body.append(divContainer);

// header
const divHeader = createElement('div', { class: 'header' });
const h1Header = createElement('h1', {}, 'Create an account');
const parHeader = createElement('p', {}, 'We always keep your name and email address private');
divHeader.append(h1Header, parHeader);

// form
const form = createElement('form');
divContainer.append(divHeader, form);

// inputs-1
const divInputs1 = createElement('div', { class: 'inputs' });
const inputFirst = createElement('input', { type: 'text', name: 'firstName', placeholder: 'First name' });
const inputSecond = createElement('input', { type: 'text', name: 'lastName', placeholder: 'Second name' });
divInputs1.append(inputFirst, inputSecond);

// inputs-2
const divInputs2 = createElement('div', { class: 'inputs' });
const inputDisplay = createElement('input', { type: 'text', name: 'nickName', placeholder: 'Display Name' });
const inputEmail = createElement('input', { type: 'email', name: 'email', placeholder: 'Email Address' });
divInputs2.append(inputDisplay, inputEmail);

// inputs-3
const divInputs3 = createElement('div', { class: 'inputs' });
const inputPassword = createElement('input', { type: 'password', placeholder: 'Password' });
const inputPasswordConfirm = createElement('input', { type: 'password', placeholder: 'Password Confirmation' });
divInputs3.append(inputPassword, inputPasswordConfirm);

// radiobuttongroup
const radioButtonGroups = createElement('div', { class: 'radioButtonGroups' });

// radio-1
const divRadio1 = createElement('div');
const inputByuer = createElement('input', { type: 'radio', name: 'person', id: 'buyer' });
const labelBuyer = createElement('label', { for: 'buyer' });
const span1 = createElement('span', {}, 'Join As a Buyer');
const span2 = createElement('span', {}, 'I am looking for a Name, Logo or Tagline for my bussiness, brand or product.');
labelBuyer.append(span1, span2);
divRadio1.append(inputByuer, labelBuyer);

// radio-2
const divRadio2 = createElement('div');
const inputCreative = createElement('input', { type: 'radio', name: 'person', id: 'cr' });
const labelCreative = createElement('label', { for: 'cr' });
const span3 = createElement('span', {}, 'Join As a Creative or Marketplace Seller');
const span4 = createElement(
    'span',
    {},
    'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.',
);
labelCreative.append(span3, span4);
divRadio2.append(inputCreative, labelCreative);
radioButtonGroups.append(divRadio1, divRadio2);

// checkbox
const divCheckbox = createElement('div', { class: 'checkbox' });
const inputCheckbox = createElement('input', { type: 'checkbox', id: 'chb' });
const labelCheckbox = createElement(
    'label',
    { for: 'chb' },
    'Allow Squad help to send marketing/promotional from time to time',
);
divCheckbox.append(inputCheckbox, labelCheckbox);

// submit
const submit = createElement('input', { type: 'submit', value: 'Create account', class: 'btn' });
submit.addEventListener('click', collectProps);
form.append(divInputs1, divInputs2, divInputs3, radioButtonGroups, divCheckbox, submit);
