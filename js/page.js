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
                    const profileImage = otherPage.querySelector('.pf');
                    if (profileImage) {
                        profileImage.classList.remove('active');
                    }
                    const textbox1 = otherPage.querySelector('.typing-container');
                    if (textbox1) {
                        textbox1.classList.remove('active');
                    }
                    const font1 = otherPage.querySelector('.font-hello');
                    if (font1) {
                        font1.classList.remove('active');
                    }
                    const font2 = otherPage.querySelector('.font-sent1');
                    if (font2) {
                        font2.classList.remove('active');
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
            const profileImage = page.querySelector('.pf');
            if (profileImage) {
                profileImage.classList.add('active');
            }
            const textbox1 = page.querySelector('.typing-container');
            if (textbox1) {
                textbox1.classList.add('active');
            }
            const font1 = page.querySelector('.font-hello');
            if (font1) {
                font1.classList.add('active');
            }
            const font2 = page.querySelector('.font-sent1');
            if (font2) {
                font2.classList.add('active');
            }
        }
    });
});
