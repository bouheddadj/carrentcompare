# CarRentCompare

CarRentCompare is a web application developed in the MERN stack (MongoDB, Express.js, React.js, Node.js) that compares the rental prices of cars from two companies: Leo and Go, and Citiz.

## Features

- **Price Comparison**: Users can compare the rental prices of cars offered by Leo and Go, and Citiz side by side.
- **Search Functionality**: Users can search for specific car models or locations to compare prices.
- **User Authentication**: Secure user authentication system for managing accounts and preferences.
- **Responsive Design**: The application is designed to be responsive and accessible across various devices.

## Technologies Used

- **MongoDB**: NoSQL database used for storing car rental data and user information.
- **Express.js**: Web application framework for building robust APIs.
- **React.js**: JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime environment for executing server-side code.
- **Bootstrap**: Front-end framework for designing responsive and mobile-first websites.
- **JWT Authentication**: JSON Web Tokens used for user authentication and authorization.

## Getting Started

To get started with CarRentCompare, follow these steps:

1. Clone the repository.

2. Install dependencies:
cd carrentcompare
npm install

3. Set up environment variables:
- Create a `.env` file in the root directory.
- Define the following environment variables:
  ```
  PORT=3000
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  ```

4. Run the application:
npm start

5. Open your browser and visit `http://localhost:3000` to view the application.

## Structure
Folder Structure:

The project is organized into three main folders:

    backend: Contains the backend code of the application, including routes, controllers, and business logic.
    frontend: Contains the frontend code of the application, including React components, pages, and styles.
    src: Contains reusable components used in both frontend and backend.


## Contributing

Contributions are welcome! If you'd like to contribute to CarRentCompare, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/yourfeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/yourfeature`).
6. Create a pull request.



## Acknowledgements

- This project was inspired by the need for a simple and efficient tool to compare car rental prices.
- Special thanks to our professor REMY CAZABET and to the team BGN and the MERN stack developers' community for their invaluable resources and support.








