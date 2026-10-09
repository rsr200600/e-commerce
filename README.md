<<<<<<< HEAD
# e-commerce
Rawat Clothing is a modern, responsive e-commerce website offering fashionable clothing and accessories for men and women. Built using HTML, CSS, and JavaScript, it includes product browsing, search, filters, shopping cart, user registration, login, and account management, providing a smooth, attractive, and user-friendly online shopping experience
=======
# Rawat Clothing — Responsive E-commerce Frontend

A stylish, responsive clothing storefront made with **HTML, CSS and vanilla JavaScript**. No build tools are required, so the project is easy to open in VS Code and publish to GitHub Pages.

## Pages included

- `index.html` — landing page, category cards, featured products, newsletter sign-up
- `shop.html` — product catalogue, search, category and price filters, sort, wishlist, quick-add
- `product.html` — product details, size selection, quantity selector, wishlist and related products
- `login.html` / `signup.html` — demo authentication screens
- `dashboard.html` — customer dashboard, order history, wishlist and profile
- `cart.html` — shopping bag, quantity controls, promo code and simulated checkout
- `about.html` — brand story page
- `contact.html` — contact form demo, shipping notes and FAQs

## Run locally

1. Download and unzip `Rawat-Clothing.zip`.
2. Open the extracted `rawat-clothing` folder in VS Code.
3. Open `index.html` directly in your browser, or use the **Live Server** extension for a local server.

There is no npm install or compilation step.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `rawat-clothing`.
2. Upload all files and folders from this project (upload the contents of the project folder, not the ZIP itself).
3. Open **Settings → Pages** in the repository.
4. Set **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish and open the URL it provides.

## Key features

- Responsive layouts for desktop, tablet and mobile
- Shared product catalogue and INR pricing
- Search, category and price filtering, sorting, and load-more controls
- Product detail page with sizes and quantity selection
- Shopping cart persisted in `localStorage`
- Wishlist persisted in `localStorage`
- Demo sign-up and sign-in screens
- Customer dashboard, profile editing and locally stored order history
- Promo code **`RAWAT10`** for a simulated 10% discount
- Demo checkout and order confirmation; no payment is processed
- Accessible labels, focus states, reduced-motion support, mobile navigation and toast feedback

## Where to customize

- Product catalogue and image links: `assets/js/main.js`
- Global design, breakpoints and theme: `assets/css/style.css`
- Search and filtering: `assets/js/shop.js`
- Product page: `assets/js/product.js`
- Account demo: `assets/js/auth.js`
- Cart and simulated checkout: `assets/js/cart.js`
- Account dashboard: `assets/js/dashboard.js`
- Logo/favicon and product-image fallback: `assets/images/`

## Important demo limitations

This project is a **frontend portfolio/demo**, not a production commerce system. User records, wishlist, cart, newsletter sign-ups, contact messages and orders are stored in the current browser's `localStorage`; they are not shared between users/devices and are not secure. The checkout does not process payments or contact a fulfilment service. For a real store, connect a backend, database, secure authentication, server-side inventory/orders, payment provider, and proper privacy/return policies. Never use this demo's browser storage to handle real passwords or payment details.

Product/editorial photography is loaded from Unsplash URLs, and Google Fonts are loaded from Google Fonts, so those images/fonts need an internet connection. A local SVG fallback is provided if a product image fails to load.
>>>>>>> master
