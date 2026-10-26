# Vision By Kpixels 📸

### Where Vision Meets Reality

A full-stack photography and videography business website built for a real-world client. The platform showcases creative work, presents photography packages, and collects client enquiries through a responsive interface backed by a Node.js API, MongoDB, and Google Sheets integration.

**Live Website:** [www.visionbykpixels.com](https://www.visionbykpixels.com/)

---

## 📌 Overview

Vision By Kpixels is a client project designed to establish a professional online presence for a photography and videography studio. It combines an elegant, responsive portfolio with an enquiry management workflow to help potential clients explore services and submit event requirements.

The project covers frontend development, REST API integration, database persistence, third-party API integration, deployment, and basic SEO implementation.

## ✨ Key Features

- **Responsive UI:** Mobile-first layouts designed for mobile, tablet, and desktop screens.
- **Photography Gallery:** Image gallery with cinematic video content and interactive hover effects.
- **Services Showcase:** Dedicated sections presenting the studio's services and creative work.
- **Membership Plans:** Silver, Gold, and Bronze packages with direct WhatsApp enquiry links.
- **Team Showcase:** Team profiles presented in an interactive card layout.
- **Client Enquiry Form:** Form validation for contact details, event dates, locations, budgets, and event types.
- **REST API:** Node.js and Express backend for processing enquiry submissions.
- **Database Integration:** MongoDB persistence for client lead data.
- **Google Sheets Integration:** Integration for recording enquiry information in a spreadsheet.
- **WhatsApp Integration:** Direct communication links with predefined enquiry messages.
- **SEO Foundations:** Page titles, meta descriptions, semantic content, and favicon branding.
- **Production Deployment:** Frontend hosted on Netlify and backend API hosted on Render.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript (ES6+) |
| Styling | Tailwind CSS, HTML5, CSS3 |
| Backend | Node.js, Express.js |
| API | REST API |
| Database | MongoDB |
| External Integration | Google Sheets API |
| Frontend Hosting | Netlify |
| Backend Hosting | Render |
| Version Control | Git, GitHub |

## 🏗️ Application Architecture

```text
                 Client / Visitor
                        |
                        v
              React + Tailwind CSS
                 (Netlify)
                        |
                        v
                REST API Requests
                        |
                        v
               Node.js + Express
                  (Render)
                   /      \
                  v        v
              MongoDB   Google Sheets
              Database   Integration
```

The frontend collects enquiry information and sends it to the backend API. The backend handles the request, persists lead data in MongoDB, and integrates with Google Sheets to record the submitted information.

## 📂 Project Modules

- **Home:** Hero section and brand introduction.
- **About & Services:** Studio introduction and photography services.
- **Gallery:** Portfolio images and cinematic video.
- **Team:** Team member cards and responsive navigation.
- **Membership:** Package comparison and WhatsApp enquiries.
- **Reviews:** Client testimonials in a responsive slider.
- **Enquiry:** Client lead collection through a validated form.
- **Backend API:** Enquiry processing, database operations, and spreadsheet integration.

## 🚀 Local Development

### Prerequisites

- Node.js and npm
- MongoDB connection
- Google Cloud service account configured for Google Sheets API access

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

### 2. Install dependencies

Run `npm install` inside each application directory containing its own `package.json`.

### 3. Configure environment variables

Create a `.env` file in the backend directory and configure the required variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY=your_service_account_private_key
GOOGLE_SHEET_ID=your_spreadsheet_id
```

Keep credentials private. Never commit `.env` files or service account keys to GitHub.

### 4. Start the backend

From the backend directory, run the development command defined in its `package.json`, for example:

```bash
npm run dev
```

### 5. Start the frontend

From the frontend directory, run:

```bash
npm install
npm run dev
```

Use the scripts and directory names defined in your actual project configuration. Configure the frontend API URL to point to the local backend during development.

## 🔐 Security & Configuration

- Store database credentials and Google service account credentials in environment variables.
- Restrict access to sensitive backend routes.
- Validate and sanitize incoming enquiry data on the server.
- Configure CORS to allow only the required frontend origins.
- Never expose private credentials in frontend code or public repositories.

## 📈 Future Improvements

- Dedicated enquiry management dashboard.
- Automated email notifications for new leads.
- Improved lead status tracking and duplicate-submission protection.
- Expanded SEO, structured data, and performance monitoring.
- Automated testing and CI/CD improvements.

## 👨‍💻 Project Information

**Project:** Vision By Kpixels  
**Category:** Full-Stack Web Development  
**Status:** Website launched; ongoing maintenance and improvements as required.  
**Live Website:** https://www.visionbykpixels.com/

Developed as a real-world client project to deliver a professional digital portfolio and enquiry platform for a photography and videography business.

---

*Built with React, Node.js, MongoDB, and a passion for creating meaningful digital experiences.*
