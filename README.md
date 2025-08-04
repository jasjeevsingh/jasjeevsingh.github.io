# Jasjeev Singh - Personal Website

A chalkboard-themed personal website built with React + Vite, featuring a dark, educational aesthetic with chalky textures and smooth animations.

## 🎨 Features

- **Chalkboard Theme**: Dark background with chalk-white text and colorful accents
- **Responsive Design**: Optimized for all device sizes
- **Modern React**: Built with functional components and hooks
- **Smooth Navigation**: React Router with animated transitions
- **Interactive Elements**: Hover effects, chalk dust animations, and typewriter text
- **SEO Optimized**: Meta tags and semantic HTML structure

## 🚀 Live Demo

Visit the live site: [https://jasjeevsingh.github.io](https://jasjeevsingh.github.io)

## 📋 Sections

- **Home**: Welcome page with tagline "Professional Ponderer. Semi-vibe coder."
- **About**: Personal story, philosophy, skills, and interests
- **Projects**: Showcase of work with ProjectCard components
- **Contact**: Contact form, social links, and FAQ
- **Coming Soon**: Blog, Portfolio, and Startup Ideas sections

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Modules approach
- **Fonts**: Google Fonts (Patrick Hand, JetBrains Mono)
- **Deployment**: GitHub Pages

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/jasjeevsingh/jasjeevsingh.github.io.git
   cd jasjeevsingh.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### GitHub Pages (Recommended)

This project is configured for easy deployment to GitHub Pages:

1. **Update `vite.config.js` base path** (if needed)
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/', // Only if not using custom domain
   })
   ```

2. **Deploy using npm script**
   ```bash
   npm run deploy
   ```

   This script will:
   - Build the project (`npm run build`)
   - Deploy to GitHub Pages using `gh-pages` package

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch
   - Save and wait for deployment

### Alternative Deployment Options

#### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

## 🎨 Customization

### Color Scheme
The chalkboard theme uses CSS custom properties defined in `src/index.css`:

```css
:root {
  --chalk-white: #f8f8f2;
  --chalk-green: #a6e22e;
  --chalk-blue: #66d9ef;
  --chalk-yellow: #e6db74;
  --chalk-orange: #fd971f;
  --chalkboard-dark: #1a1a1a;
  --chalkboard-darker: #0f0f0f;
}
```

### Adding New Sections
1. Create a new component in `src/pages/`
2. Add the route to `src/App.jsx`
3. Update navigation in `src/components/Layout/Layout.jsx`

### Modifying Content
- **Personal Info**: Update content in respective page components
- **Projects**: Modify the projects array in `src/pages/Projects/Projects.jsx`
- **Contact Info**: Update social links and email in `src/pages/Contact/Contact.jsx`

## 📁 Project Structure

```
jasjeevsingh.github.io/
├── public/
│   ├── favicon.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   │   └── Layout.css
│   │   └── ProjectCard/
│   │       ├── ProjectCard.jsx
│   │       └── ProjectCard.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   └── Contact/
│   │       ├── Contact.jsx
│   │       └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🌟 Future Enhancements

- **Blog Section**: Add markdown blog functionality
- **Portfolio Gallery**: Showcase creative work and designs
- **Startup Ideas**: Interactive idea board with voting
- **Dark/Light Mode Toggle**: User preference system
- **Contact Form Backend**: Add form submission handling
- **Analytics**: Add visitor tracking and insights

## 🤝 Contributing

Feel free to submit issues and pull requests. Suggestions for improvements are always welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: your.email@example.com
- **GitHub**: [@jasjeevsingh](https://github.com/jasjeevsingh)
- **LinkedIn**: [jasjeevsingh](https://linkedin.com/in/jasjeevsingh)
- **Website**: [jasjeevsingh.github.io](https://jasjeevsingh.github.io)

---

Built with ❤️ and lots of ☕ by Jasjeev Singh