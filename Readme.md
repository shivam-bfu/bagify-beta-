# 👜 Bagify

**Bagify** is a B2C e-commerce platform built to sell a wide variety of bags online. It is powered by a **Node.js + Express.js backend** with **EJS-based server-side rendering (SSR)**. The platform allows businesses to list bags, manage inventory, and sell directly to consumers with secure payment integration.

> 🧪 **Note:** The frontend is currently under development and will soon include a responsive user interface and enhanced user experience.

---

## 🛍️ Key Features

- 👜 Bag listings with dynamic product pages
- 👤 User authentication and session management
- 💳 Secure payment gateway integration (planned)
- 📦 Cart and order management system
- 🧾 Admin panel for product and inventory management (WIP)
- 🖼️ Image upload and display for each product
- 🌍 EJS-based SSR for improved SEO and performance

---

## 🛠️ Tech Stack

| Layer         | Technology              |
|---------------|-------------------------|
| **Frontend**  | HTML, CSS, EJS (SSR)    |
| **Backend**   | Node.js, Express.js     |
| **Database**  | MongoDB + Mongoose      |
| **Templating**| EJS (Server-Side Rendered) |
| **Auth**      | Sessions + Passport.js  |

---

## 🖥️ Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/Bagify.git
cd Bagify


npm install


Create a .env file in the root directory and add:


PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

Run the development server

npm start
