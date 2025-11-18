1. Project Title
GreenRoot – An AI-Powered Crop Recommendation and Farm Management System.

2. Problem Statement
Many farmers face difficulties in selecting the right crop due to unpredictable weather, soil
conditions, and market fluctuations.
This leads to reduced yield and financial loss.
GreenRoot helps farmers by providing AI-driven crop recommendations based on soil
pH, temperature, and rainfall data.
It also allows farmers to store, view, update, and manage farm data using an interactive
web platform with a secure relational database.

3. System Architecture
Frontend (React.js) → Backend (Node.js + Express API) → Database (MySQL) → AI Module (Flask / TensorFlow)
Frontend → Backend (API) → Database
Example stack:
1. Frontend: React.js with React Router (for pages like Login, Dashboard, and Crop Suggestion)
2. Backend: Node.js + Express.js REST API (handles CRUD + AI requests)
3. Database:MySQL (Relational database with structured tables and relationships)
4. Authentication: MySQL (Relational database with structured tables and relationships)
5. AI Module: Python (Flask API) integrated with trained ML model
6. Hosting:
○ Frontend → Vercel / Netlify
○ Backend → Render / Railway
○ Database → MySQL on Aiven / Railway / PlanetScale

4. Key Features
  Category                             Features
Authentication &          Secure farmer registration and login using JWT (with bcrypt password encryption)
Authorization

CRUD Operations (API + DB)   Farmers can create, read, update, and delete farm and soil data using REST APIs connected to MySQL tables.

Search, Sort, Filter,        PaginationSQL queries support filtering by crop or region, sorting by pH or rainfall, and pagination using LIMIT/OFFSET.

AI Crop Recommendation      Suggests the best crop for given soil and weather parameters using a trained machine learning model.

Frontend Routing            Pages: Home, Login, Signup, Dashboard, Add Farm, Crop Recommendation.

Weather Integration         Fetches real-time temperature and rainfall data via the OpenWeather API.

Hosting                    Fully hosted: Frontend (Vercel/Netlify), Backend(Render/Railway), Database (MySQL).

5. Tech Stack
Layer Technologies Used      Frontend React.js, React Router, Axios, TailwindCSS /Bootstrap
Database MySQL (Relational)  Backend Node.js, Express.js
Authentication               JWT, bcrypt
AI Integration               Python (Flask API), TensorFlow / scikit-learn

6. API Overview
   Endpoint                Method                    Description                       Access
  /api/auth/signup         POST                 Register new farmer                     Public
  /api/auth/login          POST                 Authenticate farmer                     Public
  /api/farms               GET       Get all farms (search, sort, filter, pagination using SQL queries) Authenticated
/api/farms/:id             GET               Get single farm details                    Authenticated
/api/farms                 POST                   Add new farm record                   Authenticated
/api/farms/:id             PUT               Update existing farm details               Authenticated
/api/farms/:id             DELETE                Delete farm record                     Authenticated
/api/recommend             POST                AI crop recommendation                   Authenticated
7.  Database Design
    Main Tables:
●Users
○id, name, email, password
●Farms
○id, user_id, farm_name, location
●SoilData
○id, farm_id, ph, temperature, rainfall, recommended_crop

Relationships:
●One user → many farms
●One farm → one soil record

    
