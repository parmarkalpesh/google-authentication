# **Google Authentication with React & Firebase**  
🚀 **A secure Google authentication system built with React and Firebase Authentication.**  

![Google Auth Preview](https://via.placeholder.com/1200x600?text=Google+Auth+Preview)  

## 📌 **Features**  
✅ Google Sign-In & Sign-Out  
✅ Firebase Authentication Integration  
✅ Secure User Session Management  
✅ Responsive & Clean UI  
✅ Protected Routes Example  

---

## 🛠 **Tech Stack**  
- **Frontend:** React.js, CSS, Bootstrap  
- **Authentication:** Firebase Authentication  
- **State Management:** React Hooks  
- **Routing:** React Router  

---

## 🚀 **Getting Started**  

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/parmarkalpesh/google-authentication.git
cd google-authentication
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Set Up Firebase**
1. Go to the **Firebase Console** → [Firebase](https://console.firebase.google.com/)  
2. Create a new project  
3. Enable **Google Authentication**  
4. Get your Firebase Config Keys from **Project Settings → General → Web SDK Config**  
5. Create a `.env` file and add the Firebase config:  

   ```env
   REACT_APP_API_KEY=your_api_key
   REACT_APP_AUTH_DOMAIN=your_auth_domain
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_app_id
   ```

### **4️⃣ Start the App**
```bash
npm start
```
Your app should now be running on **http://localhost:3000/** 🎉  

---

## 🔑 **How It Works**
1. Click the **"Sign in with Google"** button  
2. Select your Google account  
3. Get authenticated and see your profile details  
4. Click **"Logout"** to sign out  

---

## 📸 **Screenshots**
### 🔹 **Login Page**  
![Login Screenshot](https://via.placeholder.com/800x400?text=Login+Page)  

### 🔹 **Authenticated User Dashboard**  
![Dashboard Screenshot](https://via.placeholder.com/800x400?text=User+Dashboard)  

---

## 🛠 **Project Structure**
```
google-authentication/
│── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │── context/
│   │   ├── AuthContext.js
│   ├── App.js
│   ├── index.js
│── public/
│── .env
│── package.json
│── README.md
```

---

## 💡 **Customization**
- Modify the UI in `Login.js` & `Dashboard.js`
- Update Firebase settings in `.env`
- Customize routing in `App.js`

---

## 🤝 **Contributing**
Pull requests are welcome! Feel free to submit **issues** or **suggestions**.  

---

## 📜 **License**
This project is licensed under the **MIT License**.  

---

## 🌟 **Show Your Support!**  
⭐ **Star this repo** if you found it useful!  
📌 **Follow me on GitHub:** [@parmarkalpesh](https://github.com/parmarkalpesh)  
