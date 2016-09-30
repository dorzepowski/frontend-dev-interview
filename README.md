Frontend Developer Job Interview test application
===================================================

This is template for test skils of frontend developer during job interview.
The project has prepared NodeJS server witch serve static content from web/ directory and 
expose simple rest API for test AJAX knowledge.

Instruction
--------------------------
**Application**
Before you start make sure you have NodeJS installed. 
In terminal cd to this directory and type ``npm install``. 
This should install all needed dependencies and run a server. 
If you have everything already installed and only want to start application again, just type ``npm start``

Files created by interviewed person should be placed in web/ directory. No need to restart server when changes were made, just reload browser. 

**Rules:** 
In my opinion the best you result will be if you stay during the test and watch the candidate. 
And there is no special rules he/she could use anything he/she wants. 
Why? Because you can get information how is he/she working. 
So if they use stackoverflow, it is ok, cause you use it every day. 
Want to use bootstrap -> no problem, so they know it.
The only rule I suggest you is to set time limit which will be acceptable by you. I will try to suggest some values for time limit, but I can't promise this.

Exercise:

1. 
a.) Style: 
    - header element should be sticky header with height of 90px;
    - footer element should be placed on the bottom of the window and also be sticky. height = 90px;
    - nav element as left side bar, width 180 px, placed between header and footer and also sticky
    - div class="content", placed between header and footer and to the right to nav element. 
    Should fill all the space that is left and should have own scroll bar (no scroll bar on body)
b.) JS:
    - Get menu list from endpoint below and show them in nav bar 
    ```
    method: GET
    path: /api/menu `
    ```
     
   
