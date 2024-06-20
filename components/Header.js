// Header.js

function createNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg navbar-light style-1';

    const container = document.createElement('div');
    container.className = 'container';

    const brandLink = document.createElement('a');
    brandLink.className = 'navbar-brand';
    brandLink.href = 'https://WPbx9m46zkL0.com/';

    const brandImg = document.createElement('img');
    brandImg.src = 'assets/web/img/logo_lgr.png';
    brandImg.alt = '';
    brandImg.width = '150px';

    brandLink.appendChild(brandImg);

    const togglerButton = document.createElement('button');
    togglerButton.className = 'navbar-toggler';
    togglerButton.type = 'button';
    togglerButton.dataset.bsToggle = 'collapse';
    togglerButton.dataset.bsTarget = '#navbarSupportedContent';
    togglerButton.setAttribute('aria-controls', 'navbarSupportedContent');
    togglerButton.setAttribute('aria-expanded', 'false');
    togglerButton.setAttribute('aria-label', 'Toggle navigation');

    const togglerIcon = document.createElement('span');
    togglerIcon.className = 'navbar-toggler-icon';

    togglerButton.appendChild(togglerIcon);

    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarSupportedContent';

    const ul = document.createElement('ul');
    ul.className = 'navbar-nav me-auto mb-2 mb-lg-0';

    const navItems = [
        { text: 'Home', href: '#' },
        { text: 'About us', href: '/aboutus.html' },
        { text: 'Product', href: '/product.html' },
        { text: 'Portfolio', href: '/portfolio.html' },
        // Add other navigation items here...
    ];

    navItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = item.href;
        a.textContent = item.text;

        li.appendChild(a);
        ul.appendChild(li);
    });

    collapseDiv.appendChild(ul);
    container.appendChild(brandLink);
    container.appendChild(togglerButton);
    container.appendChild(collapseDiv);
    nav.appendChild(container);

    return nav;
}

// Usage:
const navbar = createNavbar();
document.body.appendChild(navbar);
