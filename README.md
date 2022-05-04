# Whac-Em-All

This game is based on the popular arcade game whack a mole game / whack em all. This idea is to whac as many moles that pop in the main game area.
Each time you hit a mole you get a point, the more times you hit the target the more points you can get. The game is fun and fast and displaying the highscore encourages the user to keep playing to beat this.The game demonstrate how to use JavaScript to make a fun and interactive game. The game is coulourful and colors are bright and playful.

## Features

__Whac-Em-All Heading__  - main heading clear and centered.
- Featured at the top of the page, the Whac-Em-all heading is easy and clear to see for the user.
- Upon viewing the page, the user will be able to see the name of the game.

![image](https://user-images.githubusercontent.com/5288061/166824856-bdceaa39-325b-421c-ab8a-946c9dcb4498.png)

__The Score Area__
- Scores areas - this has the score which is updated as you hit the mole.
- Highscore - This keeps track of your high score encouring you to keep playing to beat this score.
- The score area included score which increases as you click or mouse-over the mole that pops up from hole.
- The high score which also increase as you score but will be saved to local Storage at end of game. 
- When you click play button again it will show the highest score that has being achieved and clear the score to 0. 

![image](https://user-images.githubusercontent.com/5288061/166824927-80341180-49fe-4dca-b84d-c38561dc4b78.png)

__Time-Left__ - This diplays the 30sec timer to let you know when game is about to end.

![image](https://user-images.githubusercontent.com/5288061/166825017-417883e4-18aa-452d-a348-dd9c1c0c8d9b.png)


__The Game Area__

  - This section will allow the user to play the Whac-Em-All game. The user will be able to easily see a mole pop up for the user to hit/whac with cursor / hammer. 
  - The main goal of the game is to hit the mole as many time as you can within the limited time frame. 
  - The user will also be able to see the highscore to beat. To start the game you click on the play button.

![image](https://user-images.githubusercontent.com/5288061/166828010-91f8ac16-65c5-4378-a5e0-972a6718f2f4.png)


__Background Image__

- The game features a fun and cartoonish background which ties into the look and feel of the game to give it color brightness.

![image](https://user-images.githubusercontent.com/5288061/166832144-7cc2290d-7c8b-4f3c-bd59-458f0e323d0b.png)



### Features Left to Implement

- LEvels Easy,Medium,Hard which would increase the speed of target.
- Planned to have different targets pop up from holes.
- Animate hammer when clicked on.
- Background Music

## Testing
    - I have tested page on Chrome,Firefox,Safari,Edge
    - I have tested page with Google lighthouse
    - I have tested with W3C HTML Validator
    - I have tested with W3C CSS Validator
    - I have tested with JSHint
    - My toddler tested the game for me :) 

Bugs

- Score was not clearing when pressed play function - fixed 
- The time-left timer jumps on screen when it starts - fixed

![image](https://user-images.githubusercontent.com/5288061/166667196-16c9a007-3bd1-4691-b66b-ceca835047da.png)
- Updated body tag to correct position.

![image](https://user-images.githubusercontent.com/5288061/166667278-a7409dd4-c7af-4672-a59f-7f2782c9af3d.png)
- Removed this line as it was un-needed.

Lighthouse
First test with lighthouse desktop show missing meta data updated this.

### Validator Testing

- HTML
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-maths%2F)

![image](https://user-images.githubusercontent.com/5288061/166666447-e6108072-23c2-497e-8326-4a4422a0592a.png)

- CSS
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-maths%252F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) 

![image](https://user-images.githubusercontent.com/5288061/166666596-76d7c8e8-c8df-4620-92dd-b8b127279b4e.png)


- JavaScript
- No errors, only warnings about semicolons at the end of lines which is optional using https://jshint.com/
- No erros on console when testing or playing game.

![image](https://user-images.githubusercontent.com/5288061/166667992-40cbf142-0f31-4390-a2be-2563336b9490.png)

Metrics

There are 9 functions in this file.

Function with the largest signature take 1 arguments, while the median is 0.

Largest function has 7 statements in it, while the median is 2.

The most complex function has a cyclomatic complexity value of 2 while the median is 1.

### LightHouse
- Mobile
![image](https://user-images.githubusercontent.com/5288061/166820099-44154bbc-2bbb-4005-97bf-8c06ded5137e.png)
- Desktop
![image](https://user-images.githubusercontent.com/5288061/166824135-cca2836d-f96c-4909-b2eb-04a76ff62561.png)

### Unfixed Bugs
No known bugs 

## Deployment

### WireFrames

This site was designed and planned out with wireframes before deployment. 

![image](https://user-images.githubusercontent.com/5288061/166830378-9c9fcdff-7a85-47f7-8100-a1a42f96bd4b.png)

![image](https://user-images.githubusercontent.com/5288061/166830749-230ab4d5-5c86-4600-8d81-192b53f5d07f.png)

## Github

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://niallos11.github.io/whac-em-all-game/

## Credits
- Code Institute 
- My Mentor for helping & guiding me.

## Research

- I looked into simular games that existed and download apps on Android & iPad to test how they looked and played.
eg: https://mole.onge.uk/ https://lagged.com/play/1537/ https://www.calculators.org/games/whack-em-all/ https://www.ducksters.com/games/whack_em_all.php

![image](https://user-images.githubusercontent.com/5288061/166836929-2135e21d-4c62-4e70-8f18-176c6c068f24.png)

![image](https://user-images.githubusercontent.com/5288061/166836956-0aa932d3-0295-4a9d-afb2-3ee2dc1b6329.png)


### Content
- I needed to use many google searches to find how to do some things that were not covered in course content.

https://medium.com/@divyamcm/whack-a-mole-game-using-html-css-and-javascript-84b108ec5c8e
https://jsbeginners.com/whack-a-mole-game-javascript-project/
https://learnersbucket.com/tutorials/js-projects/whack-a-mole-game-in-javascript/
https://codepen.io/AlexsandroSA/pen/ZXGZag
https://css-tricks.com/using-css-cursors/
https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68
https://stackoverflow.com/questions/29370017/adding-a-high-score-to-local-storage
https://stackoverflow.com/questions/64113076/javascript-high-score-update-regardless-of-whether-new-score-is-higher-or-not

- I watched multiable YouTube video tutorials to help me figure out how to setup and structure game.

https://www.youtube.com/watch?v=toNFfAaWghU
https://www.youtube.com/watch?v=rJU3tHLgb_c
https://www.youtube.com/watch?v=UnrtgpQlAz4&t=2025s
https://www.youtube.com/watch?v=D9ZfzXaCPuI&t=202s
https://www.youtube.com/watch?v=he1Obo8bi_M&t=1136s
https://www.youtube.com/watch?v=iYMx3Z5sTSI&t=1818s
https://www.youtube.com/watch?v=b20YueeXwZg&t=877s
https://www.youtube.com/watch?v=UX9HRC74cLA&t=283s
https://www.youtube.com/watch?v=z0cKwzPF9cQ

- The fonts were taken from google fonts - https://fonts.google.com/specimen/Short+Stack

### Media

- The images used for the background page were taken from a Open Source site.
- The hammer cursor icon was taken form - https://www.cursors-4u.com
- The fav icon was taken from - https://www.favicon.cc
- This image was taken from a Open Source site used as the target mole in game.
https://www.clipartmax.com/download/m2i8i8d3i8m2A0Z5_mole-clipart-whack-a-mole-from-whack-a-mole/













