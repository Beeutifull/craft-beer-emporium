# Craft Beer Emporium

## Project Overview

Craft Beer Emporium is a single-page application (SPA) built to showcase a catalog of craft beers. Users can filter and sort beers by different attributes such as name, style, ABV, and price. The application also features a management view for displaying top-selling beers and allows owners to add new beers to the inventory.

### Features
- **Beer Listing**: Displays a grid of beers with options to filter by name, style, ABV, and price.
- **Beer Details**: View detailed information for each beer and purchase with a "Buy" button.
- **Management View**: Displays top-selling beers using charts and allows admins to add new beers to the inventory.
- **Search & Filter**: Real-time filtering and debounced search for improved UX.
- **Sorting**: Sort beers based on multiple criteria.
  
## Tech Stack

- **React.js**: Frontend library for building UI components.
- **Zustand**: Lightweight state management library for managing global app state.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **React Testing Library**: Used for testing the components.
- **Gulp/Webpack**: For bundling and building the app.
- **Node.js**: Used for running the server.
  
## API

The app uses the following API to fetch beer data:
- **[Sample Beers API](https://api.sampleapis.com/beers/ale)**: Provides data for a collection of beers.

## Project Structure

```bash
.
├── src
│   ├── api
│   │   └── beerService.ts        # API service for fetching beer data
│   ├── components
│   │   ├── BeerCard.tsx          # Component for displaying individual beer
│   │   ├── BeerFilter.tsx        # Component for filtering beers
│   │   ├── BeerGrid.tsx          # Component for displaying a grid of beers
│   │   ├── Header.tsx            # Header component
│   │   └── PurchaseModal.tsx     # Modal for beer purchase confirmation
│   ├── hooks
│   │   └── useDebounce.ts        # Custom hook for debouncing search input
│   ├── pages
│   │   ├── BeerDetails.tsx       # Beer details page
│   │   ├── LandingPage.tsx       # Main landing page with beer grid and filters
│   │   ├── Management.tsx        # Management view for admin functionalities
│   │   └── Purchases.tsx         # Purchases page
│   ├── store
│   │   └── beerStore.ts          # Zustand store for managing app state
│   ├── App.tsx                   # Main app component and routing
│   └── index.tsx                 # Entry point for the application
├── package.json                  # Project dependencies and scripts
├── README.md                     # Project documentation
├── tailwind.config.js            # Tailwind CSS configuration
└── webpack.config.js             # Webpack configuration
Setup Instructions
Prerequisites
Ensure you have the following installed on your system:

Node.js (version 14.x or higher)
npm or yarn (for managing dependencies)
Installation
Clone the repository:

bash

git clone https://github.com/your-repo/craft-beer-emporium.git
cd craft-beer-emporium
Install dependencies:

bash

npm install
# or
yarn install
Start the development server:

bash

npm start
# or
yarn start
Build the app for production:

bash

npm run build
# or
yarn build
Run tests:

bash

npm test
# or
yarn test
Running the Project
After starting the development server, open http://localhost:3000 in your browser. You should see the Craft Beer Emporium app running with the beer catalog displayed.

Testing
At least one component includes unit tests using React Testing Library. Run the tests with the following command:

bash

npm test
# or
yarn test
Future Improvements
Responsive Design: Improve responsiveness for mobile and tablet views.
Animation & Transitions: Add more transitions and animations for beer grid and filter updates.
Internationalization (i18n): Enable the app to support multiple languages.
License
This project is licensed under the MIT License - see the LICENSE file for details.
