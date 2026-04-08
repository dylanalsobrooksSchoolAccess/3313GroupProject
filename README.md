MEETING NOTES - 04/08/2026

### Tasks:
    JT -        Continue working on index.html
    Giovanni -  Recipes Page (you can start with a boilerplate)
    Ashleigh - .form-input & .btn-primary rules in CSS
    Dylan -     JavaScript logic targeting getElementByID('btn-yes'), Develop booking.html, Create some recipes

 ### HTML/CSS Handshake:
    1. Case style for IDs (camelCase)
    2. Write out everything excluding standard abbreviations (btn for button, nav for navigation, img for image)    
    3. ID for Javascript (id="booking-form")
    4. Class for CSS (class="btn-primary", class="form-group", class="recipe-card")

### JavaScript Hook:
    <!-- To be put in top of index.html <body> tag -->
    <div id="age-verification-modal" class="modal-overlay">
        <div class="modal-content">
            <h2>Are you 21 or older?</h2>
            <button id="btn-yes" class="btn-primary">Yes</button>
            <button id="btn-no" class="btn-secondary">No</button>
        </div>
    </div>

### Form Controls (10 Controls needed) "Book Private Bartender":
    <!-- The <form> tag itself MUST include this exact action and method: -->
    <form action="http://www.randyconnolly.com/tests/process.php" method="POST"></form>

    First Name: <input type="text" id="first-name" class="form-input">
    Last Name: <input type="text" id="last-name" class="form-input">
    Email Address: <input type="email" id="email" class="form-input">
    Phone Number: <input type="tel" id="phone" class="form-input">
    Date of Event: <input type="date" id="event-date" class="form-input">
    Start Time: <input type="time" id="event-time" class="form-input">
    Estimated Guest Count: <input type="number" id="guest-count" class="form-input">
    Type of Event: <select id="event-type" class="form-dropdown">

    <!-- (Options: Wedding, Corporate, Private Party, Other)
    Do You Need Glassware Rental? --> 
    <input type="radio" name="glassware" class="form-radio">
    <!-- (Yes / No options) -->

    <!-- Preferred Base Spirits: --> 
    <input type="checkbox" class="form-checkbox">
    <!-- (Multiple checkboxes for: Vodka, Tequila, Whiskey, Rum, Gin) -->

    <!-- Custom Cocktail Requests (e.g., Houston Rap theme drinks): --> 
    <textarea id="special-requests" class="form-textarea"></textarea>

    <!-- Submit Button: --> 
    <button type="submit" id="submit-btn" class="btn-primary">Get Quote</button>




----------------------------------------------------------------------------------------------------------------------
MEETING NOTES - 03/25/26 @ 12:00 
DUE 4/26/26 @ 00:00 

### Skills/Roles/Tasks: 
    Ashleigh - CSS 
    Dylan - Javascript
    Giovanni - HTML
    JT - HTML  

## Selected site theme - Bartending 

### Pages: 
    1. (home page) Drink of the week 
    2.  recipe page 
    3. (form) Book private bartender - CTA  
                / Submit a Recipe - On recipe page 
    4. (documentation) 
        Javascript Age verification 

## How to Edit and Contribute to This Project

You do not need to download any software or use the command line to work on your assigned HTML or CSS files. You can do everything directly in your web browser!

### Option 1: The Quick Web Editor (Recommended)
GitHub has a built-in code editor that works exactly like our course assignments.

1. Make sure you are logged into your GitHub account and are on this repository's main page.
2. Press the `.` (period) key on your keyboard. 
3. The page will redirect into a web-based code editor (GitHub.dev).
4. On the left side, you will see our project folders (`css`, `js`, etc.). Click on the file you need to work on.
5. Type your code directly into the editor. *Note: Remember our professor's rule, no AI-generated code!*
6. **To Save (Commit) Your Work:**
   - Click the **Source Control** icon on the far left menu (it looks like a branch with 3 circles).
   - Type a brief message in the box explaining what you did (e.g., "Added fonts to index.html").
   - Click the blue **Commit & Push** button. 

### Option 2: The Standard GitHub UI (For quick, single-file edits)
If you just need to make a fast typo fix or add a single line of code:
1. Navigate to the file you want to edit in this repository.
2. Click the **Pencil icon** in the top right corner of the file box.
3. Make your edits.
4. Click the green **Commit changes...** button at the top right, add a brief description of what you changed, and click **Commit changes** again to save.

### Option 3: GitHub Desktop (If you want files on your computer)
If you prefer having the actual files on your computer to test them out locally, but want to avoid the using the command line, use [GitHub Desktop](https://desktop.github.com/). It is a visual, point-and-click app that handles all the downloading and uploading for you.

### TIPS: 
1. If using VScode; Install the 'Live Server' extension by Ritwick Dey. This lets you easily launch the webpages we are building, and when you save changes to a document it will automatically update with your new changes.    
