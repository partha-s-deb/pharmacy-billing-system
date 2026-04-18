# Pharmacy Billing System

Full-stack web application for pharmacy inventory and expiry tracking.

## Tech Stack
- **Backend**: Spring Boot 3.x, Spring Data JPA, MySQL
- **Frontend**: React 18, Vite, Axios, React Router

## Project Structure
```
pharmacy-billing-system/
├── backend/     → Spring Boot application
└── frontend/    → React application
```

## Getting Started

### Backend
1. Create MySQL database: `CREATE DATABASE pharmacy_db;`
2. Update `backend/src/main/resources/application.properties` with your DB credentials
3. Run: `cd backend && mvn spring-boot:run`

### Frontend
1. `cd frontend && npm install`
2. `npm run dev` → runs on http://localhost:5173
