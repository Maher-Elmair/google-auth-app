# 🔐 google-auth-app

**A simple and clean Google OAuth login app built with React.**  

> This project demonstrates how to implement Google login in a React application using `@react-oauth/google`. Users can securely sign in with their Google accounts, view their profile details, and log out. A perfect starter project for learning OAuth authentication and handling user sessions.

---

## 📖 Project Description

This project provides a minimal and effective Google authentication flow using React:

- Login using Google account.
- Decode the JWT to retrieve user information.
- Display user name, email, and profile picture.
- Provide logout functionality that clears the session.

---

## ✅ Features

- 🔐 Google OAuth 2.0 login flow  
- 👤 Display logged-in user's profile picture, name, and email  
- 🚪 Logout and clear session  
- ⚙️ JWT decoding using `jwt-decode`  
- 🧼 Clean and minimal UI  
- 🔄 Auto-select previously logged-in account if available  

---

## 🧠 React Concepts Used

| Concept                  | Usage                                      |
|--------------------------|--------------------------------------------|
| `useState`               | Store and manage user session              |
| `conditional rendering`  | Toggle UI based on authentication state    |
| `event handling`         | Handle login success/error and logout      |
| `3rd-party integration`  | Google OAuth and JWT decoding              |

---

## 🧰 Tools & Libraries

| Tool                    | Purpose                                    |
|-------------------------|--------------------------------------------|
| **React**               | Build components and manage state          |
| **@react-oauth/google** | Handle Google login integration            |
| **jwt-decode**          | Decode JWT token from Google login         |
| **Vite** or **CRA**     | Frontend build tooling                     |
| **CSS**                 | Basic styling                              |

---

## 📸 Screenshots

### 🔐 Login View

![Login Screenshot](./public/design/screencapture-localhost.png)

### 👤 User Profile View

![Profile Screenshot](./public/design/screencapture-localhost-1.png)

> 📝 *Place your screenshots in `public/assets/` and adjust paths if needed.*

---

## 📝 Notes

- This is a front-end only demo; no backend or token storage.
- For real-world apps, use secure token handling and backend verification.
- Can be extended with `localStorage`, `Context API`, or `Firebase`.

---

## 🙋‍♂️ About Me

- 📧 Email: [maher.elmair.dev@gmail.com](mailto:maher.elmair.dev@gmail.com)  
- 🔗 LinkedIn: [https://www.linkedin.com/in/maher-elmair-831042237](https://www.linkedin.com/in/maher-elmair-831042237)

---

## 🔗 Live Preview

🚀 **Try it live on GitHub Pages:**  
🌐 [https://maher-elmair.github.io/google-auth-app/](https://maher-elmair.github.io/google-auth-app/)

> ⚠️ *Make sure to update the URL once the repo is deployed.*

> 🧪 **Note:** This project is intended to run only on `localhost`.  
> Google OAuth (via `@react-oauth/google`) requires authorized origins to be explicitly set in the Google Cloud Console.  
> Since this app is not linked to a deployed domain, only `http://localhost` is allowed by default.  
> To run it live, you would need to:
> - Add your custom domain to the OAuth "Authorized JavaScript origins".
> - Set up secure hosting (e.g., with HTTPS).


---

## 🙌 Thank You

If you find this project helpful, feel free to ⭐ the repository!  
Suggestions, issues, and contributions are always welcome 🙏

---
