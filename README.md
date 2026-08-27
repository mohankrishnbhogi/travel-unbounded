# Travel Unbounded

Travel Unbounded is a full-stack travel website developed as part of the Travel Unbounded Full Stack Web Developer Assignment.

The website showcases travel destinations, provides information about the company, and allows users to submit travel enquiries through a booking form. The enquiry data is validated, sent to a backend API, stored in Firebase Cloud Firestore, and a confirmation message is displayed to the user after successful submission.

## Live Project

### GitHub Repository

https://github.com/mohankrishnabhogi/travel-unbounded

### Live Website

https://travel-unbounded-blond.vercel.app

## Features

* Responsive travel website
* Hero/banner section
* Travel call-to-action buttons
* India destination packages
* International destination packages
* About Us page
* Company story
* Office locations
* Why Choose Us section
* Travel enquiry / booking form
* Client-side validation
* Server-side validation
* Backend API for enquiry submission
* Firebase Cloud Firestore integration
* Loading, success, and error feedback
* Responsive design for desktop, tablet, and mobile

## Pages

### Home Page

The Home page contains:

* Hero/banner section
* Travel Unbounded introduction
* Plan Your Trip call-to-action
* India destination cards
* International destination cards
* Destination descriptions
* Dummy starting prices

### About Page

The About page contains:

* Company story
* Bengaluru headquarters
* Kerala office
* Nairobi office
* Why Choose Us section

### Contact / Plan Your Trip Page

The Contact page contains a travel enquiry form with:

* Full Name
* Country Code
* Contact Number
* Email
* Date of Travel
* Number of People
* Hotel Category
* Number of Children

## Destinations

### India Destinations

* Kerala
* Himachal Pradesh
* Ladakh
* Andaman
* Goa

### International Destinations

* Kenya
* Vietnam
* Tanzania
* Iceland
* Sri Lanka

Destination and pricing information is stored as static/dummy data as permitted by the assignment.

## Tech Stack

* Next.js
* React
* TypeScript
* Firebase Cloud Firestore
* Firebase Admin SDK
* CSS
* Vercel

## Next.js Configuration

### Router

This project uses the **Next.js App Router**.

## Backend API

### POST `/api/enquiry`

The backend enquiry API performs the following operations:

1. Receives the enquiry form data.
2. Performs server-side validation.
3. Validates required fields.
4. Validates the email format.
5. Validates the travel date.
6. Validates the number of travellers.
7. Saves the enquiry to Firebase Cloud Firestore.
8. Stores a `createdAt` timestamp.
9. Returns a JSON success or error response.

The assignment requires the `/api/enquiry` endpoint to accept the booking form payload, validate it on the server, store it in the database, and return a success/failure JSON response.

## Database

This project uses **Firebase Cloud Firestore**.

### Collection

```text
enquiries
```

### Enquiry Fields

```text
fullName
phone
email
travelDate
numberOfPeople
hotelCategory
numberOfChildren
createdAt
```

The assignment requires the enquiry record to store all form fields together with a timestamp.

## Project Structure

```text
travel-unbounded/
│
├── app/
│   ├── about/
│   ├── api/
│   │   └── enquiry/
│   │       └── route.ts
│   ├── contact/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── BookingForm.tsx
│   ├── DestinationCard.tsx
│   ├── Footer.tsx
│   └── Navbar.tsx
│
├── data/
│   └── destinations.js
│
├── lib/
│   └── firebase.ts
│
├── public/
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

* Node.js
* npm
* Firebase project with Cloud Firestore enabled

### 1. Clone the repository

```bash
git clone https://github.com/mohankrishnabhogi/travel-unbounded.git
cd travel-unbounded
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a Firebase project and enable Cloud Firestore.

Create the required Firebase Admin SDK service-account credentials for server-side Firestore access.

Create a `.env.local` file for local development and configure the required Firebase environment variables.

Example:

```env
FIREBASE_PROJECT_ID=your_firebase_project_id
GOOGLE_APPLICATION_CREDENTIALS=C:/path/to/your/firebase-service-account.json
```

The Firebase service-account credentials are private and must not be committed to GitHub.

### 4. Run the development server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## Environment Variables

The application uses server-side environment variables for Firebase configuration.

Example:

```env
FIREBASE_PROJECT_ID=your_firebase_project_id
GOOGLE_APPLICATION_CREDENTIALS=path_to_service_account_json
```

For production deployment, Firebase service-account credentials are configured through Vercel environment variables.

Sensitive credentials are not stored in the GitHub repository.

The assignment requires database credentials and API keys to be kept out of GitHub and recommends using `.env.local` for local secrets.

## Form Validation

The enquiry form validates:

* Full name is required
* Contact number is required
* Email must have a valid format
* Travel date must be a future date
* Number of people must be at least 1
* Number of children cannot be negative

The backend performs server-side validation as well.

## Form Behaviour

When the user submits the enquiry form:

```text
Booking Form
      ↓
Client-side validation
      ↓
POST /api/enquiry
      ↓
Server-side validation
      ↓
Firebase Cloud Firestore
      ↓
Success response
      ↓
Confirmation message
```

On successful submission, the application displays:

> Thank you! Our travel expert will contact you within 24 hours.

On failure, a clear error message is displayed.

The assignment requires proper success/error UI and specifically states not to use a browser `alert()` for the success message.

## Deployment

The application is deployed using **Vercel**.

### Live Website

https://travel-unbounded-blond.vercel.app

The production application uses Firebase Cloud Firestore for enquiry storage.

The deployed enquiry form was tested by submitting an enquiry through the live website and verifying the saved data in Firestore.

The assignment requires the live application to work end-to-end, including saving the submitted enquiry to the database and showing a confirmation message.

## Assumptions and Scope

* Destination information and pricing are static/dummy data as permitted by the assignment.
* No real travel inventory system is implemented.
* No real-time pricing system is implemented.
* Firebase Cloud Firestore was selected as the database.
* The enquiry form is the main transactional feature.
* Authentication was not implemented because it is outside the core assignment requirements.
* A full admin dashboard was not implemented because it is optional.
* The optional `GET /api/enquiry` endpoint was not implemented.

The assignment states that dummy destination and pricing data is acceptable and that the main focus is the Home, About, and Contact flow with a working form-to-database pipeline.

## Testing

The following end-to-end flow was tested:

```text
Home Page
    ↓
About Page
    ↓
Contact / Plan Your Trip
    ↓
Booking Form
    ↓
POST /api/enquiry
    ↓
Server-side Validation
    ↓
Firebase Cloud Firestore
    ↓
Success Confirmation
```

The enquiry submission was verified in Firebase Cloud Firestore.

Responsive behaviour was also checked for desktop, tablet, and mobile layouts.

## Security

* Firebase credentials are stored using environment variables.
* `.env.local` is excluded from GitHub.
* Firebase service-account credentials are not included in the source repository.
* Production Firebase credentials are configured through Vercel environment variables.

## Future Improvements

Possible future improvements include:

* Admin dashboard for viewing enquiries
* Authentication for administrators
* Individual destination detail pages
* Real travel package and pricing management
* Email notifications for new enquiries
* Search and filtering for destinations

These features are outside the core requirements of the current assignment.

## Submission

### GitHub Repository

[Travel Unbounded GitHub Repository](https://github.com/mohankrishnabhogi/travel-unbounded)

### Live Website

[Travel Unbounded Live Website](https://travel-unbounded-blond.vercel.app)

## Author

Mohan Krishna
