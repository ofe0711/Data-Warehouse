const header = document.querySelector('.header');
const aboutSection = document.querySelector('.about-section');
const testimonial = document.querySelector('.testimonial');
const features = document.querySelector('.features');
const signUp = document.querySelector('.signup');

const listItems = ['About',  'Features', 'Testimonial', 'Signup'];
const navBar = document.createElement('ul');
navBar.classList.add('header-list', 'header-chk');

listItems.forEach(function(element) {
    const listElement = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.href = '#';
    navLink.innerText = element;
    listElement.appendChild(navLink);
    navBar.appendChild(listElement);
});

header.appendChild(navBar);
const childNav = navBar.querySelectorAll('a');
function scrollHandler(e){
    e.preventDefault();
    childNav.forEach(el => {
        if(el.innerText === e.target.innerText){
            el.classList.add('clicked')
        } else {
            el.classList.remove('clicked')
        } 
    });
    if (e.target.innerText === 'About'){
        window.scrollTo({
            top: aboutSection.offsetTop-header.offsetHeight,
            left: 100,
            behavior: 'smooth'
          });
    } if (e.target.innerText === 'Testimonial'){    
        window.scrollTo({
            top: testimonial.offsetTop-header.offsetHeight,
            left: 100,
            behavior: 'smooth'
          });
    } if (e.target.innerText === 'Features'){
        window.scrollTo({
            top: features.offsetTop-header.offsetHeight,
            left: 100,
            behavior: 'smooth'
          });
    } if (e.target.innerText === 'Signup'){
        
        window.scrollTo({
            top: signUp.offsetTop-header.offsetHeight,
            left: 100,
            behavior: 'smooth'
          });
    }

}


navBar.addEventListener('click', scrollHandler);











const button = document.createElement('button');

button.classList.add('header-button', 'header-chk');

button.textContent = 'Request Demo';

const span = document.createElement('span');

span.classList.add('arrow');

const img = document.createElement('img');

img.src = 'images/Group 56.svg';

img.alt = 'click here';

span.appendChild(img);

button.appendChild(span);

header.appendChild(button);





