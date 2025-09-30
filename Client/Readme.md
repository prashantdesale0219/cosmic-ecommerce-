
# Serconst E-Commerce Frontend

This project is a React-based frontend implementation for Serconst (The Indian Garage Co.) e-commerce website, built according to the Product Requirements Document (PRD).

## Tech Stack

- **Framework**: React 18 (JavaScript)
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v6
- **State Management**: Context API + Reducer
- **Build Tool**: Vite

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   │   ├── home/        # Home page components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   ├── product/     # Product-related components
│   │   └── ui/          # UI components (buttons, loaders, etc.)
│   ├── context/         # React Context providers
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

Create a production build:

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Features

- **Responsive Design**: Mobile-first approach with responsive layouts for all devices
- **Performance Optimized**: Code splitting, lazy loading, and optimized assets
- **Accessibility**: WCAG AA compliant components
- **SEO Friendly**: Proper meta tags and structured data

## Color System

| Token | HEX | Usage |
|-------|-----|-------|
| primary-600 | #D22B2B | Buttons, links, sale badges |
| accent-500 | #FDBA21 | Promotions, rating stars |
| neutral-900 | #222222 | Headlines & body text |
| neutral-100 | #F9F9F9 | Backgrounds, card fills |
| success-500 | #14B37D | Toasts, inventory in-stock |
| danger-500 | #E11D48 | Errors, inventory out-of-stock |

## License

This project is proprietary and confidential.

## Contact

For any inquiries, please contact the development team.