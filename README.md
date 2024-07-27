# E-commerce Product Filter

This project is a React-based application that allows users to filter products based on various criteria such as category, brand, price range, and availability. The application fetches product data from an API and provides a user-friendly interface for applying multiple filters.

## Features

- **Category Filter**: Filter products by selecting one or more categories.
- **Brand Filter**: Filter products by selecting one or more brands with a "Show more" and "Show less" feature for long brand lists.
- **Price Filter**: Filter products within a specified price range.
- **Availability Filter**: Filter products based on their availability (in stock or out of stock).
- **Dynamic Filtering**: Filters are applied dynamically as the user selects different options.
- **Responsive Design**: The layout adjusts based on the screen size, providing a good user experience on both desktop and mobile devices.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (>=12.x)
- npm (>=6.x) or yarn (>=1.22.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vishalghag/Product-List-Filter-App
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

The application fetches products from a predefined API endpoint. Users can apply various filters to narrow down the product list according to their preferences. The filtered products are displayed dynamically based on the selected criteria.

### Available Scripts

In the project directory, you can run:

- `npm start` or `yarn start`: Runs the app in the development mode.
- `npm test` or `yarn test`: Launches the test runner in the interactive watch mode.
- `npm run build` or `yarn build`: Builds the app for production to the `build` folder.

## Project Structure

```
e-commerce-product-filter/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── CategoryFilter.js
│   │   ├── PriceFilter.js
│   │   ├── AvailabilityFilter.js
│   │   ├── BrandFilter.js
│   │   ├── ProductList.js
│   │   ├── Spinner.js
│   │   └── ...
│   ├── utils/
│   │   └── apiCall.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Components

- **CategoryFilter**: Renders a list of categories with checkboxes for filtering.
- **PriceFilter**: Provides input fields for setting the minimum and maximum price range.
- **AvailabilityFilter**: Renders checkboxes for filtering by availability (in stock or out of stock).
- **BrandFilter**: Renders a list of brands with a "Show more" and "Show less" feature for long lists.
- **ProductList**: Displays the filtered list of products.
- **Spinner**: A loading spinner component to indicate data fetching.

## API Integration

The `fetchProducts` function in `src/utils/apiCall.js` is used to fetch the product data from the API. Modify this function to integrate with your own API endpoint if needed.

```js
export const fetchProducts = async () => {
  const response = await fetch("your-api-endpoint");
  const data = await response.json();
  return data.products;
};
```
