// ----- פתיחת/סגירת תפריט הנגישות -----
const menu = document.getElementById("a11yMenu");
const btn = document.querySelector(".a11y-btn");

if (btn && menu) {
    btn.addEventListener("click", () => {
        menu.toggleAttribute("hidden");
    });

    // סגירה בלחיצה מחוץ לפאנל (לא חובה)
    document.addEventListener("mousedown", (e) => {
        if (!menu.contains(e.target) && e.target !== btn) {
            menu.setAttribute("hidden", "");
        }
    });
}

// ----- ניגודיות גבוהה -----
const contrastBtn = document.querySelector(".contrast-btn");
contrastBtn?.addEventListener("click", () => {
    const html = document.documentElement;
    const isOn = html.getAttribute("data-contrast") === "on";
    isOn ? html.removeAttribute("data-contrast")
        : html.setAttribute("data-contrast", "on");
});

// ===== גודל טקסט גלובלי =====
// דרוש ב-CSS: html{ --font-scale:1; font-size:calc(100% * var(--font-scale)); }
const htmlEl = document.documentElement;

function getScale() {
    return parseFloat(getComputedStyle(htmlEl).getPropertyValue("--font-scale")) || 1;
}
function setScale(val) {
    const next = Math.max(0.8, Math.min(1.6, +val.toFixed(2))); // 80%–160%
    htmlEl.style.setProperty("--font-scale", next);
}

// תרחיש מלא: יש 3 כפתורים (הגדלה/הקטנה/איפוס)
document.querySelector(".font-inc")?.addEventListener("click", () => setScale(getScale() + 0.1));
document.querySelector(".font-dec")?.addEventListener("click", () => setScale(getScale() - 0.1));
document.querySelector(".font-reset")?.addEventListener("click", () => setScale(1));

// תרחיש פשוט: יש רק כפתור אחד .font-btn (נגיד "הקטנת טקסט")
document.querySelector(".font-btn")?.addEventListener("click", () => setScale(getScale() - 0.1));


