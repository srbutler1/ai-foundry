# Arkansas AI Foundry Website

This is the official website for the AI Foundry at the University of Arkansas. Built with React, Vite, and TailwindCSS.

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
cd ai-foundry
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Editing the Website

### Structure
The main website content is in `src/pages/homepage.jsx`. The file contains several sections:
- Hero Section
- About Section
- Core Offerings
- Career Development
- Upcoming Events
- Leadership Team
- Footer

### How to Edit Content

1. **Update Leadership Information**
   - Open `src/homepage.jsx`
   - Locate the "Leadership Team" section
   - Replace placeholder text (e.g., "[President Name]") with actual information

2. **Add Events**
   - Find the "Upcoming Events" section
   - Replace the "Exciting things to come!" placeholder with event details

3. **Modify Core Offerings**
   - Edit the content in the three-column grid under "Core Offerings"
   - Each card has an icon, title, and description

4. **Update Colors**
   - Main colors are defined in `tailwind.config.js`
   - Primary colors: foundry-red (#E31837) and foundry-dark (#800000)

### Making Changes

1. Make your edits in the development environment
2. Test changes locally using `npm run dev`
3. Commit and push your changes:
```bash
git add .
git commit -m "Description of your changes"
git push
```

## Tech Stack
- React
- Vite
- TailwindCSS
- Lucide React (icons)
- shadcn/ui components

## File Structure

```
ai-foundry/
.
├── dist
│   ├── assets
│   └── images
├── node_modules
# lotta modules here 
├── public
│   └── images
└── src
    ├── assets
    ├── components
    ├── data
    └── pages
```

## Need Help?
Contact sbutler@walton.uark.edu or nhertlein@walton.uark.edu  for questions or assistance with the website.

## Development Guidelines

### Code Style
- Use consistent indentation (2 spaces)
- Keep components organized and well-commented
- Follow React best practices
- Use Tailwind classes for styling

### Git Workflow
1. Pull latest changes before starting work:
```bash
git pull origin main
```
2. Create a new branch for your changes:
```bash
git checkout -b feature/your-feature-name
```
3. Make your changes and commit regularly
4. Push your branch and create a pull request

### Adding New Features
1. Test locally first
2. Ensure mobile responsiveness
3. Maintain consistent styling
4. Update documentation if needed

## Deployment
at the moment, Sam pushes changes live regularly

## Maintenance Mode

The website includes a maintenance mode feature that allows you to temporarily show a "Under Maintenance" page to all visitors while keeping the rest of the site hidden.

### Enabling Maintenance Mode

1. **Enable the maintenance page**:
   - Open `src/App.jsx`
   - Change line 12 from `const MAINTENANCE_MODE = false;` to `const MAINTENANCE_MODE = true;`

2. **Update robots.txt** (if not already done):
   - Open `public/robots.txt`
   - Change `Allow: /` to `Disallow: /`
   - Comment out the sitemap line

3. **Deploy the changes**:
   ```bash
   npm run deploy
   ```

### Disabling Maintenance Mode

1. **Disable the maintenance page**:
   - Open `src/App.jsx` 
   - Change line 12 from `const MAINTENANCE_MODE = true;` to `const MAINTENANCE_MODE = false;`

2. **Restore normal robots.txt**:
   - Open `public/robots.txt`
   - Change `Disallow: /` to `Allow: /`
   - Uncomment the sitemap line:
     ```
     Sitemap: https://arkansasaifoundry.org/sitemap.xml
     ```

3. **Deploy the changes**:
   ```bash
   npm run deploy
   ```

### What Maintenance Mode Does

- Shows a professional "Under Maintenance" page to all visitors
- Hides all regular pages (homepage, blog, consulting, verification)
- Includes appropriate meta tags to prevent search engine indexing
- Blocks search engine crawlers via robots.txt
- Displays contact information for questions

The maintenance page is located at `src/components/MaintenancePage.jsx` and can be customized as needed.
