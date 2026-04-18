
# Pharmacy Billing System

A full-stack web application for managing pharmacy inventory and tracking medicine expiry dates.

Built with Spring Boot (backend), React (frontend), and Oracle Database.

## About

This project was developed as a final year project for the B.Tech Computer Science program at KIIT University.

The goal was to build a production-style full-stack web application following industry standard practices including a layered backend architecture, RESTful API design, ORM-based database management, and a component-based frontend.

The application solves a real-world problem faced by small and mid-sized pharmacies — managing medicine stock manually leads to expired medicines being sold or going unnoticed until it is too late. This system provides a centralized interface to track inventory and get proactive alerts on medicines that are expired or approaching their expiry date.

## What Was Achieved

- Designed and implemented a RESTful API using Spring Boot with a clean separation of controller, service, repository, and entity layers
- Integrated Oracle XE as the relational database with Hibernate handling all ORM and schema generation automatically
- Built a dynamic React frontend with client-side routing, state management using hooks, and live API integration via Axios
- Implemented expiry status classification logic that categorizes every medicine as Expired, Expiring Soon, or Valid based on the current date
- Delivered a functional end-to-end application from database to UI with a one-click startup script for easy demonstration

## Features

- Medicine inventory management (Add, Edit, Delete, View)
- Expiry tracking with status indicators (Expired, Expiring Soon, Valid)
- Dashboard with summary and expiry alerts

## Tech Stack

- Backend: Spring Boot 3.x, Spring Data JPA, Hibernate
- Frontend: React 18, Vite, Axios, React Router
- Database: Oracle XE

## Prerequisites

- Java 17 or above
- Maven
- Oracle Database XE with listener running
- Node.js and npm

## Getting Started

### Windows (Quick Start)

Double click `start.bat` in the root of the project. It will start the Oracle listener, backend, and frontend automatically, then open the browser.

### Manual Setup (Windows / Linux)

**Step 1 - Start Oracle Listener**

Windows:
```
lsnrctl start
```

Linux:
```
sudo systemctl start oracle-xe
```

**Step 2 - Configure Database**

Open `backend/src/main/resources/application.properties` and update:
```
spring.datasource.url=jdbc:oracle:thin:@localhost:1521:xe
spring.datasource.username=your_username
spring.datasource.password=your_password
```

**Step 3 - Start Backend**
```
cd backend
mvn spring-boot:run
```

**Step 4 - Start Frontend**

Open a new terminal:
```
cd frontend
npm install
npm run dev
```

**Step 5 - Open Browser**

Navigate to `http://localhost:5173`

## Project Structure

```
pharmacy-billing-system/
├── start.bat                  - Windows one-click startup script
├── backend/                   - Spring Boot application
│   ├── pom.xml
│   └── src/main/java/com/pharmacy/
│       ├── entity/
│       ├── repository/
│       ├── service/
│       ├── controller/
│       └── exception/
└── frontend/                  - React application
    └── src/
        ├── components/
        ├── pages/
        └── services/
```

## Notes

- The Oracle listener must be running before starting the backend.
- The backend runs on port 8080 and the frontend runs on port 5173.
- On first run, Hibernate will automatically create the required database tables.
```
