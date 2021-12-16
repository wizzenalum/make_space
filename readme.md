# here i am solving problem given by geektrust.

[problem-statement](https://www.geektrust.in/coding-problem/backend/make-space?utm_source=customer_list&utm_medium=email&utm_campaign=ocw2&utm_content=makespace)

## how to run on local machine.

download this directory and run `npm install` from root directory. after instalation, run `npm start <input file path>`.

## what is my approach

this system has indipendents components those talk over function calls. here are these independent components.

### input_parser

it will convert a file data into json array where each line is action.
each line made of the actionType and option seprate.
like input line is "BOOK 12:23 23:22 5" string converted to json object {type:"BOOK",option:"12:23 23:22 5"}
then we make request for all actions.

### application layer

this is the first layer of the app which get the request and then follow these steps for all type of actions.

1. option is parsed and converted to meaning full objects.
2. check correctness of the options like time is discreate with step size of 15 min, slot in single day.
3. validate slot time with buffer times, and validate the attendee number with min max capcity.
4. now call to controller layer or return according to the condition.

### controller

this layer talks to database layer and application layer. and according the request type is will interect with data base layer.

### database layer

it provides a basic crud functionality and query option for controller layer with completly new actiontypes.
