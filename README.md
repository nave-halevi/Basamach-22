Basmach 22 — Landing Page Project

This project was created as part of the “Basmach 22” initiative, designed to showcase modern, fast, and high-converting landing pages for businesses.
The website is built entirely with HTML and CSS, featuring a responsive, elegant, and secure design — plus a fully functional contact form powered by Formspree
.

✨ Overview

The website includes several core pages:

Home page with a glowing hero section and clear call-to-action.

Services page describing offered features.

Portfolio page showing real design examples with a “Want something like this?” button.

About page describing the team’s story and goals.

FAQ page built with dynamic accordion components.

Contact page with a working contact form (via Formspree).

Thanks page displayed after successful form submission.

The design follows a dark theme with neon green highlights, smooth gradients, and subtle shadows.
It uses Flexbox and CSS Grid for a fully responsive layout, with blur and radial-gradient effects to create depth and light.

🧱 Project Structure

.
├── index.html # Home page
├── services.html # Services page
├── portfolio.html # Portfolio examples
├── about.html # About page
├── faq.html # FAQ (accordion)
├── contact.html # Contact form page
├── thanks.html # Thank-you page after submission
├── css/
│ ├── base.css # Variables, typography, colors, reset
│ ├── layout.css # Grids, header/footer, layout rules
│ └── components.css # Buttons, cards, forms, animations
├── images/ # Logos and assets
└── .nojekyll # Prevents Jekyll processing on GitHub Pages

💡 Technologies

HTML5 — semantic and structured markup

CSS3 — modern styling using Grid, Flexbox, and custom variables

Formspree — for handling contact form submissions securely

GitHub Pages — free static hosting with automatic HTTPS

🌍 Live Deployment

The website is hosted on GitHub Pages:
https://nave-halevi.github.io/Basamach-22/
Every push to the main branch automatically updates the live site.
GitHub Pages detects index.html and publishes it within about a minute.


🔒 Form Security (Restrict to Domain)

In Formspree, the form is restricted to accept submissions only from this domain:

nave-halevi.github.io

If you test the form locally (localhost), submissions will be blocked — this is intentional and secure.
You can temporarily disable the restriction in your Formspree project for local development if needed

📬 Email Notifications

To receive messages directly to your inbox:
Go to Formspree → Settings → Email Notifications
 and make sure your email is confirmed and “Send email on every submission” is enabled.
All messages also appear under the Submissions tab in your Formspree dashboard.

🖼️ Design & Responsiveness

The design emphasizes:

Responsive typography using clamp()

Dark background with radial-gradient lighting effects

Grid layout for cards and feature sections

Footer with a soft glow and centered text

Example responsive rules:
.container {
  width: min(var(--container, 980px), 100%);
  margin-inline: auto;
  padding-inline: 16px;
}

.form.card {
  width: min(600px, 92vw);
  margin-inline: auto;
}

@media (max-width: 720px) {
  .form__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

.form__actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

🧰 Local Development

You can open the project directly in your browser,
but it’s easier with VS Code + Live Server:

Open the project folder in VS Code

Right-click index.html → Open with Live Server

The site will run at http://127.0.0.1:5500

Note: Form submissions won’t work locally if the domain restriction is enabled (that’s normal).

🔎 SEO Setup

To make your website visible to Google, add this to every page’s <head>:

<meta name="robots" content="index,follow">
<meta name="description" content="Basmach 22 — modern, fast, and beautiful landing pages for businesses.">


Then create two small files in your root directory:

robots.txt

User-agent: *
Allow: /
Sitemap: https://nave-halevi.github.io/Basamach-22/sitemap.xml


sitemap.xml

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://nave-halevi.github.io/Basamach-22/</loc></url>
  <url><loc>https://nave-halevi.github.io/Basamach-22/services.html</loc></url>
  <url><loc>https://nave-halevi.github.io/Basamach-22/portfolio.html</loc></url>
  <url><loc>https://nave-halevi.github.io/Basamach-22/about.html</loc></url>
  <url><loc>https://nave-halevi.github.io/Basamach-22/faq.html</loc></url>
  <url><loc>https://nave-halevi.github.io/Basamach-22/contact.html</loc></url>
  <url><loc>https://nave-halevi.github.io/Basamach-22/thanks.html</loc></url>
</urlset>


Finally, submit your site in Google Search Console
.

⚙️ Git Commands
git init
git add .
git commit -m "Initial commit - Basmach22 site"
git remote add origin git@github.com:nave-halevi/Basamach-22.git
git push -u origin main

✅ Final Status

Your website is live:
👉 https://nave-halevi.github.io/Basamach-22/

Fully functional contact form

Secure Formspree integration

Responsive dark design

SEO-ready and hosted for free

👨‍💻 Built & Designed by

Nave Halevi
Full-Stack Developer and Entrepreneur — passionate about design, web apps, and automation.
🎯 Goal: Build modern, fast, and reliable digital assets — with style and precision.
📍 Israel 🇮🇱
📧 navehalevi1213@gmail.com

🌐 GitHub: nave-halevi
