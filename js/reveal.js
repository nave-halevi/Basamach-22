document.addEventListener('DOMContentLoaded', () => {
    // בחר מה להנפיש: כרטיסים + בלוקים (CTA)
    const targets = document.querySelectorAll('.card, .cta-block');

    // מוסיף reveal רק לאלמנטים שצריך (ככה אם ה-JS לא רץ — אין הסתרה)
    targets.forEach(el => el.classList.add('reveal'));

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    targets.forEach(el => io.observe(el));
});
