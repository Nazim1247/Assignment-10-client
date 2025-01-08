# Sports Equipment Online Store (Client Side)

## live site URL.

### https://my-assignment-10-7291e.web.app/

## Project Overview
The **Sports Equipment Online Store** is a dynamic web application that allows users to browse, filter, and purchase various sports equipment. It provides an interactive and user-friendly experience, complete with authentication and category-based filtering.

---

## Features
- **Category-Based Filtering**: Users can view products based on categories such as cricket, football, tennis, etc.
- **Authentication**: Secure login and registration using Firebase.
- **Product Details**: Each product includes detailed information such as category, rating, price, and images.
- **Responsive Design**: Fully optimized for different devices, including mobile, tablet, and desktop.
- **Dark Mode**: Toggle between light and dark themes for a personalized user experience.

---

## Technologies Used
- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Authentication
- **Routing**: React Router DOM
- **Package Manager**: npm

---

## Installation and Setup

Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/sports-equipment-store-client.git
   cd sports-equipment-store-client
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Add Firebase Configuration**:
   - Create a `.env` file in the root directory.
   - Add your Firebase configuration:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

4. **Start the Development Server**:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

---

## Folder Structure
```
.
├── public
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ProductCard.js
│   ├── pages
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── ProductDetails.js
│   ├── context
│   │   ├── AuthContext.js
│   ├── App.js
│   ├── index.js
├── .env
├── package.json
```

---

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build`
Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for the best performance.

### `npm test`
Launches the test runner in the interactive watch mode.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowledgments
- **React**: For the amazing frontend library.
- **Firebase**: For authentication and backend support.
- **Tailwind CSS**: For the sleek and responsive design.
