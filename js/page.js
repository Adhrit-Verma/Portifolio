const pages = document.querySelectorAll('.page');

pages.forEach(page => {
    page.addEventListener('click', () => {
        if (!page.classList.contains('active')) {
            pages.forEach(otherPage => {
                if (otherPage !== page && otherPage.classList.contains('active')) {
                    otherPage.classList.remove('active');
                    otherPage.querySelector('.page-title').classList.remove('active');
                    otherPage.querySelector('.container-profile').classList.remove('active');
                }
            });
            page.classList.add('active');
            page.querySelector('.page-title').classList.add('active');
            page.querySelector('.container-profile').classList.add('active');
        }
    });
});
