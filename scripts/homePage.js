function ToggleNavbar(){
    document.getElementById('navBar').classList.toggle('toggleNav')
    document.getElementById('body').classList.toggle('toggleMain')

    document.querySelectorAll(".navbar__path").forEach(el=>el.classList.toggle('hamburgerPath'));
   
}

