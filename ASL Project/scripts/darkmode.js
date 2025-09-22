let darkmode = localStorage.getItem('darkmode');

const themeSwitch = document.querySelector('#switch-sun-moon'); // use input checkbox directly

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode','active');
    themeSwitch.checked = true; // keep switch in sync
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    themeSwitch.checked = false;
}

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener('change', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
