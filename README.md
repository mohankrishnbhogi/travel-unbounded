# Travel Unbounded

A full-stack travel website built for the Travel Unbounded Full Stack Web Developer assignment.

The website showcases travel destinations, provides information about the company, and allows users to submit travel enquiries through a booking form. Enquiries are validated and stored in Firebase Cloud Firestore, and the user receives a confirmation message after a successful submission.

## Features

* Responsive travel website
* Hero/banner section with call-to-action buttons
* India destination packages
* International destination packages
* About Us page
* Company story and office locations
* Why Choose Us section
* Travel enquiry / booking form
* Client-side form validation
* Server-side form validation
* Backend API for enquiry submission
* Firebase Cloud Firestore database integration
* Success and error feedback
* Responsive design for desktop, tablet, and mobile

## Pages

### Home

The Home page contains:

* Hero/banner section
* Travel call-to-action buttons
* India destinations
* International destinations
* Destination cards with descriptions and dummy pricing

### About

The About page contains:

* Travel Unbounded company story
* Office locations
* Why Choose Us section

### Contact / Plan Your Trip

The enquiry form contains:

* Full Name
* Country Code
* Contact Number
* Email
* Date of Travel
* Number of People
* Hotel Category
* Number of Children

The assignment requires the travel date to be in the future, the number of people to be at least 1, and appropriate validation for email and phone details.

## Destinations

Destination information is stored as static data because the assignment allows dummy/hardcoded destination and pricing information.

### India

* Kerala
* Himachal Pradesh
* Ladakh
* Andaman
* Goa

### International

* Kenya
* Vietnam
* Tanzania
* Iceland
* Sri Lanka

The destination data includes information such as name, country, image, description, price, and category.

## Tech Stack

* Next.js
* React
* TypeScript
* Firebase Cloud Firestore
* Firebase Admin SDK
* CSS
* Vercel for deployment

### Next.js Router

This project uses the **Next.js App Router**.

## Backend API

### POST `/api/enquiry`

The enquiry API performs the following steps:

1. Receives the booking form data.
2. Performs server-side validation.
3. Validates the travel date and number of people.
4. Saves the enquiry to Firebase Cloud Firestore.
5. Stores a `createdAt` timestamp.
6. Returns a success or error JSON response.

The assignment requires the `/api/enquiry` endpoint to validate the submitted data, save it to the database, and return a success or failure response.

## Database

This project uses **Firebase Cloud Firestore**.

The enquiry collection is:

```text
enquiries
```

Each enquiry stores:

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

The assignment requires the enquiry record to contain all form fields and a timestamp.

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
│   └── Footer.tsx
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
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd travel-unbounded
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a Firebase project and enable Cloud Firestore.

Create the required Firebase Admin SDK credentials for server-side access.

For local development, configure the required environment variables in `.env.local`.

Example:

```env
FIREBASE_PROJECT_ID=your_firebase_project_id
GOOGLE_APPLICATION_CREDENTIALS=C:/path/to/your/firebase-service-account.json
```

Do not commit `.env.local` or Firebase service-account credentials to GitHub.

### 4. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Environment Variables

The project uses environment variables for Firebase configuration.

Example `.env.example`:

```env
FIREBASE_PROJECT_ID=your_firebase_project_id
GOOGLE_APPLICATION_CREDENTIALS=path_to_service_account_json
```

For production deployment, Firebase credentials should be configured using the hosting provider's environment-variable settings rather than committing credentials to the repository.

## Validation and Form Behaviour

The booking form includes validation for:

* Required full name
* Valid contact number
* Valid email format
* Future travel date
* Minimum number of people
* Non-negative number of children

On successful submission, the application displays a confirmation message instead of using a browser `alert()`.

The assignment specifically requires proper success/error UI and validation on both the client and server.

## Deployment

The application is intended to be deployed on **Vercel**.

Before deployment:

1. Push the project to a public GitHub repository.
2. Import the repository into Vercel.
3. Configure the required Firebase environment variables in Vercel.
4. Deploy the application.
5. Test the enquiry form on the deployed website.
6. Verify that submissions are stored in Firestore.

The assignment requires the live application to work end-to-end, including saving the enquiry to the database and showing the confirmation message.

## Assumptions and Scope

* Destination and pricing information is dummy/static data as permitted by the assignment.
* No real travel inventory or live pricing system is implemented.
* Firebase Cloud Firestore was selected as the database because it is one of the database options permitted by the assignment.
* The main transactional feature is the travel enquiry form.
* Authentication and a full admin dashboard were not implemented because they are outside the core requirements.
* The optional `GET /api/enquiry` endpoint and admin page were not implemented.

The assignment states that destination/pricing data may be dummy data and that the core focus is the Home/About/Contact flow with a working form-to-database pipeline.

## Testing

The main application flow was tested locally:

```text
Home Page
   ↓
Contact / Plan Your Trip
   ↓
Booking Form
   ↓
POST /api/enquiry
   ↓
Server-side validation
   ↓
Firebase Firestore
   ↓
Success confirmation
```

Database persistence was verified by checking the submitted enquiry in Firestore.

## Submission

### GitHub Repository

```text
YOUR_GITHUB_REPOSITORY_URL
```

### Live Website

```text
YOUR_VERCEL_DEPLOYMENT_URL
```

## Author

Mohan Krishna
