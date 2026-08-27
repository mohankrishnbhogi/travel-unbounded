# Travel Unbounded

Travel Unbounded is a full-stack travel website built using Next.js. The website showcases travel destinations, provides company information, and allows users to submit travel enquiries through a booking form.

Submitted enquiries are validated and stored in Firebase Cloud Firestore, and users receive a confirmation message after successful submission.

## Features

- Responsive travel website
- Hero/banner section
- India destination packages
- International destination packages
- About Us page
- Company story and office locations
- Why Choose Us section
- Travel enquiry form
- Client-side validation
- Server-side validation
- Backend API for enquiry submission
- Firebase Cloud Firestore integration
- Success and error messages
- Responsive design for desktop, tablet, and mobile

## Pages

### Home

The Home page includes:

- Hero/banner section
- Call-to-action buttons
- India destinations
- International destinations
- Destination cards
- Destination descriptions
- Dummy starting prices

### About

The About page includes:

- Company story
- Office locations
- Why Choose Us section

### Contact / Plan Your Trip

The enquiry form includes:

- Full Name
- Country Code
- Contact Number
- Email
- Date of Travel
- Number of People
- Hotel Category
- Number of Children

## Destinations

### India

- Kerala
- Himachal Pradesh
- Ladakh
- Andaman
- Goa

### International

- Kenya
- Vietnam
- Tanzania
- Iceland
- Sri Lanka

Destination and pricing information is static/dummy data as permitted by the assignment.

## Tech Stack

- Next.js
- React
- TypeScript
- Firebase Cloud Firestore
- Firebase Admin SDK
- CSS
- Vercel

### Next.js Router

This project uses the Next.js App Router.

## Backend API

### POST /api/enquiry

The enquiry API performs the following operations:

1. Receives enquiry form data.
2. Performs server-side validation.
3. Validates the travel date.
4. Validates the number of people.
5. Stores the enquiry in Firebase Cloud Firestore.
6. Stores a createdAt timestamp.
7. Returns a JSON success or error response.

## Database

This project uses Firebase Cloud Firestore.

### Collection

```text
enquiries