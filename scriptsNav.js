
    function toggleNav() {
        document.getElementById("sideNavBar").classList.toggle('widthToggle');
        document.getElementById("main").classList.toggle('marginToggle');
        document.querySelectorAll(".navbar__path").forEach(el=>el.classList.toggle('hamburgerPath'));
        document.querySelectorAll(".nav__ul li a p").forEach(el=>el.classList.toggle('hideContent'));

        }
