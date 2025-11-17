
🌱 GreenRoot – Smart Agriculture Platform

A full-stack MERN + Prisma application that helps farmers monitor farms, track soil health, manage crop recommendations, and optimize agricultural productivity using AI.

📌 Features
🔐 Authentication System

Sign Up / Login using JWT

Access Token (15 min expiry)

Refresh Token (7 days, hashed with bcrypt)

Logout + Token rotation

Protected routes using middleware

🚜 Farm Management

Add/Create farms

Update and delete farm details

Pagination + search support

Each farm tied to a user

Clean Prisma models for relational farm → soil data

🌍 Soil Data Tracking

Add soil data (pH, temperature, rainfall, etc.)

View soil history for each farm

Helps drive AI-based crop recommendations

🤖 AI Crop Recommendation (Day 4)

Predict optimal crops based on soil parameters

Trained ML model (Python) integrated with Node.js

🎨 Frontend (React)

Login / Signup pages

Dashboard for farms

Add/Edit farm forms

Soil data entry & visualization

Modern UI with Tailwind CSS

🗄️ Database

MySQL using Prisma ORM

User, Farm, SoilData, RefreshToken models

Fully relational structure

🧩 Tech Stack
Backend

Node.js

Express.js

Prisma ORM

JWT + Crypto + bcrypt

MySQL

Postman (API testing)

Frontend

React.js

Axios

Tailwind CSS

React Router

