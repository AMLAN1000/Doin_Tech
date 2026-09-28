# ByteSpace — Modern E-Learning Platform

A pixel-perfect, responsive implementation of the **ByteSpace** website design based on the official Figma specification. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

---

## 🚀 Live Demo & Repository
- **Live Vercel URL**: *(Deploying on Vercel)*
- **GitHub Repository**: [https://github.com/AMLAN1000/Doin_Tech](https://github.com/AMLAN1000/Doin_Tech)
- **Active Feature Branch**: `amlan`
- **Pull Request**: [https://github.com/AMLAN1000/Doin_Tech/pull/new/amlan](https://github.com/AMLAN1000/Doin_Tech/pull/new/amlan)

---

## 🛠️ Tech Stack & Architecture
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS, CSS Grid/Flexbox
- **Typography**: Clash Display, Satoshi, Poppins
- **Icons**: Official Figma Vector SVGs & Lucide React
- **Component Architecture**: Modular, clean, reusable components

---

## 🌟 Pages & Features Implemented

### 1. Landing Page (`/`)
- **Navigation Bar**:
  - ByteSpace logo with vector SVG.
  - Desktop & mobile responsive drawer navigation (Home, Courses, Creators).
  - Quick action buttons: *Sign In*, *Join Us*, and shopping cart.
- **Hero Section**:
  - Electric Blue branded background with subtle grid overlay.
  - Floating 3D ornaments (torus, cones, ribbons).
  - Search input with category filter trigger.
  - Hero visual: smiling student holding laptop with headset in green circle cutout.
  - Floating interactive cards: *UI/UX Design* stats, *Learning Progress 55%*, and *Happy Students (4.5 ★ + 2K+)*.
- **Partners Logo Strip**:
  - High-fidelity Logoipsum vector partners strip exported from Figma.
- **Discover Your Passion, Build Your Skills (Courses Section)**:
  - Category filter pills (*Featured*, *Music*, *Drawing & Painting*, *Marketing*, *Animation*, *UI/UX Design*, *Data Science*, etc.).
  - 6 course cards matching Figma:
    1. *Learn Figma from Basic* ($25/lifetime, 4.5 ★)
    2. *Build Digital Asset* ($25/lifetime, 4.5 ★)
    3. *the Power of Big Data* ($25/lifetime, 4.5 ★)
    4. *Balancing Productivity and Self-Care* ($25/lifetime, 4.5 ★)
    5. *Mastering Money Management* ($25/lifetime, 4.5 ★)
    6. *From Idea to Startup Success* ($25/lifetime, 4.5 ★)
    - Includes lessons, duration, comments, beginner level badges, avatar stacks, and pricing.
- **Explore Diverse Learning Paths (Categories Section)**:
  - 6 learning categories: *Design*, *Development*, *IT & Software*, *Business*, *Marketing*, *Photography*.
  - Custom vector icons with lime yellow badges and smooth hover elevation.
- **Your Path to Professional Growth Starts Here!**:
  - Career journey overview.
  - Key counters: **12K Students**, **70+ Courses**, **16 Creators**.
  - Student learning growth visual card.
- **Create & Manage Courses Easily**:
  - Highlighting creator tools, publishing flow, and revenue tracking metrics.
  - Checklist: *Share Your Expertise*, *Monetize Your Passion*, *Flexibility and Autonomy*, *Build a Community*.
- **Creator CTA Banner**:
  - Branded blue banner with 3D ornaments and *Join as Creator* button.
- **Testimonials Section**:
  - Reviews from community members (*Sarah M.*, *James L.*, *Alex B.*) with custom avatars and authentic quotes.
- **Footer**:
  - Newsletter subscription form with feedback notifications.
  - 3-column navigation links and copyright/privacy links.

---

### 2. Bonus Pages (Extra Credit)

#### 🔑 Login Page (`/login`)
- Split-screen design with background grid and floating 3D course card visual.
- Welcome Back header, email and password inputs.
- Social authentication buttons (Facebook, Google).
- Direct switch link to registration page.

#### 📝 Register / Signup Page (`/register`)
- Split-screen design with background grid and floating 3D course card visual.
- Full Name, Email, and Password registration inputs.
- Toast feedback upon account creation and automatic navigation.
- Direct switch link to login page.

---

## 💻 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/AMLAN1000/Doin_Tech.git

# Switch to the project directory
cd Doin_Tech

# Switch to the feature branch
git checkout amlan

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building for Production

```bash
npm run build
npm run start
```
