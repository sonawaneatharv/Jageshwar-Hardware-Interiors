# Jageshwar Hardware & Interiors Website

A modern, professional static frontend website for Jageshwar Hardware & Interiors, showcasing their product catalog and company information.

## 🚀 Features

- **Modern Design**: Clean, professional interface with custom color palette
- **Responsive Layout**: Fully responsive across desktop, tablet, and mobile devices
- **Product Catalog**: Comprehensive product showcase with filtering capabilities
- **Smooth Animations**: Subtle page transitions and hover effects using Framer Motion
- **SEO Friendly**: Semantic HTML structure and optimized performance

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Routing**: React Router DOM

## 🎨 Design System

### Color Palette
- **Primary Color (Deep Green)**: `#0A3839`
- **Accent Color (Gold/Yellow)**: `#FFC72C`
- **Background Color (Off-White)**: `#F8F8F8`
- **Text Color (Dark Gray)**: `#333333`

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Footer.jsx          # Footer component
│   └── ProductCard.jsx     # Reusable product card
├── pages/
│   ├── HomePage.jsx        # Landing page
│   ├── ProductsPage.jsx    # Product catalog with filtering
│   ├── AboutUsPage.jsx    # Company information
│   └── ContactPage.jsx    # Contact form and details
├── data/
│   └── products.js         # Product data
├── App.jsx                 # Main app component with routing
└── main.jsx               # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd atharv_website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📱 Pages Overview

### Home Page
- Hero section with call-to-action
- Featured products showcase
- Brand partners section
- Product categories overview

### Products Page
- Interactive category filtering
- Responsive product grid
- Product search functionality
- Detailed product information

### About Us Page
- Company history and story
- Core values and strengths
- Team information
- Mission statement

### Contact Page
- Contact information and business hours
- Interactive contact form
- Location details
- Multiple contact methods

## 🎯 Key Features

### Product Filtering
- Dynamic category filtering
- Real-time product count updates
- URL-based category selection
- Responsive filter sidebar

### Animations
- Page transition effects
- Hover animations on cards and buttons
- Scroll-triggered animations
- Smooth state transitions

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation
- Touch-friendly interactions

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 19,
  name: "Product Name",
  price: 1500,
  description: "Product description",
  category: "Category",
  brand: "Brand",
  imageUrl: "https://picsum.photos/seed/product19/400/400"
}
```

### Modifying Colors
Update the color palette in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0A3839',
      accent: '#FFC72C',
      background: '#F8F8F8',
      text: '#333333',
    },
  },
}
```

## 📄 License

This project is created for Jageshwar Hardware & Interiors. All rights reserved.

## 🤝 Support

For support or questions, please contact:
- Email: info@jageshwarhardware.com
- Phone: +91 98765 43210