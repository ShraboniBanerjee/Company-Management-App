# Company-Management-App
# Description
<h1>This project is a web application built using .NET, PostgreSQL, and React JS. It utilizes DevExtreme for React components to create a user-friendly interface.</h1>

# Features
.NET Backend: Utilizes ASP.NET Core for building RESTful APIs to handle server-side logic and database operations.
PostgreSQL Database: Uses PostgreSQL as the database management system to store and retrieve data.
React JS Frontend: Implements the frontend using React JS, a popular JavaScript library for building user interfaces.
DevExtreme Components: Integrates DevExtreme components for React to create responsive and feature-rich UI elements.


# Local Setup and Run the application

<h2>Create database and table</h2>

```CREATE DATABASE testdb;```

```

CREATE TABLE IF NOT EXISTS public.users
(
    id           serial primary key,
    email            VARCHAR(40) not null,
    first_name       VARCHAR(40) not null,
    last_name        VARCHAR(40) not null,
    company_name      VARCHAR(40) not null,
    industry          VARCHAR(40) not null,
    primary_contact   VARCHAR(40) not null,
    address_line1     VARCHAR(40) not null,
    address_line2     VARCHAR(40) not null,
    address_state     VARCHAR(40) not null,
    address_city      VARCHAR(40) not null,
    address_country   VARCHAR(40) not null,
    annual_revenue    VARCHAR(40) not null,
    Date DATE         VARCHAR(40) not null,
);

```


<h2> Backend</h2>

You can start it by running 'cd Backend' then ```dotnet run``` from the command line in the project root folder. 


<h2>Frontend</h2>
cd "Client"

```npm install```

```npm start```

<h2>From the browser call the endpoint http://localhost:3000.</h2>
<h2>To run database in your server please add your connectionstrings inside appsettings.json file</h2>
<h2>Dotnet is running at http://localhost:9080. </h2>



# Usage
This application provides two ways to update, edit, and delete data:
- DevExtreme Frontend: Utilizes DevExtreme components directly within the React frontend to update, edit, and delete data. This approach offers a seamless user experience with interactive and responsive UI elements.

- Database Backend Form: Implements separate components for updating, editing, and deleting data, which directly interact with the backend database. Forms are generated dynamically based on the database schema, allowing for flexible data management. This approach provides more control over the data manipulation process and allows for custom validations and business logic.

# Output
- attached screenshot

