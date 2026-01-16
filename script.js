
    // Smooth scrolling for navbar links and "Shop Now" button
    const links = document.querySelectorAll('nav a, .hero button');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let targetId = link.getAttribute('href') || '#shop';
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Product card click: show alert with product name and price
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.addEventListener('click', () => {
            const name = product.querySelector('h3').innerText;
            const price = product.querySelector('span').innerText;
            alert(`You clicked on ${name}.\nPrice: ${price}`);
        });
    });

    // Highlight active navbar link while scrolling
    const sections = document.querySelectorAll('section, footer');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY + 120; // offset
        sections.forEach(section => {
            if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if(link.getAttribute('href') === '#' + section.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
