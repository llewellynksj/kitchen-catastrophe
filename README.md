# Kitchen Catastrophe Word Game

Kitchen Catastrophe is a word game aimed at providing light entertainment while also serving to test and better user's knowledge of food and drink vocabulary. Levels begin with easier 4 and 5 letter words in the food and drink categories. These build to 5 and 6 letter words in levels 3 and 4. When the user reaches level 5 their unscrambling skills and foodie knowledge is tested with a new category; cooking methods. Finally the last level is a real test with 2 ten letter words to solve!

![Image of the Kitchen Catastrophe website on a varitey of devices with differing screen sizes](documentation/readme-images/amiresponsive-kitchen-catastrophe.png)

[Visit the Kitchen Catastrophe live website here](https://llewellynksj.github.io/kitchen-catastrophe)

<br>

## Contents
----

### [User Experience (UX)](#user-experience-ux-1)
- [Purpose](#purpose)
- [User Stories](#user-stories)
  - [First Time Visitors](#first-time-visitor-goals)
  - [Returning Visitors](#returning-visitor-goals)
  - [Frequent Users](#frequent-visitor-goals)

### [Design](#design-1)
- [Colour Scheme](#colour-scheme)
- [Typography](#typography)
- [Imagery](#imagery)
- [Wireframes](#wireframes)

### [Features](#features-1)
- [Existing Features](#existing-features)
  - [Homepage](#homepage)
  - [Game](#game)
- [Accessibility](#accessibility)
- [Future Features](#future-features)

### [Technologies](#technologies-1)

### [Version Control](#version-control-1)

### [Deployment](#deployment-1)

### [Testing](#testing-1)
- [Function Testing](#function-testing)
- [User Story Testing](#user-story-testing)
- [Lighthouse](#lighthouse)
- [JavaScript Validator](#javascript-testing)
- [Validator Testing](#validator-testing)
- [Bugs](#bugs)

### [Credits](#credits-1)
- [Resources](#resources)
- [Acknowledgements](#acknowledgements)

<br>

----

<br>

## User Experience (UX)
### **Purpose**

Kitchen Catastrophe is a fun and light-hearted game aimed at anyone who loves a word problem and/or loves food and drink! 

<br>

### User Stories

### **First Time Visitor Goals** 
- I want to play an engaging word game
- I want to test my food and drink knowledge
- I want to be able to play on any of my devices
- I want to navigate easily

<br>

### **Returning Visitor Goals**
- I want to test my knowledge on new words
- I want to be able to decide if I can see the clues or not
- I want to be able to start the game without scrolling to the bottom of the homepage

<br>

### **Frequent Visitor Goals**
- I want to test my knowledge on new words
- I want to keep record of my score and challenge myself with harder levels

<br>

----

## Design
### **Colour Scheme**
This website uses primarily a palette of green and orange colours to reflect a fresh, clean, foodie feel. The palette was created using the [Coolors](https://coolors.co/) website.

![Image of colour palette from Coolors.co](documentation/readme-images/colour-scheme.png)

<br>

### **Typography**
[Google Fonts](https://fonts.google.com/) was used to source the font styles used throughout the website:
- Andika: Used for the main body of website
- Permanant Marker: Used for the game title only

Andika was chosen as the primary font as it's in keeping with the sense of fun and games.

<br>

Permanant Marker was chosen as it feels in keeping with the title itself; 'Kitchen Catastrophe'. It gives a sense of calamity.
![Image of the title using the Permanant Marker font](documentation/readme-images/title.png)

Both were also chosen to ensure maximum accessibility.

<br>

### **Imagery**
Images found throughout the website were sourced from [Shutterstock](https://www.shutterstock.com/).
The background image was chosen as it fit with the theme of being fun and whimsical. This background was the base of choice for the rest of the colour palette.

Photographs of real people were used (as opposed to animated/cartoon imagery). This bring a certain adult feel to the game ensuring adults know it's a game for them.

Icons used on the homepage and support page were imported through [Font Awesome](https://fontawesome.com/).

<br>

### **Wireframes**
To create the wireframes I used the [Balsamiq Wireframing Software](https://balsamiq.com/).
<details>
<summary>Homepage (mobile)</summary>

![Wireframe image of homepage design on mobile](documentation/mobile-homepage.png)
</details>
<details>
<summary>Homepage (desktop)</summary>

![Wireframe image of homepage design on desktop](documentation/desktop-homepage.png)
</details>

<br>
<details>
<summary>How to Play page (mobile)</summary>

![Wireframe image of homepage design on mobile](documentation/mobile-rulespage.png)
</details>
<details>
<summary>Homepage (desktop)</summary>

![Wireframe image of homepage design on desktop](documentation/desktop-rulespage.png)
</details>

<br>

<details>
<summary>Game page (mobile)</summary>

![Wireframe image of dates page design on mobile](documentation/mobile-gamepage.png)
</details>
<details>
<summary>Dates page (desktop)</summary>

![Wireframe image of dates page design on desktop](documentation/desktop-gamepage.png)
</details>

<br>

----

## Features
### **Existing Features**
The website has 3 main pages accessible to the user which; the homepage, the How to Play page where the game instructions can be found, and the Game page itself.

**All** pages include the following features:
- Logo: Chefs hat image
![Image of the chef hat logo](documentation/readme-images/chefhat.png)

- Navigation bar: Quick links to the game and back to the homepage
![Image of the navigation bar that appears on all pages](documentation/readme-images/nav-bar.png)

- Title: Kitchen Catastrophe

<br>

### Homepage
The homepage is very simple and acts as a home base to set the scene for the idea behind the game. Here the user is told the premise; that the chefs need help to unscramble lots of food and drink related words.
From here they can click on the call to action button to take them to the 'How to Play' page, or they can use the navigation links at the top of the page to go straight to the game.
![Screenshot of the Kitchen Catastrophe Homepage](documentation/readme-images/homepage.png)

<br>

### How to Play Page
This page consists of:
- Rules
The first information the user will see is the rules/instructions. These are very straightforward and simply set out over 3 lines.

- Icons
Icons that represent the 3 categories are illustrated here and also serve to seperate the text of the rules and the levels for better UX.
 
- Levels
A list highlights what the user can expect in terms of levels and categories

- Call to action button
At the bottom of the page the user can click on the 'Start unscrambling' button to take them into the gameplay.

![Screenshot of the Kitchen Catastrophe How to Play page](documentation/readme-images/rules-page.png)


<br>

### Game Page
- Player Stats
The user will be able to see the level they are on, their score, and how many times they have got the answer wrong.

- Category
This changes dependent on the level; either food, drink, or cooking methods. All with a relevant icon.

- The scrambled word
Here the word that is all jumbled appears for the user to solve.

- User Answer box
The user answer box appears with placeholder text so that the user knows where to input their answer. Focus returns to this box after any modals are closed.

- Clue Hint
A clue is provided but only activated by using the toggle button. This means the user has a choice over making the game a little more easy/difficult.
[![Image from Gyazo](https://i.gyazo.com/2026981a7b64fe95f4e232a4ec82f375.gif)](https://gyazo.com/2026981a7b64fe95f4e232a4ec82f375)

- Buttons
Immediately under the clue is the 'Check Answer' button. A stronger font is used for this button to make it stand out better as it will be most frequently used during gameplay.

![Screenshot of the Kitchen Catastrophe Game page](documentation/readme-images/game-page.png)

<br>

### Modals
Dependent on what the user has input for their answer, when the Check Answer button is clicked one of 5 possible modals will show. These include:
 - Advises user their answer is correct
 - Advises user their answer is incorrect
 - Advises user no answer was input
 - Advises user they have won the game
 - Advises user they have lost the game

<br>

### **Accessibility**
I have taken the following steps in order to ensure my site is as accessible as possible:
- Clear and simple font styling, avoiding any cursive or calligraphic scripts.
- Colours: 
- Addition of quick links in the navigation bar
- Use of semantic HTML
- Ensuring all images have an alt description for screen readers or where the image cannot be loaded. Also ensuring that these are as descriptive as possible.

<br>

### **Future Features**
In the future there are features and developments I would like to consider adding to create an even better user experience of this website. They include:

- 
- 

<br>

----

## Technologies
### **Languages Used**
This website has been written in HTML, CSS and JavaScript.

<br>

**Frameworks, Libraries and Programs Used**
- Github: Storing and hosting my code/repositories
- Gitpod: Code editor for writing my code and storing other images/files
- Font Awesome: For icons used throughout the site
- Google Fonts: To import the fonts used throughout the site
- Coolors: Colour palette picking website used to choose my colour scheme
- [Shutterstock]() Stock images
- Google DevTools: Used throughout the site's creation to test responsiveness and tweak layout
- Balsamiq: Wireframe software
- Favicon.io: To create favicon
- Am I Responsive: To create a visual of the website across different device sizes
- [BIRME](https://www.birme.net/?) To resize images

<br>

----

## Version Control
Version control has been maintained using Git. The code written for this website has been updated via regular commits to Github. These serve as a record of development and changes to the varying pages of html and css.

My commit history can be viewed [here]()

<br>

----

## Deployment
Github was used to deploy the website. The steps below were followed in order to achieve this:

1. Log in to Github account
2. Navigate to the project repository
3. Click the 'Settings' button near the top of the page
4. Click the 'Pages' button from the left-hand menu
5. The 'Source' box should state 'Deploy from a branch'
6. Under the 'Branch' box click to select 'main'

![Screenshot of step 6](documentation/readme-images/github-pages.webp)

7. Click 'Save'
8. It may take a few minutes to refresh but you will then be able to see the project has been made live

![Screenshot of step 8 showing the live link to the project on Github Pages](documentation/readme-images/github-pages-live.webp)
<br>

----

## Testing
Testing was performed across a range of devices, including:
- HP Elitebook 840 GS (1920 x 1080)
- HP Monitor (2560 x 1440)
- Surface Pro 6 (1368 x 912)
- Google Pixel 5

### **Function Testing**

| Page | Test | Successfully Completed |
| :----| :---| :----------------------:|
| All  |  | Yes |
| All  | Navigation links go to relevant page | Yes |
| All  |  | Yes |
| All  |  | Yes
| All  | Call to action buttons link to relevant page | Yes |
| All  |  | Yes |
| Homepage |  | Yes |
| Dates  |  | Yes |
| Support  |  | Yes |
| Support  |  | Yes |
| Contact  |  | Yes |
| Contact  |  | Yes |
| Contact  |  | Yes |

<br>

### **User Story Testing**

| First Time Visitor Goal | Solution | Tested & Successfully Completed |
| :----| :---| :----------------------:|
|  |  | Yes |
|   |  | Yes |
|  |  | Yes |
|   |  | Yes |

<br>

| Returning Visitor Goal | Solution | Tested & Successfully Completed |
| :----| :---| :----------------------:|
| | | Yes |
|  | | Yes |
|  |  | Yes |

<br>

| Frequent Visitor Goal | Solution | Tested & Successfully Completed |
| :----| :---| :----------------------:|
|  |  | Yes |

<br>

### **Lighthouse**

For Mobile Devices
<details>
<summary>Homepage</summary>

![Screenshot of Lighthouse testing for homepage on mobile devices]()
</details>
<details>
<summary>Game Page</summary>

![Screenshot of Lighthouse testing for game page on mobile devices]()
</details>

<br>

For Desktop
<details>
<summary>Homepage</summary>

![Screenshot of Lighthouse testing for homepage on desktop]()
</details>
<details>
<summary>Dates Page</summary>

![Screenshot of Lighthouse testing for game page on desktop]()
</details>

<br>

### **Validator Testing**
HTML
<details>
<summary>Homepage</summary>

![Screenshot of WC3 testing for homepage]()
</details>
<details>
<summary>Game Page</summary>

![Screenshot of WC3 testing for game page]()
</details>

<br>

CSS
<details>
<summary>Stylesheet</summary>

![Screenshot of W3C Jigsaw testing for CSS Stylesheet]()
</details>

 <br>

### **Bugs**
  
  | Raised by | Bug | Solution |
  | :---      | :---| :---     |
  |  |  |  |
  |  |  |  |
  |  |  |  |
  |  |  |  |
  |  |  |  |
  |  |  |  |
  |  |  |
  |  |  |  |
  |  |  |  |
  |  |  |  |

<br>

----

## Credits
### **Resources**
- [Code Institute]() HTML and CSS learning content and for providing the [template]() used to start this website
- [Scrimba](https://scrimba.com/) - [JavaScript Tutorial]()
- [W3Schools](https://www.w3schools.com/) For general tips and advice on a variety of HTML, CSS and JavaScript
- 

<br>

### **Acknowledgements**


