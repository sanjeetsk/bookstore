# Project Overview

## User Interface
Figma - https://www.figma.com/file/HmJl1YcejIXNc6Hr1ZQpjm/BookStore-UI?type=design&node-id=0%3A1&mode=design&t=DUj3MYs02a04qpfj-1

## Objective
The goal of this project is to create a responsive online bookstore application. This application fetches data from Google Books API, displays it in an elegant UI as per the provided Figma design, provides a search feature, and gives detailed information about each book.

## Project Brief
  Use the Google Books API to fetch and display data about books.
  Display a list of books obtained from the API requests in a visually appealing manner using the Figma design provided.
  Implement a search feature to find and display books based on user queries.
  Show a detailed information panel for each book when clicked, following the design in Figma.
  ### APIs Used
  We'll be hitting two APIs as soon as the user lands on the page:
    https://www.googleapis.com/books/v1/volumes?q=harry+potter
    https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes
    Change the q according to your query.
    
## Project Setup
  Set up a new React application using create-react-app.
  Review the Figma design and plan your component hierarchy.

## Fetching and Displaying Initial Book Data
  Use useEffect to fetch data from atleast two API calls (search for harry+potter and sherlock+holmes) when the app loads.
  Use useState to store this book data.
  Map through this data to display the books on the home screen as per the Figma design.

## Book Detail View
  When a book is clicked, expand its banner to full width and show detailed information about the book.
  The "Read Now" button should redirect the user to the previewLink from the book data.
  The "More Info" button should redirect the user to the infoLink from the book data.

## Search Feature
  Implement a search bar in the top navbar.
  When the search button is clicked, fetch data from the Google Books API with the user's query and display the results. Make sure that whatever the user types becomes the q in the API endpoint.

## Marking Scheme (100 Marks)
  Project Setup and Initial Fetching of Data - 20 Points
  Setup of new React application using `create-react-app`
  Appropriate component hierarchy planning based on Figma design
  Successful initial fetch of data from at least two API calls (Harry Potter and Sherlock Holmes) using `useEffect`

## Displaying Book Data as per the Figma Design - 30 Points
  Proper state management of fetched book data using `useState`
  Correct and visually appealing mapping of book data to UI, aligning with Figma design

## Implementing the Book Detail View - 20 Points
  Successful expansion of a book's banner to full width with detailed information on click
  Correct implementation of "Read Now" button redirecting to `previewLink`
  Correct implementation of "More Info" button redirecting to `infoLink`

Implementing the Search Feature - 20 Points
Proper implementation of search bar in the top navbar
Correct fetching and displaying of data from Google Books API based on user's query when search button is clicked

Code Quality - 10 Points
Clean and well-structured code
Proper and logical component structure
