
Database:
mongodb to connect to database make .env file and add URI_MONGOOSE="YOUR CONNECTION STRING"

Retrieve a list of all books available in the bookshop --->/books

Search for specific books and retrieve their details based on the book’s ISBN code --->/books/ISBN
author names ---> /books/authorName/
titles  --->     /books/title/

Retrieve reviews/comments for specified books  --->review/ISBN

Register as a new user of the application  --->/register

Login to the application   --->/login

Add a new review for a book (logged in users only)  --->/user/review

Modify a book review (logged in users can modify only their own reviews)  --->/user/review/ISBN

Delete a book review (logged in users can delete only their own reviews)  --->/user/review/ISBN

(Multiple users) Access the application at the same time to view and manage different book reviews simultaneously