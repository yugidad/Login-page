const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const loginClick = document.querySelector(".btn-login");
const loginClose = document.querySelector(".close-login");

//ADD EVENTS LISTENERS

loginLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    // console.log(wrapper);
});

registerLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    // console.log(wrapper);
});
loginClick.addEventListener('click', () => {
    // e.preventDefault();
    wrapper.classList.add("popUp");
});
loginClose.addEventListener('click', () => {
    wrapper.classList.remove('popUp');
    // console.log(loginClick);
});
