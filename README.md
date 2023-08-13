# City Travelling App

Welcome to the City Travelling App, a comprehensive tool for all your city-traveling needs. With our platform, explore cities, view details, and get travel insights. This document provides all the necessary steps to get you started with both the frontend and backend of the application.

## Project Overview

City Travelling App is your go-to digital companion for exploring cities around the globe. Tailored for avid travelers and curious explorers alike, this application curates rich insights about various cities, offering users a blend of vivid imagery, fascinating trivia, and crucial travel data.

## Features

- Browse cities.
- View detailed city information.
- View ticket prices 
- Leave a comment on cities
- Update your travel details
- Add new cities

## Repositories

- **Backend**: [City Travelling App Backend](https://github.com/sabrimohiuddin/cities-backend/tree/main)

- **Frontend**: [City Travelling App Frontend](https://github.com/sabrimohiuddin/cities-frontend/tree/main)

## Setting Up the Development Environment

### Frontend Setup

Clone the repository:

git clone [https://github.com/sabrimohiuddin/cities-frontend/tree/main]

# Packages to install for Cities Frontend app
npm init -y 
npx create-react-app cities-visual
npm install react-router-dom
npm install axios
npm install bootstrap

### Backend Setup

Clone the repository:

git clone [https://github.com/sabrimohiuddin/cities-backend/tree/main]

# Packages to install for Cities backend  app
npm init -y
npm install express 
npm install dotenv 
npm install cors 
npm install pg-promise

# Resetting and/or updating the database
psql -U postgres -f db/schema.sql
psql -U postgres -f db/seed.sql

## Development Commands

Once you're set up, here are some commands you can use:

# Running the App : 

In the project directory, use the following command to run the app in development mode:

```npm start```

Visit http://localhost:3000 in your browser to view the app. The page will reload automatically when you make changes, and you'll be able to see lint errors in the console.

# Deployment
[Provide details on how to deploy your app. Any platforms you recommend? Steps?]

# Contributors
[Frantz-Sebastien Mathias(https://github.com/Frantz-Sebastien)], 
[Sabri Mohiuddin(https://github.com/sabrimohiuddin)]

# Feedback
Feel free to file an issue or send pull requests for improvements. Your feedback is much appreciated!

# Trello Board link
https://trello.com/w/citiesbackendfrontendproject

