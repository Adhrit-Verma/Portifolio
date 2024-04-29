const pages = document.querySelectorAll('.page');

pages.forEach(page => {
    page.addEventListener('click', () => {
        if (!page.classList.contains('active')) {
            pages.forEach(otherPage => {
                if (otherPage !== page && otherPage.classList.contains('active')) {
                    otherPage.classList.remove('active');
                    otherPage.querySelector('.page-title').classList.remove('active');
                    const containerProfile = otherPage.querySelector('.container-profile');
                    if (containerProfile) {
                        containerProfile.classList.remove('active');
                    }
                    const containerProfile2 = otherPage.querySelector('.container-profile-2');
                    if (containerProfile2) {
                        containerProfile2.classList.remove('active');
                    }
                }
            });
            page.classList.add('active');
            page.querySelector('.page-title').classList.add('active');
            const containerProfile = page.querySelector('.container-profile');
            if (containerProfile) {
                containerProfile.classList.add('active');
            }
            const containerProfile2 = page.querySelector('.container-profile-2');
            if (containerProfile2) {
                containerProfile2.classList.add('active');
            }
        }
    });
});
