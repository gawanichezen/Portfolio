const navbarLinks = document.querySelectorAll('.navbar a');


// add click event to each link
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // remove 'active' class from all links
        navbarLinks.forEach(l => l.classList.remove('active'));

        // add 'active' class to the clicked link
        link.classList.add('active');
    });
});


// for resume part

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

//resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');

    });
});


 