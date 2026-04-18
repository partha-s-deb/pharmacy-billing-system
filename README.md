Here's your README:

```markdown
# Pharmacy Billing System

A full-stack web application for managing pharmacy inventory and tracking medicine expiry dates.

Built with Spring Boot (backend), React (frontend), and Oracle Database.

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
