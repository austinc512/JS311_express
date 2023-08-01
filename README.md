## JS311_express Examples

Creates a backend that is always running
Listening for requests

Create an app that listens

Requests will have a method
(GET, POST, PUT, DELETE, etc.)

Requests will have:

- Domain
- Route - what comes after the domain (endpoint)
- Query - ?param=value
- Body
- Header (sometimes for extra options)

Response will have:

- body
- response/status code
- header

When we're working on our computers, we are the server
http://localhost:5001 plus a route

Wednesday:

route that returns all the todos in our list
GET /todos
return an array of all todo objects

route that returns a single todo based on the id provided
GET /todos/:id is the id of the todo to return if it exists
otherwise return message "Id not found"

route that will delete a single todo based on the id provided
DELETE /todos/:id:id is the id of the todo that was deleted
return message with the item that was deleted

route that adds a single todo to the list
POST /todos
body should include an object that has a description.
we'll make a function that generates a random id that's added when the new todo is created
ex: body: {"description" : "feed the dog"}

route that updates an existing todo based on the id provided
PUT /todos/:id
ex: /todos/10, body= {"description": "buy groceries", "completed": true}
