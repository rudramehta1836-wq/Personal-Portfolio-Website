# Rudra Mehta — Personal Portfolio Website

A modern, responsive personal portfolio website built with **React JS** and **Vite**. Features a dark/light theme toggle, smooth scroll animations, and an EmailJS-powered contact form.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🌙 Dark/Light mode toggle (dark by default)
- ⌨️ Animated typing effect in hero section
- 🎨 Modern, minimal design with Inter font
- 📱 Fully responsive (mobile, tablet, desktop)
- 🧭 Fixed navbar with smooth scroll navigation
- 📧 Working contact form via EmailJS
- 🚀 Deploy-ready for GitHub Pages
- 🎭 Scroll-triggered fade-in animations

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/Personal-Portfolio-Website.git
cd Personal-Portfolio-Website

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
# or
npm run dev

# 4. Open http://localhost:5173 in your browser
```

## 📧 EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com) to send emails without a backend. Follow these steps to set it up:

### Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account (200 emails/month)

### Step 2: Add an Email Service
1. Go to **Email Services** → **Add New Service**
2. Choose your email provider (e.g., Gmail)
3. Connect your email account
4. Note down the **Service ID** (e.g., `service_abc123`)

### Step 3: Create an Email Template
1. Go to **Email Templates** → **Create New Template**
2. Set up your template with these variables:
   - `{{from_name}}` — Sender's name
   - `{{from_email}}` — Sender's email
   - `{{message}}` — Message content
3. Example template:
   ```
   Subject: New Portfolio Message from {{from_name}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Note down the **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Update the Code
Open `src/components/Contact.jsx` and replace the placeholder values:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id'    // e.g., 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'your_template_id'  // e.g., 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'your_public_key'     // e.g., 'aBcDeFgHiJkLmN'
```

## 🌐 Deploy to GitHub Pages

### Step 1: Update `package.json`
Change the `homepage` field to your GitHub Pages URL:
```json
"homepage": "https://yourusername.github.io/Personal-Portfolio-Website"
```

### Step 2: Deploy
```bash
# Build and deploy
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

### Step 3: Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Set Source to **gh-pages** branch
3. Your site will be live at the homepage URL!

## 📁 Project Structure

```
Personal-Portfolio-Website/
├── public/
│   └── vite.svg              # Favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx + .css  # Fixed navigation bar
│   │   ├── Hero.jsx + .css    # Hero section with typing effect
│   │   ├── About.jsx + .css   # About me section
│   │   ├── Skills.jsx + .css  # Skills & technologies
│   │   ├── Projects.jsx + .css # Featured projects
│   │   ├── Achievements.jsx + .css # Achievements section
│   │   ├── Contact.jsx + .css # Contact form (EmailJS)
│   │   └── Footer.jsx + .css  # Footer with social links
│   ├── App.jsx                # Main app component
│   ├── App.css                # App-level styles
│   ├── index.css              # Global styles & themes
│   └── main.jsx               # React entry point
├── index.html                 # HTML entry
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies & scripts
└── README.md                  # This file
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css`:
- **Dark theme**: `:root { ... }`
- **Light theme**: `[data-theme="light"] { ... }`

### Content
- **Personal info**: Edit individual component files in `src/components/`
- **Projects**: Modify the `projects` array in `Projects.jsx`
- **Skills**: Modify the `skillCategories` array in `Skills.jsx`
- **Resume**: Place your resume PDF at `public/resume.pdf`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by **Rudra Mehta**