GCU Campus Flow — Project Brain
This file is the persistent project context for AI/code editors working on GCU Campus Flow.
Read this file before modifying project code.
Rule: Do not assume a feature is implemented merely because it is planned below. Sections explicitly marked IMPLEMENTED, PLANNED, or NEXT are authoritative.

1. Project Identity
Project name: GCU Campus Flow
Project type: University academic event management platform
Institution context: Girijananda Chowdhury University (GCU), Assam
Primary goal: Build a centralized system for managing the complete academic-event lifecycle:
Event Creation
    ↓
Approval
    ↓
Publication
    ↓
Registration
    ↓
QR Attendance
    ↓
Event Completion
    ↓
Certificate
    ↓
Feedback
    ↓
Analytics
The source project synopsis describes separate interfaces for:

- Students
- Organizers / Faculty
- Administrators
Core functionality includes authentication, role-based access control, event creation and approval, event discovery, registration, QR attendance, certificates, participation history, feedback, notifications, analytics and reports.

1. Source-of-Truth Requirements
The original project synopsis defines the proposed system around:

- React.js frontend
- Node.js + Express.js backend
- MongoDB + Mongoose
- JWT authentication
- QR-code functionality
- PDF certificate generation
- REST APIs
- Student, Organizer and Admin dashboards
Planned MongoDB collections:
Users
Departments
Events
Venues
Registrations
Attendance
Certificates
Feedback
Notifications
EventResources
Planned API groups:
/api/auth
/api/users
/api/departments
/api/venues
/api/events
/api/registrations
/api/attendance
/api/certificates
/api/feedback
/api/notifications
/api/analytics

1. Architecture
Current intended architecture:
┌───────────────────────────────┐
│       React Frontend          │
│                               │
│ Student / Organizer / Admin   │
└───────────────┬───────────────┘
                │
              Axios
                │
                ▼
┌───────────────────────────────┐
│       REST API                │
│       Node.js + Express       │
└───────────────┬───────────────┘
                │
             Mongoose
                │
                ▼
┌───────────────────────────────┐
│          MongoDB              │
└───────────────────────────────┘
Authentication:
Login
  ↓
bcrypt password verification
  ↓
JWT generated
  ↓
Client sends:
Authorization: Bearer <JWT>
  ↓
protect middleware
  ↓
req.user
  ↓
role middleware
  ↓
RBAC
2. User Roles
There are exactly three application roles:
student
organizer
admin
Student
Expected capabilities:

- Register/login
- Discover events
- Search/filter events
- Register for events
- View registration status
- View event QR code
- View attendance
- View participation history
- Download certificates
- Verify certificates
- Submit feedback
- Receive notifications
Organizer
Expected capabilities:
- Login
- Create events
- Edit/manage events
- Submit events for approval
- View participants
- Scan/verify QR attendance
- Manage attendance
- Generate certificates
- View reports
Admin
Expected capabilities:
- Login
- Manage users
- Manage departments
- Manage venues
- Review/approve events
- Manage event status
- View analytics
- View reports
- Manage platform settings

1. RBAC Security Rules
Public registration MUST NOT allow a client to select:
"role": "admin"
or:
"role": "organizer"
Public registration always creates:
role = student
Privileged roles must be assigned through controlled/admin workflows.
Authorization pattern:
protect,
authorize("admin"),
controller
Multiple roles:
protect,
authorize("organizer", "admin"),
controller
Do not bypass middleware merely because an endpoint is currently used by the frontend.
2. Current Backend Structure
Current backend structure:
backend/
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── departmentController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── roleMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Department.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── departmentRoutes.js
│   │
│   ├── scripts/
│   │   └── createAdmin.js
│   │
│   ├── services/
│   ├── utils/
│   │
│   └── server.js
│
├── .env
├── package.json
└── package-lock.json
There is also a planned frontend:
frontend/
Do not invent frontend implementation status until the actual files are inspected.
3. Environment
Backend development currently runs on:
<http://localhost:5000>
Expected server output:
GCU Campus Flow server running on port 5000
MongoDB connected: 127.0.0.1
Current database development connection is working.
Environment variables expected:
PORT=5000
MONGO_URI=<MongoDB connection string>
JWT_SECRET=<strong secret>
NODE_ENV=development
Never commit .env.
4. Backend Dependencies
Current backend package setup includes:
express
mongoose
dotenv
cors
bcryptjs
jsonwebtoken
cookie-parser
nodemon
Do not add dependencies unnecessarily.
Before installing a package, check whether the existing dependency set already solves the problem.
5. Server Entry Point
File:
backend/src/server.js
Current responsibilities:
6. Load environment variables
7. Connect to MongoDB
8. Create Express app
9. Enable CORS
10. Enable JSON parsing
11. Register API routes
12. Start server
Current route mounting includes:
app.use("/api/auth", authRoutes);
app.use("/api/departments", departmentRoutes);
Root health endpoint:
GET /
Expected response:
{
  "success": true,
  "message": "GCU Campus Flow API is running"
}
13. User Model — IMPLEMENTED
File:
backend/src/models/User.js
The User model includes the following concepts:
name
email
password
role
studentId
employeeId
department
phone
profileImage
isActive
timestamps
Role enum:
student
organizer
admin
Important:

- Email is unique.
- Email is normalized to lowercase.
- Password is stored hashed.
- Role defaults to student.
- isActive is used for account activation/deactivation.
Never store plaintext passwords.

1. Authentication — IMPLEMENTED
Registration
Endpoint:
POST /api/auth/register
Public registration creates a student.
Example:
{
  "name": "Test Student",
  "email": "<student@gcu.ac.in>",
  "password": "Student@123",
  "studentId": "GCU2026001",
  "phone": "9876543210"
}
The backend sets:
role = student
Do not trust a client-supplied role.
Login
Endpoint:
POST /api/auth/login
Example:
{
  "email": "<student@gcu.ac.in>",
  "password": "Student@123"
}
Admin example:
{
  "email": "<admin@gcu.ac.in>",
  "password": "Admin@12345"
}
Successful login returns:
success
message
token
user
JWT contains:
userId
role
Token lifetime currently:
7 days
2. Auth Middleware — IMPLEMENTED
File:
backend/src/middleware/authMiddleware.js
The protect middleware:
3. Reads Bearer token
4. Verifies JWT
5. Identifies user
6. Loads user information
7. Places user on req.user
8. Rejects missing/invalid authentication
Protected routes should use:
protect
before their controller.
9. Role Middleware — IMPLEMENTED
File:
backend/src/middleware/roleMiddleware.js
Main function:
authorize(...allowedRoles)
Example:
authorize("admin")
or:
authorize("organizer", "admin")
Unauthorized role should return:
403 Forbidden
with a response similar to:
{
  "success": false,
  "message": "Access denied. You do not have permission to access this resource."
}
10. Development Admin — IMPLEMENTED
Seed script:
backend/src/scripts/createAdmin.js
Package command:
npm run create-admin
Current local development admin:
Email: <admin@gcu.ac.in>
Password: Admin@12345
Role: admin
IMPORTANT:
These are LOCAL DEVELOPMENT credentials only.
Do not use these credentials in production.
The password is hashed with bcrypt before being saved.
The seed script checks whether the admin already exists before creating another one.
11. Department Model — IMPLEMENTED
File:
backend/src/models/Department.js
Fields:
name
code
description
head
isActive
timestamps
head references:
User
Example:
{
  "name": "Computer Applications",
  "code": "BCA",
  "description": "Department of Computer Applications",
  "head": null,
  "isActive": true
}
Department code is normalized to uppercase.
12. Department Controller — IMPLEMENTED
File:
backend/src/controllers/departmentController.js
Implemented operations:
createDepartment
getDepartments
Create
POST /api/departments
Access:
Admin only
Required:
name
code
Duplicate department names are rejected.
Duplicate department codes are rejected.
Expected duplicate response:
409 Conflict
Get
GET /api/departments
Access:
Authenticated user
Departments are sorted by name.
Department head is populated with:
name
email
role
13. Department Routes — IMPLEMENTED
File:
backend/src/routes/departmentRoutes.js
Current routes:
GET  /api/departments
POST /api/departments
Security:
GET
protect

POST
protect
authorize("admin")
18. Postman Testing
Postman is being used for backend API testing.
Important test sequence:
Student registration
POST /api/auth/register
Expected:
201 Created
and:
role = student
Student login
POST /api/auth/login
Expected:
200 OK
with JWT.
Student role test
GET /api/auth/test-student
Student JWT:
200 OK
Student attempting admin route
GET /api/auth/test-admin
Student JWT:
403 Forbidden
Admin login
POST /api/auth/login
using local admin credentials.
Expected:
200 OK
role = admin
Admin role test
GET /api/auth/test-admin
Admin JWT:
200 OK
Create department
POST /api/departments
Admin JWT:
201 Created
Student creating department
POST /api/departments
Student JWT:
403 Forbidden
Get departments
GET /api/departments
Authenticated JWT:
200 OK
19. Database
Current development MongoDB database:
GCU-Campus-Flow
Existing/expected collections will be created as models are used.
Currently relevant:
users
departments
MongoDB Compass is used for visual inspection.
Do not manually create every collection unless there is a specific reason. Mongoose can create collections when documents are first inserted.
20. Planned Models — NOT YET IMPLEMENTED
These are planned and must not be described as complete:
Event
Fields planned:
title
description
category
organizer
department
venue
date
startTime
endTime
registrationDeadline
maxParticipants
banner
status
rules
resources
rejectionReason
timestamps
Statuses planned:
DRAFT
PENDING_APPROVAL
APPROVED
REJECTED
PUBLISHED
ONGOING
COMPLETED
CANCELLED
Venue
Planned fields:
name
building
room
capacity
description
facilities
isActive
timestamps
Registration
Planned fields:
event
student
registrationDate
status
qrToken
qrGeneratedAt
timestamps
Important database rule:
One student cannot register twice for the same event.
Attendance
Planned fields:
event
registration
student
scannedAt
scannedBy
status
createdAt
One attendance record per registration.
Certificate
Planned fields:
certificateId
event
student
attendance
certificateType
issueDate
pdfUrl
verificationToken
status
createdAt
Feedback
Planned fields:
event
student
rating
organizationRating
speakerRating
venueRating
comment
timestamps
One feedback submission per student/event.
Notification
Planned fields:
recipient
type
title
message
relatedEvent
isRead
createdAt
EventResource
Planned fields:
event
title
description
type
url
uploadedBy
createdAt
21. Planned API Groups — NOT YET COMPLETE
/api/auth
/api/users
/api/departments
/api/venues
/api/events
/api/registrations
/api/attendance
/api/certificates
/api/feedback
/api/notifications
/api/analytics
Only use an endpoint after confirming it exists in the codebase.
22. Planned Event Workflow
Event lifecycle:
Organizer creates DRAFT
        ↓
Organizer submits
        ↓
PENDING_APPROVAL
        ↓
Admin reviews
        ↓
APPROVED / REJECTED
        ↓
Approved event published
        ↓
Students discover event
        ↓
Student registers
        ↓
Registration QR generated
        ↓
Student attends
        ↓
Organizer scans QR
        ↓
Attendance verified
        ↓
Event completed
        ↓
Certificate eligibility checked
        ↓
Certificate generated
        ↓
Student downloads certificate
        ↓
Student submits feedback
        ↓
Analytics/reports
23. Business Rules
Event

- New events start as DRAFT.
- Submission moves event to PENDING_APPROVAL.
- Admin approval is required before publication.
- Rejected events should store a rejection reason.
- Event status transitions must be controlled.
Registration
Reject registration when:
- Registration deadline has passed
- Event capacity is full
- Student already registered
- Event is not open for registration
Attendance
Require:
- Valid registration
- Correct event
- Valid QR
- No previous attendance record
Prevent duplicate attendance.
Certificate
Require:
- Event completion
- Verified attendance
- Eligibility
Certificate should have a unique certificate ID and verification mechanism.
Feedback
Only students who attended should be allowed to submit feedback.

1. Planned Frontend Routes
Public
/login
/register
/verify-certificate/:certificateId
Student
/student/dashboard
/student/events
/student/events/:id
/student/registrations
/student/attendance
/student/certificates
/student/history
/student/notifications
/student/profile
Organizer
/organizer/dashboard
/organizer/events
/organizer/events/create
/organizer/events/:id
/organizer/events/:id/edit
/organizer/events/:id/participants
/organizer/events/:id/attendance
/organizer/events/:id/certificates
/organizer/reports
Admin
/admin/dashboard
/admin/users
/admin/events
/admin/events/pending
/admin/departments
/admin/venues
/admin/analytics
/admin/reports
/admin/settings
These are planned routes unless the actual frontend contains them.
2. Frontend Planned Stack
The project synopsis proposes/mentions:
React
Tailwind CSS
shadcn/ui
React Router
Axios
React Hook Form
Recharts
Lucide
Potential supporting libraries:
Zod
TanStack Query
Zustand
TanStack Table
date-fns
React Flow
Sonner
Do not install every library automatically. Add libraries only when the feature actually needs them.
3. Frontend State Rule
Use Zustand only for genuine client-side state such as:
selected node
active investigation/event
UI preferences
sidebar state
filters
selected transaction/item
Do not use Zustand as the primary store for API responses.
Server/API state should be handled through the appropriate data-fetching approach.
4. Security Rules
Always follow these rules:
5. Never store plaintext passwords.
6. Never commit .env.
7. Never expose JWT_SECRET.
8. Never allow public users to self-register as admin.
9. Never trust role information supplied by the frontend.
10. Validate request bodies.
11. Validate MongoDB IDs where appropriate.
12. Use authentication middleware for protected endpoints.
13. Use role middleware for privileged endpoints.
14. Avoid returning sensitive fields.
15. Do not expose password hashes in API responses.
16. Keep production secrets separate from local development values.
17. Prevent duplicate registrations and attendance at the database/business-logic level.
18. Do not disable authentication merely to make frontend development easier.
19. Coding Conventions
Use CommonJS because the current backend uses:
require(...)
module.exports = ...
Use clear names:
authController.js
departmentController.js
eventController.js
departmentRoutes.js
eventRoutes.js
Controllers should:

- Validate input
- Perform business operation
- Return consistent JSON
- Catch errors
- Log useful server-side errors
Response pattern:
{
  "success": true,
  "message": "Operation successful"
}
Error pattern:
{
  "success": false,
  "message": "Useful error message"
}
Use appropriate HTTP status codes:
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
500 Internal Server Error

1. Error Handling
When debugging:
1. Read the exact terminal error.
1. Identify the file and line.
1. Check relative import paths.
1. Check whether the file exists.
1. Check whether the route is mounted.
1. Check whether middleware is returning the request early.
1. Check MongoDB connection.
1. Check request URL/method/body/token in Postman.
1. Only then change code.
Do not randomly rewrite multiple files.
1. Known Setup Issues Already Resolved
package.json JSON error
There was previously an invalid package.json.
It was fixed.
Current scripts:
{
  "dev": "nodemon src/server.js",
  "start": "node src/server.js",
  "create-admin": "node src/scripts/createAdmin.js"
}
Admin seed path issue
createAdmin.js is located at:
backend/src/scripts/createAdmin.js
Therefore package.json uses:
node src/scripts/createAdmin.js
User model import issue
Inside:
backend/src/scripts/createAdmin.js
the correct User import is:
const User = require("../models/User");
NOT:
const User = require("../src/models/User");
The latter incorrectly resolves toward:
backend/src/src/models/User
MongoDB
MongoDB connection is currently working.
Observed development output:
MongoDB connected: 127.0.0.1
1. Current Project Status
IMPLEMENTED
[✓] Project root
[✓] Backend
[✓] Express server
[✓] Environment configuration
[✓] MongoDB connection
[✓] User model
[✓] Student registration
[✓] Password hashing
[✓] Login
[✓] JWT generation
[✓] Authentication middleware
[✓] Role middleware
[✓] Student/Admin RBAC testing
[✓] Secure public role assignment
[✓] Development admin seed
[✓] Department model
[✓] Department controller
[✓] Department routes
[✓] Department route mounting
[✓] Venue module
PARTIALLY TESTED / CURRENT CHECKPOINT
[ ] Complete Department Postman test sequence
[ ] Verify departments collection in MongoDB
[ ] Complete Venue module Postman test sequence
[✓] Event model
[✓] Event controller (basics)
[✓] Event routes
NOT YET IMPLEMENTED
[ ] Complete Event module Postman test sequence
[ ] Organizer creation/management workflow
[✓] Event approval workflow
[✓] Event publication
[✓] Event discovery (via getEvents)
[✓] Event approval workflow
[✓] Event publication
[✓] Event discovery (via getEvents)
[✓] Registration module
[✓] Capacity/deadline validation
[✓] QR generation
NOT YET IMPLEMENTED
[ ] Complete Event module Postman test sequence
[ ] Organizer creation/management workflow
[✓] QR attendance
[✓] Attendance module
NOT YET IMPLEMENTED
[ ] Complete Event module Postman test sequence
[ ] Organizer creation/management workflow
[✓] Certificate generation
[✓] Certificate verification
[✓] Feedback
[✓] Notifications
[✓] Analytics
[✓] Reports
NOT YET IMPLEMENTED
[ ] Complete Event module Postman test sequence
[ ] Organizer creation/management workflow
[✓] Frontend dashboards (Auth & Routing setup complete)
[✓] Student frontend (Dashboard overview done)
[ ] Organizer frontend
[ ] Admin frontend
[ ] Deployment
1. NEXT TASK
Postman tests for Event lifecycle (Create -> Submit -> Approve -> Publish).

Then:
STEP 24 — Frontend Integration
(This marks the completion of the core Backend API).
STEP 25 — Testing
STEP 26 — Deployment

1. AI Coding Agent Instructions
When an AI coding agent reads this file:
Before changing code
1. Inspect the existing file.
1. Confirm whether the feature is marked IMPLEMENTED or PLANNED.
1. Preserve the existing architecture.
1. Reuse existing middleware/models/utilities.
1. Do not duplicate functionality.
1. Do not change working authentication without a clear reason.
1. Do not silently rename the project.
1. Keep the project name exactly:
GCU Campus Flow

When implementing a new feature
Follow:
Model
  ↓
Controller
  ↓
Route
  ↓
Middleware
  ↓
Server route registration
  ↓
Postman/API test
  ↓
MongoDB verification
  ↓
Frontend integration
Before declaring success
Verify:
Server starts
MongoDB connects
API route responds
Authentication works
Authorization works
Database document is correct
Error cases are handled
Never

- Invent an endpoint that doesn't exist.
- Claim a feature is implemented when it is only planned.
- Remove RBAC for convenience.
- Store passwords in plaintext.
- Put secrets in source code.
- Replace the existing stack without instruction.
- Rewrite unrelated files.
- Delete existing working functionality.

 1. Quick Commands
From:
backend/
Start development server:
npm run dev
Start production-style server:
npm start
Create development admin:
npm run create-admin
Check current directory:
Get-Location
Find files:
Get-ChildItem -Recurse -File
 2. Quick API Reference
GET  /
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
GET  /api/auth/test-student
GET  /api/auth/test-organizer
GET  /api/auth/test-admin
Departments:
GET  /api/departments
POST /api/departments
Planned:
/api/venues
/api/events
/api/registrations
/api/attendance
/api/certificates
/api/feedback
/api/notifications
/api/analytics
 3. Project Principle
Build GCU Campus Flow incrementally.
The preferred development pattern is:
small feature
    ↓
write model
    ↓
write controller
    ↓
write route
    ↓
protect route
    ↓
test in Postman
    ↓
verify MongoDB
    ↓
move to next feature
Do not build the entire application in one uncontrolled change.
The backend should remain testable at every stage.
