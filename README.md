# DeviceGUARD: Ultimate Device Registration Platform

The Phone Registry Web App is a PERN stack application designed for storing users' phones based on their Serial Number (S/N) or IMEI (International Mobile Equipment Identity). The app allows users to register their phones, issue white cards containing phone-related information, and maintain a centralized database for efficient phone tracking and management.

## Features

- Phone registration based on S/N or IMEI.
- Generation of white cards containing phone information for registered users.
- Efficient storage and retrieval of phone data.
- Enhanced security measures to combat phone theft and unauthorized usage.
- Integration with PostgreSQL database for data persistence.
- Utilization of Prisma as an Object-RelatiThe Phone Registry Web App is a PERN stack application designed for storing users' phones based on their Serial Number (S/N) or IMEI (International Mobile Equipment Identity). The app allows users to register their phones, issue white cards containing phone-related information, and maintain a centralized database for efficient phone tracking and management.


## Technologies Used

- Node.js
- Express.js
- React.js
- PostgreSQL
- Prisma
- HTML/CSS
- JavaScript

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- PostgreSQL (version X.X.X)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/phone-registry-web-app.git
```

2. Navigate to the project directory:

```bash
cd phone-registry-web-app
```

3. Install server dependencies:

```bash
npm install
```

4. Install client dependencies:

```bash
cd client
npm install
```

5. Set up PostgreSQL database:

   - Create a new PostgreSQL database.
   - Update the database connection details in the `.env` file.

6. Run database migrations with Prisma:

```bash
npx prisma migrate dev
```

7. Start the development server:

```bash
npm run dev
```

8. Open your web browser and access the application at `http://localhost:3000`.

## API Documentation

The API documentation provides details about the available endpoints and their functionalities. Please refer to the [API Documentation](./API_DOCUMENTATION.md) for more information.

## Contributing

Contributions to the Phone Registry Web App are welcome. If you find any issues or would like to propose enhancements, please submit a pull request. For major changes, please open an issue to discuss the proposed changes beforehand.

## License

[MIT License](LICENSE)

## Acknowledgements

- [Prisma](https://www.prisma.io) - The ORM tool used for database operations.
- [PostgreSQL](https://www.postgresql.org) - The open-source relational database management system used for data persistence.
- [React](https://reactjs.org) - The JavaScript library used for building the user interface.
- [Express](https://expressjs.com) - The Node.js framework used for building the server-side application.

Feel free to modify the documentation to match your specific project requirements, add more sections, or provide additional instructions as needed.
