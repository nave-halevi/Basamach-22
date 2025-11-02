document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.nav-toggle');
    const nav = document.getElementById('nav');
    if (!btn || !nav) return;

    // פותח/סוגר את התפריט עם class על body
    btn.addEventListener('click', () => {
        const nowOpen = document.body.classList.toggle('nav-open');
        btn.setAttribute('aria-expanded', String(nowOpen));
    });

    // כשהחלון מתרחב חזרה לדסקטופ – סגור את התפריט
    const mq = window.matchMedia('(min-width: 900px)');
    mq.addEventListener('change', (e) => {
        if (e.matches) {
            document.body.classList.remove('nav-open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
});
