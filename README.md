---

# 🔗 URL Shortener with Authentication | Node.js  

A URL shortening service built with Node.js, Express, and MongoDB that allows users to shorten URLs and track visit history. The project also includes user authentication for restricted access.  

## 🚀 Features  
✅ **User Authentication** – Sign up, log in, and maintain sessions using cookies.  
✅ **URL Shortening** – Generate short URLs and store them in MongoDB.  
✅ **Redirect Handling** – Automatically redirect users from short URLs to original URLs.  
✅ **Visit Tracking** – Maintain a history of visits for each shortened URL.  
✅ **EJS Templating** – Server-side rendering for dynamic pages.  

## 🛠️ Tech Stack  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Templating Engine:** EJS  
- **Middleware:** Cookie Parser, Body Parser  

## 🚀 Setup & Usage  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/your-username/url-shortener.git  
cd url-shortener  
```  

### 2️⃣ Install Dependencies  
```bash
npm install  
```  

### 3️⃣ Set Up MongoDB  
Ensure MongoDB is running locally and update the connection string in `index.js`.  

### 4️⃣ Run the Server  
```bash
npm start  
```  
The server will start at **[http://localhost:8001](http://localhost:8001)**.  

## 📊 API Endpoints  

| Method | Endpoint         | Description                     |  
|--------|------------------|---------------------------------|  
| POST   | `/user/signup`   | Register a new user             |  
| POST   | `/user/login`    | Authenticate user               |  
| POST   | `/url/shorten`   | Create a shortened URL          |  
| GET    | `/shortId`       | Redirect to the original URL    |  
| GET    | `/test`          | Fetch all stored URLs           |  

## 🔧 Future Enhancements  
📌 **User Dashboard** – View all shortened URLs with analytics.  
📌 **QR Code Generation** – Provide QR codes for shortened URLs.  
📌 **Custom Short URLs** – Allow users to specify custom short links.  

---
