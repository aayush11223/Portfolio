# Portfolio

Personal portfolio website built with the MERN stack, showcasing my projects, skills, and contact information. The frontend fetches project data live from a custom backend API rather than using static/hardcoded content, and the contact form saves messages directly to MongoDB.

**Live site:** [aayushbasnet05.com.np](https://aayushbasnet05.com.np)
**Live API:** `https://your-app.onrender.com/api` <!-- replace with your actual Render URL -->
**Repo:** [github.com/aayush11223/Portfolio](https://github.com/aayush11223/Portfolio)

## Tech stack

**Frontend:** React (Vite), Tailwind CSS, shadcn/ui, Axios — deployed on Vercel with a custom `.com.np` domain
**Backend:** Node.js / Express (ES modules), MongoDB (Atlas) with Mongoose — deployed on Render

## Features

- Single-page layout with smooth-scroll navigation (Hero, About, Skills, Projects, Contact)
- Projects section fetched live from a MongoDB-backed REST API
- Contact form that submits directly to the backend and stores messages in MongoDB
- Centralized error handling middleware on the backend
- Fully responsive, mobile-first design
- Resume download

## Repo structure

```
Portfolio/
├── portfolio-frontend/
│   └── src/
│       ├── api/
│       │   └── axios.js          # centralized axios instance
│       ├── components/
│       │   ├── layout/            # Navbar, Footer
│       │   ├── sections/          # Hero, About, Skills, Projects, Contact
│       │   └── ui/                 # shadcn components
│       ├── pages/
│       │   └── Home.jsx
│       ├── App.jsx
│       └── main.jsx
│
└── portfolio-backend/
    ├── config/
    │   └── db.js                   # MongoDB connection
    ├── models/
    │   ├── Project.js
    │   └── Contact.js
    ├── controllers/
    │   ├── projectController.js
    │   └── contactController.js
    ├── routes/
    │   ├── projectRoutes.js
    │   └── contactRoutes.js
    ├── middleware/
    │   └── errorHandler.js
    └── server.js
```

## API endpoints

### Projects
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get a single project by ID |
| POST | `/api/projects` | Create a new project |

### Contact
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/contact` | Submit a contact message |

## Getting started

Clone the repo:
```bash
git clone https://github.com/aayush11223/Portfolio.git
cd Portfolio
```

### Backend
```bash
cd portfolio-backend
npm install
```
Create a `.env` file in `portfolio-backend/`:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Run the dev server:
```bash
npm run dev
```

### Frontend
Open a new terminal:
```bash
cd portfolio-frontend
npm install
```
Create a `.env` file in `portfolio-frontend/`:
```
VITE_API_URL=http://localhost:5000/api
```
Run the dev server:
```bash
npm run dev
```

Both servers need to run at the same time during development — backend on port 5000, frontend on Vite's default port.

## Deployment

Since this is a monorepo, both Vercel and Render are configured to build from a **subdirectory** rather than the repo root:

- **Frontend** deployed on **Vercel**, with the project's root directory set to `portfolio-frontend`. `VITE_API_URL` is set in Vercel's environment variables to point to the live backend. Custom domain `aayushbasnet05.com.np` connected via DNS records through register.com.np.
- **Backend** deployed on **Render** as a web service, with the root directory set to `portfolio-backend`. Environment variables (`MONGO_URI`, `PORT`) configured in Render's dashboard. CORS restricted to the live frontend origin and localhost for development.

## Author

**Aayush Basnet**
[GitHub](https://github.com/aayush11223) · [aayushbasnet05.com.np](https://aayushbasnet05.com.np)