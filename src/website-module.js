const createHeader = () => {
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');

    headerTitle.innerHTML = 'Beane & Sonny';
    header.appendChild(headerTitle);

    header.appendChild(createNav());

    return header;
}

const createNav = () => {
    const navOptions = ['HOME', 'PRODUCTS', 'CONTACT US'];
    const headerNav = document.createElement('nav');
    const navUl = document.createElement('ul');

    navOptions.forEach(option => {
        const navUlLi = document.createElement('li');
        navUlLi.innerHTML = option;
        navUlLi.classList.add('nav-li');

        navUlLi.addEventListener('click', () => {
            const allNavs = document.querySelectorAll('.nav-li');
            allNavs.forEach(nav => nav.classList.remove('active-nav'));
            navUlLi.classList.add('active-nav');
        });

        navUl.appendChild(navUlLi);
    })
    navUl.classList.add('nav-ul');
    headerNav.appendChild(navUl);

    return headerNav;
}

const createMain = () => {
    const main = document.createElement('main');

    main.innerHTML = 'qwewe'

    return main;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    const githubLink = document.createElement('a');
    const githubLogo = document.createElement('i');
    
    p.innerHTML = 'Copyright © 2022 crisxchan';

    githubLink.href = 'https://github.com/crisxchan';
    githubLink.target = '_blank';

    githubLogo.classList.add('fa', 'fa-github', 'ghlogo');

    githubLink.appendChild(githubLogo);

    footer.appendChild(p);
    footer.appendChild(githubLink);

    return footer;
}

const initializeWebsite = () => {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
};

export default initializeWebsite;