# Aditi Hospital Website

A production-quality hospital/clinic website MVP built with React, TypeScript, and Vite. Designed for client acquisition purposes with a focus on trust, professionalism, and patient-first experience.

## Features

- Sticky navigation with mobile-responsive menu
- Hero section with compelling CTAs
- Trust statistics with count-up animations
- Why Choose Us section with feature cards
- Services showcase with 8 healthcare services
- Doctor profiles with detailed modals
- Facilities gallery with image modals
- Patient journey timeline
- Callback request form with validation and Supabase integration
- Patient testimonials with ratings
- FAQ accordion section
- Final conversion CTA section
- Contact section with embedded Google Map
- Premium footer with social links

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Supabase** for form submissions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The development server will start automatically.

### Build

```bash
npm run build
```

### Type Check

```bash
npm run typecheck
```

## Project Structure

```
src/
├── components/
│   ├── sections/       # Page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Services.tsx
│   │   ├── Doctors.tsx
│   │   ├── Facilities.tsx
│   │   ├── PatientJourney.tsx
│   │   ├── CallbackForm.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/             # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Section.tsx
├── data/
│   └── hospitalData.ts # Centralized content configuration
├── hooks/
│   └── useAnimation.ts # Custom animation hooks
├── types/
│   └── index.ts        # TypeScript type definitions
├── App.tsx
├── main.tsx
└── index.css
```

## Content Management

All hospital content is centralized in `src/data/hospitalData.ts`. To update:

- Hospital information (name, address, contact)
- Navigation links
- Trust statistics
- Why Choose Us features
- Services
- Doctors
- Facilities
- Patient testimonials
- FAQs
- Social media links

Simply edit the values in `hospitalData.ts` without modifying UI components.

## Deployment

The project is ready for deployment on Netlify:

1. Run `npm run build`
2. Deploy the `dist` folder to Netlify

Or connect your Git repository to Netlify for automatic deployments.

## Color System

- **Background:** #FAFAFA
- **Primary CTA:** #0F4C81 (Professional Blue)
- **Secondary CTA:** #2A7F62 (Trust Green)
- **Headings:** #1F2937
- **Body Text:** #374151
- **Muted Text:** #6B7280
- **Borders:** #E5E7EB

## Browser Support

The website supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved. This is a proprietary project for Aditi Hospital.
