# Bekam Beyene - 3D Developer Portfolio 🌐

An interactive and visually rich developer portfolio built with **React + Vite + TypeScript + Three.js + Tailwind CSS + Framer Motion**.  
This project highlights my work, skills, and professional background while delivering an immersive user experience.

---

## 🚀 Live Demo
[https://your-portfolio-url.com](https://your-portfolio-url.com)

---

## 📸 Screenshots
*(Add your screenshots here)*

---

## ✨ Features
- 🖼 **3D Hero Section** – Built with Three.js & React Three Fiber
- 🎬 **Smooth Animations** – Handled by Framer Motion
- 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop
- 📧 **Contact Form** – Integrated via Formspree for instant messages
- ⚡ **Optimized Performance** – Using Vite for blazing-fast builds

---

## 🛠 Tech Stack
- **Frontend Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Rendering**: Three.js, React Three Fiber
- **Animations**: Framer Motion
- **Forms**: Formspree
- **Assets**: SVG graphics, optimized images

---
**
This project is built with a modern, robust tech stack:

- **Frontend:**
  - [React](https://reactjs.org/) (v18) with [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/) as the build tool
  - [Tailwind CSS](https://tailwindcss.com/) for styling
  - [React Router DOM](https://reactrouter.com/) for routing
- **3D & Animation:**
  - [Three.js](https://threejs.org/)
  - [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
  - [Framer Motion](https://www.framer.com/motion/) for animations
- **Backend & Forms:**
  - [Formspree](https://formspree.io/) for the contact form
- **Icons:**
  - [React Icons](https://react-icons.github.io/react-icons/)
**
---

## 📂 Project Structure

```text
portfolio/
├── public/                   # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── components/           # Reusable UI components
│   ├── contexts/             # React Context providers (e.g., theme)
│   ├── pages/                # Page components (Home, About, Projects, Contact, etc.)
│   ├── styles/               # Tailwind CSS and other styles
│   ├── App.tsx               # Root app component
│   └── main.tsx              # Application entry point
├── package.json              # Project metadata and dependencies
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration



# 📦 Installation & Setup



1️⃣ Clone the repository
git clone https://github.com/OgBek/portfolio.git

2️⃣ Navigate to the project
```bash
cd portfolio
```
> **Note:** Add your Formspree ID to a `.env` file as follows before running:
> ```
> VITE_FORMSPREE_ID=your_formspree_id_here
> ```

 3️⃣ Install dependencies
npm install

 4️⃣ Start development server
npm run dev

🔧 Build for Production
npm run build

---
## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Serves the production build locally for preview.

## Contact

- **Bekam Beyene**
- **Email:** bbekam60@gmail.com
- **LinkedIn:** [linkedin.com/in/bekam-beyene](https://linkedin.com/in/bekam-beyene)
- **GitHub:** [@OgBek](https://github.com/OgBek)

---


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
`
