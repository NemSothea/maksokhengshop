# Maksongheng Restaurant Website

## 📋 Overview
A fully responsive bilingual restaurant website featuring **English** and **Khmer** languages, showcasing traditional Cambodian cuisine with an elegant design and user-friendly interface.

## ✨ Features

### 🌐 Language Support
- **Bilingual Interface**: Toggle between English and Khmer
- **Language Toggle Buttons**: Easy switch between languages
- **Cultural Fonts**: Special Khmer fonts (Battambang, Koulen, Moul) integrated

### 🍽️ Restaurant Features
- **Home Page**: Hero section with welcome message
- **Today's Specials**: Carousel showcasing featured dishes with pricing
- **Popular Dishes**: Grid of 10 popular food items with search functionality
- **Full Menu Page**: Complete menu with search capabilities
- **Contact Page**: Location, contact details, and Google Maps integration

### 🔍 Search Functionality
- Real-time search on Home page (10 items)
- Full menu search on Menu page (20 items)
- No-results messaging in both languages

### 📱 Responsive Design
- Built with Bootstrap 5
- Mobile-first approach
- Responsive navigation with hamburger menu
- Adapts to all screen sizes

### 🎨 Design Elements
- Modern, clean interface
- Professional color scheme
- Custom CSS styling
- Font Awesome icons
- Google Fonts integration
- Shadow effects and rounded corners

## 🗂️ File Structure

```
restaurant-website/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Custom styles
├── js/
│   └── main.js        # JavaScript functionality
├── images/            # Image assets
│   ├── amok_image.jpg
│   └── (other food images)
└── README.md          # This documentation
```

## 📄 Pages

### 1. **Home Page** (`#home`)
- Hero section with restaurant introduction
- Today's Specials carousel
- Popular Dishes with search
- Call-to-action buttons

### 2. **Menu Page** (`#menu`)
- Complete restaurant menu
- Search functionality
- 20 food items display
- Filtering capability

### 3. **Contact Page** (`#contact`)
- Contact information
- Google Maps embed
- Opening hours
- Location details

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with responsive design
- **Bootstrap 5**: Framework for responsive layout
- **JavaScript**: Interactive features and language switching

### Libraries & APIs
- **Font Awesome 6.4.0**: Icons
- **Google Fonts**: Custom typography
- **Google Maps**: Location embedding

### Fonts
- **Poppins**: Body text
- **Playfair Display**: Headings
- **Battambang**: Khmer text
- **Koulen**: Khmer headings
- **Moul**: Khmer decorative text

## 🚀 Setup Instructions

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Internet connection (for CDN resources)

### Installation
1. **Download the project files**
   ```bash
   git clone [repository-url]
   ```
   Or download the ZIP file and extract

2. **Open the project**
   ```bash
   cd restaurant-website
   ```

3. **Launch the website**
   - Open `index.html` in your browser
   - Or use a local server:
     ```bash
     python -m http.server 8000
     ```
     Then visit: `http://localhost:8000`

### File Structure Setup
Ensure your project has the following structure:
```
restaurant-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    ├── amok_image.jpg
    ├── loklak_image.jpg
    └── (other food images)
```

## ⚙️ Configuration

### Google Maps Integration
1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the map section in `index.html`

### Adding Food Items
Food items are loaded dynamically via JavaScript. Update the food data in `js/main.js`:
```javascript
const foods = [
    {
        name: "Amok Trey",
        nameKh: "អាម៉ុកត្រី",
        description: "Steamed fish curry with coconut milk",
        descriptionKh: "ត្រីឆ្អិនក្នុងស្លឹកចេកជាមួយទឹកដូង",
        price: "$7.19",
        category: "special",
        image: "images/amok_image.jpg"
    },
    // Add more items...
];
```

### Adding Images
Place food images in the `images/` folder and update the image paths in the food data array.

## 🎯 Usage Guide

### Language Switching
- Click **EN** for English interface
- Click **ខ្មែរ** for Khmer interface
- Language preference persists during navigation

### Navigation
- **Desktop**: Use the top navigation bar
- **Mobile**: Tap the hamburger menu icon
- **Footer**: Quick links at the bottom

### Search Features
1. **Home Page Search**: Filters 10 popular dishes
2. **Menu Page Search**: Filters all 20 menu items
3. **Real-time Filtering**: Results update as you type

### Contact Information
- Phone numbers: 070 741 217 / 016 401 280
- Email: nemsothea13@gmail.com
- Location: Trea 4 Village, Phnom Penh
- Hours: 8:00 AM - 9:00 PM daily

## 📱 Responsive Breakpoints

- **Large screens** (≥992px): Full navigation, multi-column layouts
- **Medium screens** (≥768px): Adjusted spacing, responsive images
- **Small screens** (<768px): Stacked layouts, mobile navigation

## 🎨 Customization

### Changing Colors
Edit `css/style.css`:
```css
:root {
    --primary-color: #d4af37; /* Gold */
    --secondary-color: #8b0000; /* Dark red */
    --text-color: #333333;
    --light-bg: #f8f9fa;
}
```

### Adding More Languages
1. Add language toggle button in HTML
2. Create language-specific classes
3. Update JavaScript language switching function

### Adding More Pages
1. Create new section with `class="page-content"`
2. Add to navigation menu
3. Update JavaScript page switching

## 🔧 JavaScript Functions

### Main Functions
- **switchLanguage()**: Toggles between English and Khmer
- **switchPage()**: Handles page navigation
- **searchFoods()**: Filters food items based on search input
- **loadFoods()**: Dynamically loads food items to the page

### Data Structure
Food items are stored as an array of objects with:
- `name` (English name)
- `nameKh` (Khmer name)
- `description` (English description)
- `descriptionKh` (Khmer description)
- `price` (Formatted price)
- `category` (special, popular, etc.)
- `image` (path to food image)

## 📞 Contact & Support

### Restaurant Contact
- **Phone**: 070 741 217 / 016 401 280
- **Email**: nemsothea13@gmail.com
- **Location**: Trea 4 Village, Phnom Penh, Cambodia

### Technical Support
For website issues or modifications:
- Check the browser console for errors
- Ensure all file paths are correct
- Verify internet connection for CDN resources
- Test on different browsers

## 🌐 Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Opera 50+

## 📝 Notes for Maintenance

### Regular Updates
1. **Menu Updates**: Update food items in `js/main.js`
2. **Price Changes**: Modify price values in food data
3. **Special Offers**: Update carousel items
4. **Contact Info**: Keep phone/email/location current

### Image Optimization
1. Compress food images for faster loading
2. Maintain aspect ratio (recommended: 16:9)
3. Use descriptive filenames
4. Keep file sizes under 500KB each

### Performance Tips
1. Minify CSS and JavaScript for production
2. Use CDN for external libraries
3. Optimize image sizes
4. Enable browser caching

## 🐛 Troubleshooting

### Common Issues

1. **Images not displaying**
   - Check file paths
   - Verify image filenames are correct
   - Ensure images exist in the `images/` folder

2. **Language not switching**
   - Check browser JavaScript is enabled
   - Verify `js/main.js` is loaded
   - Check console for errors

3. **Search not working**
   - Verify food data is properly loaded
   - Check search function in JavaScript
   - Ensure input fields have correct classes

4. **Mobile menu not opening**
   - Bootstrap JS not loaded
   - Check CDN links
   - Verify viewport meta tag

5. **Google Maps not showing**
   - Check iframe embed code
   - Verify internet connection
   - Check browser permissions for location

### Debugging
1. Open browser Developer Tools (F12)
2. Check Console tab for errors
3. Verify Network tab for failed requests
4. Use Elements tab to inspect HTML structure

## 📈 Future Enhancements

### Planned Features
- Online ordering system
- Customer reviews section
- Photo gallery
- Reservation system
- Blog/News section
- Social media integration
- Special events calendar
- Loyalty program

### Technical Improvements
- Backend integration for dynamic content
- Database for menu management
- User accounts
- Payment gateway integration
- Analytics tracking
- SEO optimization
- PWA (Progressive Web App) features

## 📄 License

This project is for restaurant business use. All restaurant content (images, descriptions, contact info) is property of Maksongheng Restaurant.

### Third-party Resources
- **Bootstrap**: MIT License
- **Font Awesome**: Free license (with attribution)
- **Google Fonts**: Open Font License
- **Google Maps**: Terms of Service

## 👏 Credits

- **Design**: Custom design for Maksongheng Restaurant
- **Development**: Web development team
- **Content**: Maksongheng Restaurant
- **Icons**: Font Awesome
- **Framework**: Bootstrap
- **Fonts**: Google Fonts
- **Maps**: Google Maps

---

**Last Updated**: November 2023  
**Version**: 1.0  
**Restaurant Established**: 2023

---

*For any questions or support, please contact the restaurant directly or consult the technical documentation.*
