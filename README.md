# PGR305-Exam: Webdevelopment 3 / Webutvikling 3

## Members:
* Exam Candidate: 2012
* Exam Candidate: 2014
* Exam Candidate: 2036

### Project Details:

Our frontend is build with the following languages and frameworks:
- React
- Typescript
- React Bootstrap + Bootstrap
- Axios

Our backend is built with the following languages and plugins
- .NET 
- C# Webapi
- Mongo DB plugins for .NET C#.

## Initializing the front and backend
#### Backend: 
* Navigate to \tv-series_fullstack-web\tvseriesapi in any command line interface
* Type "dotnet watch run" while inside the path mentioned above to initialize the backend

#### Frontend: 
* Navigate to \tv-series_fullstack-web\tvseries in any command line interface
* Type "npm i" while inside the path mentioned above to execute installation of required npm packages
* Type "npm start" after the installation is finished

### Default ports:
- The backend runs on port 5001
- The frontend runw on port 3000

Make sure the mentioned ports are available before initializing the project

## Description:

This is a database for series, movies and actors. You can see what is already in the MongoDB database by clicking on 'All Series', 'All Actors', 'All Movies', or 'Trailers'. You can also add new series, movies and actors! If there is a match between where an actor has starred and a corresponding series or movie, they should appear in the detailed page of that series or movie. The detailed actor page should also list in which series or movie the actor has starred.

#### Actors has the following properties:
- id: String
- name: String
- image: String
- age: String
- country: Int
- inSeries: [{name: String}]
- inMovies: [{name: String}]

#### Series has the following properties:
- id: String
- name: String
- image: String
- Genre: [{name: String}]
- Plot: String
- Episodes: [{name: String, seasonNumber: String, episodeNumber: String}]

#### Movies has the following properties:
- id: String
- name: String
- image: String
- Genre: [{name: String}]
- Plot: String
- Episodes: [{name: String, seasonNumber: String, episodeNumber: String}]

#### Trailers has the following properties:
- id: String
- link: String

#### Design Choices:
Our intention was to build a simplified version of IMDB where the user is able to interact with and contribute to the database of actors, series and movies by adding said resources through our front-end.

We used bootstrap to design both the header-navigation bar and the cards with content fetched from the database

## Bugs and errors:
