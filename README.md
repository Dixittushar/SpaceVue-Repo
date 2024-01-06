SpaceVue React App
SpaceVue is a React application that allows users to log in and view space mission data. The app includes a login page where users can enter their credentials and a dashboard displaying space mission information using Ag-Grid for tabular data and Recharts for visualizations.

Table of Contents
Installation
Usage
Components
Dependencies

Installation
Clone the repository to your local machine:
git clone https://github.com/your-username/spacevue-react-app.git

Change into the project directory:
cd spacevue-react-app
Install the dependencies:

npm install
Usage
Start the development server:

npm start
Open your browser and navigate to http://localhost:3000 to view the SpaceVue app.

Components

1. App
   The main entry point of the application. Handles user authentication and renders either the login or dashboard components based on the user's login status.

2. Login
   A simple login component that takes a username and password. Users can log in with predefined credentials ("user" as the username and "password" as the password).

3. Dashboard
   Displays space mission data using Ag-Grid for tabular data and Recharts for visualizations. Fetches mission data from an external API and presents it in a user-friendly format.

Dependencies
React
Ag-Grid
Recharts
