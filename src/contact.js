const createContact = () => {
    const div = document.createElement('div')
    div.classList.add('contact-wrapper');

    const brandLogo = document.createElement('img');
    const contactNumber = document.createElement('p');

    const aFb = document.createElement('a');
    const facebook = document.createElement('p');

    const aIg = document.createElement('a');
    const instagram = document.createElement('p');

    const address = document.createElement('p');

    brandLogo.src = '../assets/logo.jpg';
    brandLogo.classList.add('brand-logo');

    contactNumber.innerHTML = '+63 901 109 9910';

    facebook.classList.add('fa-brands', 'fa-facebook', 'sm-brand-contacts');
    facebook.innerHTML = '&nbsp;/beaneandsonny';
    aFb.appendChild(facebook);
    aFb.href = 'https://www.facebook.com/beaneandsonny';
    aFb.target = '_blank'

    instagram.classList.add('fa-brands', 'fa-instagram', 'sm-brand-contacts');
    instagram.innerHTML = '&nbsp;@beaneandsonny'
    aIg.appendChild(instagram);
    aIg.href = 'https://www.instagram.com/beaneandsonny/';
    aIg.target = '_blank'

    address.innerHTML = 'Cebu City, PH 6000'

    div.appendChild(brandLogo);
    div.appendChild(contactNumber);
    div.append(aFb);
    div.append(aIg);
    div.append(address);

    return div;
}

export default createContact;