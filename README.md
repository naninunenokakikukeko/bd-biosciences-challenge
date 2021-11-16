Goal: create a ToDo list application which runs in a browser. It should store data within the 
browser and does not need to connect to any server. The application should allow users to 
enter items into the ToDo list, and click an item to mark it as Done. It should look like the 
following mock-up:
Additionally, items should appear with background color #C4C4C4 by default, #C4C4C4 when 
hovered, and #7A96AF when active. As shown above, items that are done should appear in a 
second column to the right, and should have strikethrough applied to the item text.
The application should be created using React with hooks. Any explanation you would like to 
provide for the code structure, how the problem is decomposed, your thought process, etc. 
would be greatly appreciated since we are doing this exercise asynchronously


WalkThrough:
Use the browser's localStorage to store the persisted state.
The key to the localStorage is 'bd-biosciences-todo'.
The persisted state is as follows:
{
    todo: [], //The 'todo' element contains an array of strings.
    done: [], //The 'done' element contains an array of strings.
}

Create a React context, called 'TodoContext', and populate that context with persisted value.
Create a React reducer, called 'todoReducer', to manage the persisted state.
Create a 'form' function component to manage new todo submission.
Create a  'list' function component to render the list.

