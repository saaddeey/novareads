# EbookWorld - Premium Digital Books Store

A modern, fully-functional ebook store built with pure HTML, CSS, and JavaScript - perfect for GitHub Pages deployment.

## Features

- **25+ Genres**: Fiction, Science Fiction, Fantasy, Romance, Thriller, Mystery, Horror, Self Help, Business, Finance, Psychology, History, Biography, Technology, Programming, AI & Machine Learning, Health & Fitness, Philosophy, Religion, Travel, Cooking, Art, Poetry, Education, Comics
- **125+ Books**: 4-5 books per genre with detailed information
- **Advanced Search**: Real-time book filtering by title, author, and description
- **Genre Filtering**: Click any genre to filter books instantly
- **Shopping Cart**: Add/remove books with animated sidebar
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern UI**: Glassmorphism effects, smooth animations, gradient designs
- **Smooth Scrolling**: Navigation with scroll spy
- **Toast Notifications**: User-friendly feedback system

## Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your browser - that's it!
3. **Deploy to GitHub Pages** for free hosting

## File Structure

```
ebookworld-static/
|-- index.html          # Main HTML structure
|-- style.css           # Complete styling with animations
|-- script.js           # All functionality and book database
|-- README.md           # This file
```

## How It Works

### No Build Process Required
- Pure HTML/CSS/JavaScript
- No frameworks, no npm, no build tools
- Works offline and online
- GitHub Pages ready

### Features Explained

**Search**: Type in the search bar to instantly filter books by title, author, or description.

**Genre Filtering**: Click any genre card to show only books from that category.

**Cart System**: Add books to cart, manage quantities, see total price.

**Responsive**: Automatically adapts to any screen size.

**Animations**: Smooth transitions, hover effects, and micro-interactions throughout.

## Customization

### Adding New Books
Edit `script.js` and add to the `booksDatabase` object:

```javascript
"Your Genre": [
    {
        title: "Book Title",
        author: "Author Name",
        description: "Book description",
        price: 19.99,
        rating: 4.5
    }
]
```

### Changing Colors
Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --bg-dark: #0f172a;
    /* ... more variables */
}
```

### Adding New Genres
1. Add genre to `booksDatabase` in `script.js`
2. Add icon mapping in `renderGenres()` function

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Deployment

### GitHub Pages
1. Upload these files to a GitHub repository
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose main branch and root folder
5. Your site will be live at `https://username.github.io/repository-name`

### Other Hosting
Works on any static hosting service:
- Netlify
- Vercel
- Firebase Hosting
- Any web server

## Performance

- **Fast Loading**: Minimal dependencies, optimized code
- **SEO Friendly**: Semantic HTML5 structure
- **Mobile Optimized**: Touch-friendly interface
- **Lightweight**: Under 200KB total

## Contributing

Feel free to:
- Add new books and genres
- Improve the UI/UX
- Add new features
- Report bugs

## License

MIT License - Free for personal and commercial use

---

**Built with pure HTML, CSS, and JavaScript - no frameworks required!**
