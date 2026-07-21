# Complaint Management System

A full-stack web application designed to simplify the process of registering, tracking, and managing public complaints. The system enables users to submit complaints and monitor their status while providing administrators with tools to efficiently manage, update, and resolve complaints through a centralized dashboard.

##  Features

### User Features
- Secure User Registration & Login
- Register New Complaints
- Upload Supporting Documents/Images
- Track Complaint Status
- View Complaint History
- Responsive User Interface

### Admin Features
- Secure Admin Authentication
- View and Manage Complaints
- Update Complaint Status
- User Management
- Complaint Monitoring Dashboard
- Location-Based Complaint Tracking

##  Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Tools
- Git
- GitHub
- VS Code
- Postman

---

##  Project Structure

```
Complaint-Management-System/
│
├── db/
├── middleware/
├── public/
├── routes/
├── uploads/
├── .gitignore
├── .env.example
├── package.json
├── package-lock.json
├── seed.js
├── server.js
└── README.md
```

---

##  Installation

### 1. Clone the Repository

```bash
git clone https://github.com/lasyagudiboina/complaint-management.git
```

### 2. Navigate to the Project

```bash
cd complaint-management
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=5000

DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=complaint_management

JWT_SECRET=your_secret_key
```

> Make sure `.env` is included in `.gitignore`.

### 5. Run the Server

```bash
npm start
```

---


##  REST API Modules

- Authentication
- User Management
- Complaint Management
- Complaint Status Update
- File Upload
- Admin Dashboard

---

## Learning Outcomes

This project helped me gain practical experience in:

- Full Stack Web Development
- REST API Development
- Node.js & Express.js
- MySQL Database Design
- CRUD Operations
- Authentication & Authorization
- Middleware Implementation
- File Upload Handling
- Backend Routing
- Git & GitHub Version Control
- Responsive UI Development

---

##  Future Enhancements

- Email Notifications
- SMS Alerts
- Complaint Priority Levels
- Role-Based Access Control
- Mobile Responsive Improvements
- Admin Reports & Statistics

---

##  Author

**Lasya Gudiboina**

💻 GitHub: https://github.com/lasyagudiboina

---

## Contributing

Contributions, suggestions, and improvements are welcome. Feel free to fork the repository and submit a pull request.

---

## License

This project is developed for educational and portfolio purposes.

---

⭐ If you found this project useful, consider giving it a Star!