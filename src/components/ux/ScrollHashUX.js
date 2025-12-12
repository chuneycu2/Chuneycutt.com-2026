export default function scrollHashUX(element) {
    console.log(element);
    /*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            event.stopPropagation();
            const target = document.querySelector(this.getAttribute('href'));
            const offset = 0; // 2rem

            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });*/
}