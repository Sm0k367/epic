# Epic Tech AI - Installation Guide

This guide will help you set up the Epic Tech AI demonstration on your local machine or deploy it to a web server.

## Local Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript
- Optional: A local web server (like Node.js with http-server, Python's SimpleHTTPServer, etc.)

### Steps for Local Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sm0k367/Epic-Tech.git
   cd Epic-Tech
   ```

2. **Open in browser (simple method)**
   - Simply open the `index.html` file in your web browser
   - Note: Some features might work better when served through a web server

3. **Using a local web server (recommended)**
   
   With Node.js:
   ```bash
   # Install http-server if you don't have it
   npm install -g http-server
   
   # Start the server
   http-server
   ```
   
   With Python:
   ```bash
   # Python 3
   python -m http.server
   
   # Python 2
   python -m SimpleHTTPServer
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:8080` (or whatever port your server uses)

## Web Deployment

### Option 1: GitHub Pages

1. Fork this repository to your GitHub account
2. Go to Settings > Pages
3. Select the main branch as the source
4. Click Save
5. Your site will be published at `https://[your-username].github.io/Epic-Tech/`

### Option 2: Netlify

1. Sign up for a Netlify account
2. Click "New site from Git"
3. Select GitHub and authorize Netlify
4. Choose the Epic-Tech repository
5. Deploy settings should be automatically detected
6. Click "Deploy site"

### Option 3: Vercel

1. Sign up for a Vercel account
2. Click "Import Project"
3. Select "Import Git Repository"
4. Paste the GitHub repository URL
5. Deploy settings should be automatically detected
6. Click "Deploy"

### Option 4: Any Web Hosting

1. Download the repository files
2. Upload all files to your web hosting service using FTP or their file manager
3. Make sure the files are in the public HTML directory
4. Access your website through your domain

## Customization

You can customize the Epic Tech AI by modifying these files:

- `epic-tech.html` - Main interface structure
- `epic-tech-styles.css` - Visual styling
- `chatbot.js` - Chatbot functionality and responses
- `chatbot-styles.css` - Chatbot appearance

## Troubleshooting

- **Chatbot not appearing**: Make sure JavaScript is enabled in your browser
- **Styling issues**: Check if all CSS files are properly loaded
- **Console errors**: Open your browser's developer tools (F12) to check for any JavaScript errors

## Support

If you encounter any issues, please open an issue on the GitHub repository.