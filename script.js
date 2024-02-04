document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('planToggle');
    const cards = document.querySelectorAll('.card');

    toggle.addEventListener('change', function () {
        const isYearly = toggle.checked;

        cards.forEach(card => {
            const priceElement = card.querySelector(isYearly ? '.yearly' : '.monthly');
            priceElement.style.display = 'block';
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', function () {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
});
