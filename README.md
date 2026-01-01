# FrontEnd-React-Assignment-1

> Migrated to Next.js (Pages Router). To run locally: `npm install` then `npm run dev`. Vite entry files were removed (index.html, src/main.jsx, vite.config.js). Routing converted from `react-router-dom` to Next pages.

# 🏠 Home Maintenance Business Directory

A modern, full-featured **Home Maintenance Business Directory** web application connecting customers with trusted service providers.  
Both **customers** and **business owners** can sign up, manage profiles, and use personalized dashboards.  
Built with elegant UI components, animations, and consistent branding for a smooth, professional experience.

---

## 🌟 Key Features

### 🏡 Public Pages
| Page | Description |
|------|--------------|
| **Home** | Beautiful landing section with gradient hero, feature highlights, and quick navigation. |
| **Services** | Browse categorized home maintenance services like plumbing, electrical, and cleaning. |
| **About Us** | Story-driven layout sharing company background, mission, and values. |
| **Contact Us** | Contact form + integrated map with location badge and gradient overlay. |
| **Search Results** | Displays service providers or businesses matching search queries with filters and tags. |

---

## 👥 User Roles

### 👩‍🔧 **Customer**
- Sign up and log in securely.
- Create and edit profile (name, contact info, address, preferences).
- Browse and **book services**.
- Manage **past and upcoming bookings** from a dedicated **Customer Dashboard**.
- Rate and review businesses after service completion.

### 🧑‍💼 **Business Owner**
- Register and set up a professional **Business Profile** (name, logo, location, services, pricing, description).
- Access the **Business Onboarding** page to complete verification and setup.
- Manage service listings and booking requests from the **Business Dashboard**.
- View analytics, customer feedback, and profile performance.
- Showcase their **Public Profile Page** (viewable by all users).

---

## 🧭 Page Flow

| Flow | Description |
|------|--------------|
| Visitor → Home → Services / Search | Explore available services or businesses |
| Customer → Sign Up → Profile Setup → Customer Dashboard | Manage bookings and view history |
| Business → Sign Up → Onboarding → Business Dashboard | Manage listings and see analytics |
| Any User → Search → View Business Public Profile | Discover and connect with service providers |

---

## 🖼️ Screens and UI Components

- **splash screen:**
- **Home Page:** Gradient hero, feature highlights, and CTA buttons.
- **Services Page:** Interactive cards using Tailwind and shadcn UI.
- **About Us Page:** Company info with animated visuals.
- **Contact Page:** OpenStreetMap embed with gradient overlay and contact badge.
- **Search Results Page:** Responsive grid view with filters and sorting.
- **Business Public Profile Page:** Displays company name, logo, description, rating, and service list.
- **Customer Dashboard:** Cards for bookings, reviews, and profile settings.
- **Business Dashboard:** Stats, active services, and customer requests.
- **Sign In / Sign Up Pages:** Clean authentication design matching overall theme.
- **Business Onboarding:** Step-by-step setup form (profile, service categories, verification).

---
## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React + Vite  |
| Styling | Tailwind CSS + shadcn/ui |



## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/zahrajafari-dev/HMBD-FrontEnd-React-Assignment-1.git
cd HMBD-FrontEnd-React-Assignment-1

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev


Images of the Screens


Home/Landing Page
![Home Page Preview](public/images/home.png)

Services Page
![Services Page Preview](public/images/services.png)

About Us page
![About Us Page Preview](public/images/about.png)

Contact Page
![Contact Page Preview](public/images/contact.png)

Search Results Page
![Search Results Page Preview](public/images/search.png)

Public Business Profile Page
![Business Profile Page Preview](public/images/businessprofile.png)

Customer Dashboard Page
![Customer Dashboard Page Preview](public/images/cusDashboard.png)

Business Dashboard Page
![Business Dashboard Page Preview](public/images/busOwnerDashboard.png)

SignIn/SignUp Page
![Auth Page Preview](public/images/auth.png)

Business Onboarding Screen
![Business Onboarding Screen Preview](public/images/onboard.png)

