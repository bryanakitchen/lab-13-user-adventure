# lab-13-user-adventure

## First Date Adventure

### Get User Information
    
    - name
    - Would you like to be taken out on a date, or take someone out on a date?

### Choice 1:
    
    Location
        - italian restaurant (2.1)
        - coffee shop (2.2)
        - park (2.3)


### Choice 2: 
    
    Order food
        2.1 spaghetti and meatballs, salad, or not hungry?
        2.2 coffee, decaf tea, water
        2.3 grab ice cream, walk around park, sit on bench

### Choice 3:

    What topic to discuss
        - bring up ex
        - bring up politics
        - ask about favorite hobbies

### Choice 4:
    
    Request the check or order dessert

### Choice 5:
    
    Good bye (hug, kiss, handshake, high five)


# Plan

Type out Raw Location Data - Things that don't change

State

### Character/User

HTML: form inputs for name and Choice of Dater or Datee?

Submit button 

Validate 
- log hello world on Submit
- log form data on Submit
- store in local storage on Submit (and log out local storage)
- do step 3 and redirect to the Location page

### Home Page or Location Page

- A ul that can hold links?
- loop over locations and make a link for each one.
- if location is completed, disable link or make non-link

Validate

- log out locations and make sure wired.
- loop though location data and log out locations one by one to make sure loop works
- make a link with query parameters to reach location and log the html element out
- append the links to the ul if applicable.

Need to disable completed locations.

Redirect on date end

### Location/Date Page

hard coded HTML
empty divs

- get search parameters and log them out.
- use search parameters to grab correct quest and log out
- render location stuff. 
(choices will need a loop)
- need event listener and button to figure out the option each user selected (log it!).
- in event listener, use data to manipulate state (if datee will return?)

From here, maybe finish tasks on home page.

### Ending/Results

Use state to display a different message depending on the final user state (how date went)

