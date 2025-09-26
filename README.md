# E-commerce

E-commerce is a web application developed with Angular for managing products in a small market. The project allows you to list, edit, insert, and delete products, with a modern and responsive interface.

## Features

- **Login:** User authentication. *(to be implemented)*
- **Product Management:** List, edit, insert, and delete market products.
- **Modern Interface:** Uses Angular 17+ and SCSS for styling.
- **Side Panel Editing:** Edit products in a side panel with validation and feedback.
- **Unit Tests:** All main components and services are covered by unit tests.*(to be implemented)*

## Project Structure

- `src/app/login/`: Login module and components (user authentication UI and logic).
- `src/app/manage-products/`: Product management module, including:
   - `list-products/`: List and display all products
   - `edit-products/`: Edit, update, and insert products via side panel
- `src/app/services/`: Shared services (API, validation, etc.)
- `src/app/models/`: TypeScript interfaces and models
- `src/app/generic-components/`: Reusable UI components (e.g., modal)
- `src/env/`: Environment configurations
- `src/assets/`: Static resources (images, icons, etc.)

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   Access `http://localhost:4200/` in your browser.

## Available Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the project.
- `npm test`: Runs unit tests.

## Tests

Unit tests are performed with Karma and Jasmine. To run the tests:
```bash
npm test
```

## Technologies

- Angular 17+
- TypeScript
- SCSS
- RxJS

## Roadmap

**Short Term**
- Improve product form validation and error handling
- Add loading indicators and 
- confirmation and feedback messages
- Improve unit test coverage and add integration tests

**Medium Term**
- Polish UI/UX for mobile and desktop
- Implement user authentication (login/logout)
- Integrate product categories and filtering
- Add user roles (admin, user)

**Long Term**
- Implement product image upload
- Add pagination and search for product list
- Internationalization (i18n) and multi-language support
- Deploy to cloud and CI/CD pipeline

## Contribution

Feel free to open issues and pull requests!
