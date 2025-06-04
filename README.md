# Book Management Full-Stack Project

This is a full-stack Book Management application with a Node.js/Express backend and a React (Vite) frontend.

## Project Structure

```
Book-management/
├── README.md
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── models/
│   │   └── bookmodel.js
│   └── routes/
│       └── booksroutes.js
├── frontend/
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── README.md
│   ├── public/
│   │   └── vite.svg
│   └── src/
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── assets/
│       │   └── react.svg
│       ├── components/
│       │   ├── BackButton.jsx
│       │   ├── Spinner.jsx
│       │   └── home/
│       │       ├── BookModel.jsx
│       │       ├── BooksCard.jsx
│       │       ├── BookSingleCard.jsx
│       │       └── BooksTable.jsx
│       └── pages/
│           ├── CreateBook.jsx
│           ├── DeleteBook.jsx
│           ├── Home.jsx
│           ├── ShowBook.jsx
│           └── UpdateBook.jsx
```

## Backend

- **Tech Stack:** Node.js, Express, MongoDB (Mongoose)
- **Location:** `backend/`
- **Main entry:** `index.js`
- **API routes:** Defined in `routes/booksroutes.js`
- **Book model:** Defined in `models/bookmodel.js`

### Running the Backend

1. Navigate to the `backend` folder:
   ```powershell
   cd backend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the server:
   ```powershell
   npm start
   ```

## Frontend

- **Tech Stack:** React, Vite
- **Location:** `frontend/`
- **Main entry:** `src/main.jsx`, `src/App.jsx`
- **Components:** Located in `src/components/`
- **Pages:** Located in `src/pages/`

### Running the Frontend

1. Navigate to the `frontend` folder:
   ```powershell
   cd frontend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the development server:
   ```powershell
   npm run dev
   ```

## Features

- Add, view, update, and delete books
- Responsive UI
- Loading spinners and navigation buttons

## Notes

- Ensure MongoDB is running locally or update the backend connection string as needed.
- The frontend expects the backend API to be running on a compatible port (update API URLs if needed).

## License

This project is for educational purposes.
