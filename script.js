
const semanas = document.querySelectorAll('.semana');

for (let i = 5; i < semanas.length; i++) {

    const links = semanas[i].querySelectorAll('a');

    links.forEach((link) => {
        link.classList.add('hidden');
    });

}