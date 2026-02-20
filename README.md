# 🚀 Personal Portfolio Website Template

A modern, responsive portfolio website built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **TypeScript**. This template features an AI-powered chatbot, contact form with email integration, smooth animations, and dark mode support.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## ✨ Features

- 🎨 **Modern UI Design** - Clean and professional design with smooth animations
- 🌙 **Dark Mode Support** - Automatic dark/light theme support
- 🤖 **AI Chatbot** - Integrated AI assistant powered by Google Gemini
- 📧 **Contact Form** - Email functionality using Nodemailer
- 📱 **Fully Responsive** - Works on all device sizes
- ⚡ **Fast Performance** - Built with Next.js Turbopack
- 🎭 **Animations** - Smooth transitions using Framer Motion

---

## 📁 Project Structure

```
├── public/                  # Static assets (images, resume, etc.)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/       # AI Chatbot API route
│   │   │   └── contact/    # Contact form API route
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Main page
│   ├── assets/             # Your images (profile photo, etc.)
│   └── components/
│       ├── AchievementSection.tsx   # Achievements display
│       ├── CertificationsSection.tsx # Certifications display
│       ├── Chatbot.tsx              # AI Chatbot component
│       ├── Contact.tsx              # Contact form
│       ├── EducationSection.tsx     # Education history
│       ├── Footer.tsx               # Footer component
│       ├── HeroSection.tsx          # Hero/intro section
│       ├── Navbar.tsx               # Navigation bar
│       ├── ProjectsSection.tsx      # Projects showcase
│       └── SkillsSection.tsx        # Skills display
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Gmail credentials for contact form
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-app-specific-password
   
   # Google Gemini API Key for chatbot (optional)
   GEMINI_API_KEY=your-gemini-api-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization Guide

### 👤 1. Update Personal Information

#### **HeroSection.tsx** - Basic Info & Social Links
Location: `src/components/HeroSection.tsx`

```tsx
// Update your name (Line 20-22)
<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
  Your Name Here
</span>

// Update your title/role (Line 24)
<h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-4">
  Your Job Title
</h2>

// Update your bio/description (Line 27-30)
<p className="max-w-2xl mx-auto mb-8 font-bold">
  Your professional bio goes here...
</p>

// Update social links (Lines 36-70)
href="https://github.com/YOUR-USERNAME"           // GitHub
href="https://www.linkedin.com/in/YOUR-USERNAME"  // LinkedIn
href="mailto:your-email@gmail.com"                // Email
```

#### **Update Profile Image**
1. Add your image to `src/assets/` folder
2. Update the import in `HeroSection.tsx`:
   ```tsx
   import MyImage from '@/assets/your-image.jpg'
   ```

---

### 💼 2. Update Skills

Location: `src/components/SkillsSection.tsx`

```tsx
const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="w-6 h-6 text-emerald-500" />,
    skills: ['JavaScript', 'Python', 'Java'], // Add your skills
  },
  {
    title: 'Frontend',
    icon: <Layout className="w-6 h-6 text-emerald-500" />,
    skills: ['React', 'Next.js', 'Tailwind CSS'], // Add your skills
  },
  // Add more categories as needed
]
```

---

### 📂 3. Update Projects

Location: `src/components/ProjectsSenction.tsx`

```tsx
const projects = [
  {
    title: 'Project Name',
    icon: <TrophyIcon size={24} className='text-emerald-500' />,
    description: 'Brief description of your project...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    demoLink: 'https://your-project-demo.com',    // Live demo URL
    githubLink: 'https://github.com/your-repo',   // GitHub repo URL
  },
  // Add more projects...
]
```

---

### 🎓 4. Update Education

Location: `src/components/EducationSection.tsx`

```tsx
const educationData = [
  {
    degree: 'Your Degree Name',
    institution: 'Your University/College Name',
    location: 'City, State/Country',
    period: '2020 - 2024',
  },
  // Add more education entries...
]
```

---

### 🏆 5. Update Achievements

Location: `src/components/AchievementSection.tsx`

```tsx
const achievements = [
  {
    title: 'Achievement Title',
    description: 'Description of your achievement...',
  },
  // Add more achievements...
]
```

---

### 📜 6. Update Certifications

Location: `src/components/CertificationsSection.tsx`

```tsx
const certifications = [
  {
    title: 'Certification Name',
    platform: 'Platform/Issuer',
    date: 'Month Year',
    credentialLink: 'https://credential-url.com',
  },
  // Add more certifications...
]
```

---

### 📞 7. Update Contact Information

#### **Contact Form Recipient**
Location: `src/app/api/contact/route.ts`

```tsx
const mailOptions = {
  from: process.env.GMAIL_USER,
  to: 'your-email@example.com',  // Update this email
  subject: `New Contact Form Submission from ${name}`,
  // ...
};
```

#### **Footer Social Links**
Location: `src/components/Footer.tsx`

Update the social media links and copyright name.

---

### 🤖 8. Customize AI Chatbot

Location: `src/app/api/chat/route.ts`

The chatbot uses Google Gemini AI. Update the conversation history to reflect your information:

```tsx
const initialHistory = [
  {
    role: "user",
    parts: [
      { text: "You are a virtual assistant designed to help visitors explore the portfolio of [YOUR NAME]..." }
    ],
  },
  // Update all model responses with your information
]
```

**Important:** Replace the hardcoded API key with an environment variable:
```tsx
const apiKey = process.env.GEMINI_API_KEY;
```

---

### 🎨 9. Update Branding Colors

The main accent color is `emerald-500`. To change it:

1. Search for `emerald` in all component files
2. Replace with your preferred Tailwind color (e.g., `blue`, `purple`, `indigo`)

Example:
```tsx
// Change from
<span className="text-emerald-500">

// Change to
<span className="text-blue-500">
```

---

### 📧 10. Setting Up Gmail for Contact Form

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App-Specific Password:
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Create a new app password
3. Add credentials to `.env.local`:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   ```

---

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🔧 Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | React Framework |
| React 19 | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| React Icons | Additional Icons |
| Nodemailer | Email Service |
| Google Gemini AI | AI Chatbot |

---

## 📝 Quick Customization Checklist

- [ ] Update profile image in `src/assets/`
- [ ] Edit name and title in `HeroSection.tsx`
- [ ] Update social media links in `HeroSection.tsx`
- [ ] Modify skills in `SkillsSection.tsx`
- [ ] Add your projects in `ProjectsSenction.tsx`
- [ ] Update education in `EducationSection.tsx`
- [ ] Add achievements in `AchievementSection.tsx`
- [ ] Add certifications in `CertificationsSection.tsx`
- [ ] Update contact email in `route.ts`
- [ ] Customize AI chatbot responses in `chat/route.ts`
- [ ] Update footer information in `Footer.tsx`
- [ ] Set up environment variables
- [ ] Add your resume PDF to `public/` folder

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Vaibhav Mashal**

- GitHub: [@vaibhavmashal](https://github.com/vaibhavmashal)
- LinkedIn: [Vaibhav Mashal](https://www.linkedin.com/in/vaibhav-mashal)
- Email: vaibhavmashal098@gmail.com

---

⭐ **If you find this template helpful, please give it a star!** ⭐
