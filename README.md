# MyReads Project

This is a project part of Udacity's React Fundamentals course. 

## Overview

In the MyReads project, I had to create a bookshelf app that allows us to select and categorize books  we have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that I needed to use to persist information as I interacted with the application.


## App Functionality

* In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

a. Currently Reading, b. Want to Read, c. Read

* Each book has a control that lets us select the shelf for that book. When we select a different shelf, the book moves there. (Note that the default value for the control should always be the current shelf the book is in.).

* The main page also has a link to  `/search`, a search page that allows us to find books to add to your library.

* The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets us add the book to our library. To keep the interface consistent, I  considered re-using some of the code I used to display the books on the main page.

* When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

* The search page also has a link to / (the root URL), which leads back to the main page.

* When we navigate back to the main page from the search page, we should instantly see all of the selections we made on the search page in our library.

* For **Project Specification** visit:  https://review.udacity.com/#!/rubrics/918/view

## To get started

* install all project dependencies with `npm install`
* start the development server with `npm start`
* Create React App:

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

#### Project Development

This Project was created by **Aikaterini Alvizou** for the Google Udacity Nanodegree FEND program.


