![License](https://img.shields.io/badge/License-ISC-ff69b4)

# **Alternative Book Search Engine**

## **Description**
The purpose of this project was to take a fully functional MERN stack application that was built in React with a RESTful API and to refactor it to use a GraphQL API built with an Apollo Server. This application is a book search engine website that allows users to search for books using the Google Books API and then save and delete selected books of interest.  

## **Table of Contents**
[User Story](#user-story)<br>
[Acceptance Criteria](#acceptance-criteria)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Built With](#built-with)<br>
[Deliverables](#deliverables)<br>

### **User Story**
AS AN avid reader<br>
I WANT to search for new books to read<br>
SO THAT I can keep a list of books to purchase<br>

### **Acceptance Criteria**
GIVEN a book search engine<br>
WHEN I load the search engine<br>
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button<br>
WHEN I click on the Search for Books menu option<br>
THEN I am presented with an input field to search for books and a submit button<br>
WHEN I am not logged in and enter a search term in the input field and click the submit button<br>
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site<br>
WHEN I click on the Login/Signup menu option<br>
THEN a modal appears on the screen with a toggle between the option to log in or sign up<br>
WHEN the toggle is set to Signup<br>
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button<br>
WHEN the toggle is set to Login<br>
THEN I am presented with two inputs for an email address and a password and login button<br>
WHEN I enter a valid email address and create a password and click on the signup button<br>
THEN my user account is created and I am logged in to the site<br>
WHEN I enter my account’s email address and password and click on the login button<br>
THEN the modal closes and I am logged in to the site<br>
WHEN I am logged in to the site<br>
THEN the menu options change to Search for Books, an option to see my saved books, and Logout<br>
WHEN I am logged in and enter a search term in the input field and click the submit button<br>
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account<br>
WHEN I click on the Save button on a book<br>
THEN that book’s information is saved to my account<br>
WHEN I click on the option to see my saved books<br>
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account<br>
WHEN I click on the Remove button on a book<br>
THEN that book is deleted from my saved books list<br>
WHEN I click on the Logout button<br>
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button<br>

### **License**
This project is covered under the following license: ISC<br>
https://opensource.org/licenses/ISC

### **Contributing**
Special thanks to Scott Heier for his assistance in trouble-shooting some challenges that were encountered during the process of building this application.

### **Built With**
* React 
* JavaScript
* Node.js
* Express.js
* GraphQL
* Apollo Server
* Heroku

### **Deliverables**
### **Screenshots of Alternative Book Search Engine:**

 **Homepage**<br>

![homepage with search engine](client/src/assets/images/home-page.png)<br>

**Login/SignUp modal**<br>

![login and signup modal](client/src/assets/images/login-signup-modal.png)<br>

**Returned Search for a Book**<br>

![books that are returned after submitting a book name](client/src/assets/images/search-book.png)<br>

**Saved Books to User's Account**<br>

![user's saved books](client/src/assets/images/saved-books.png)<br>

### **Website URL for Alternative Book Search Engine:**<br>
https://alt-book-search-engine.herokuapp.com/
