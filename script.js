// TODO: add code here
window.addEventListener("load", function() {
    const container = document.getElementById("container");

    async function getAstronauts() {
        let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json');

        let data = await response.json();

        console.log(data);
    }

    getAstronauts();

});