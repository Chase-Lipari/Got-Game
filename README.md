# Got-Game

Web application development for Got Game

# Got Game (Web Version)

# Summary

The Web Version of got game will be the first release of got game, it will have more functionality than it’s mobile counterpart, for arena and sport center owners to organize events, post open slots for available game times and rentals etc. The Got Game app allows users to host and find sports that they would like to play. A user will need to have an account to use the app and join or host games.

# Logo

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/c7aa1e96-c788-4ba5-9c53-a779c19721a9/Untitled.png)

# Color Palette

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ac869b76-a35c-49f6-82fe-230c563a0b9f/Untitled.png)

1C182D

E8B092

10C3E4

127FA7

2D5F71

# Functionality of the Website

The website will need to be usable on a mobile phone or tablet so the navbar and other features will need to be organized in a way so that it makes sense for users on different sized screens and devices.

# Login Page

This page will be the first page that appears if the user is not logged in no matter what, if the user does not have an account they will be able to sign up on this page as well. After they login they will be able to go straight to the home page and they will be remembered for all their next visits to the website.

# User Navigation Bar

The important part of this website will start by the sticky Navbar that will allow the user to change pages no matter how far down they have scrolled on the website. The navbar will follow the upper limit of the users view. The Navbar has 7 sections “Home”, “Friends”, “Invites”, “Teams”, “My Games”, “Account” and finally “Settings”. Each of these sections will bring the user to another page on the website all of which have the same Navbar at the head of the page.

# Home Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/a231197d-aada-454d-a24e-af40b6d2fcfe/Untitled.png)

## Games (Stored in a firebase database that can interact with mobile applications as well)

The User Home Page will contain a table that is a list of all available games that the user is able to join to play. Games will be stored as Game Objects in the firebase database, A game will Contain the type of sport (ex: volleyball, basketball, hockey, etc), The level of proficiency/skill in this sport that is required to join (ex: begginer, intermediate, pro, expert, etc), The date and time that the game will take place (ex: jan 26 7:00PM, Feb 13 2:00PM), The location that the game will take place (ex: vincent lecavalier arena, Eugene Dostie Volleyball courts, etc), The Description of the sport posting, (ex: The host wantsa to let the players know some more details of what rooms to change in or where trhe courts are located at in the park), The number of players and goalies taking part in the game (ex: 2/10 players 2/2 goalies) and finally it will have the User that is hosting the game (ex: Chase, Raff, Reece).

## Table on the home page

The table on the home page has a list of all the games available to join that other hosts have posted or teams have published. The tables will show the primary aspects of the game like the sport type, skill level, date & time and the location. The elements in the list can be clicked on and they will bring the user to the next page **User** **Game Info.** The table will also have a filter that will affect the games that are on it. the user will be able to filter by sport type, skill level, date, time, etc.

## Create Button on the home page

The home page will also have a “Create” Button that will bring the user to a creation page where they will be able to create their own Game others can join. **User Game Create** will be the page which the user will end up on.

## Search Button on the home page

The search button will be unimplemented until later but it will allow users to look for specific games

# User Game Create Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/af080403-61d1-48d1-ad04-21ce29f118ef/Untitled.png)

The User Create Game Page will be for users to create and host their own games that will then be added to the games database. The page will dropdowns to select the sport type and skill level. The page will have a text box to input a description. The page will have a google maps search to add a specific park or address where the sport game will take place so that google cant authenticate it is a real address. Depending on the game there may be goalies needed so when the sport has goalies there will be an available spot to add the number of goalies required. There will be a slider that when switched to yes a new goalies section will appear where you can add the number of goalies needed. There will also be a spot to input a date and time in which the game will take place.

# User Game Info Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/20ea9a9f-fadb-4c05-8d02-78a6db798246/Untitled.png)

The User Game info Page will be accessed when the User presses on one of the games in the list on the home page. This page will show all the info for the game that was selected. The page will show all the information (sport type, date & time, skill level required, players needed, description, location). Where the location is there will be a google map under so that the users can check where the location is. At the bottom of the screen there will be 2 buttons, one “join” button that will register the player for this particular game, once the player is registered the amount of players needed will reduce. Some games may require the user to pay, if that is the case the user must pay the required amount for the game to join. The other button will be the “Host” button which when clicked on will bring the user to the **User Player Info Page** which is a page that has info about another user that was clicked on.

# User Friends Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/7bbd902a-c2c2-4ac7-bd0b-a1fe829efc3d/Untitled.png)

The Friends page will have a list of all the logged in users’ friends. There will be an invite button next to each friends name where they can be invited to games the logged in user is partaking in. (this will be implemented more later). if the friends are clicked on they will be brought to the **User Player Info Page** where they will see all the account info of their friends.

# User Player Info Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/655a202a-d54c-44be-929c-0c560ed12cb3/Untitled.png)

The Player Info Page will be opened whenever a user is viewing another users account. This page will show a link to the user’s instagram account, the number of the user’s friends, what sports the user plays, their favorite sport, the player’s teams they are apart of as well as the players different ratings when it comes to hosting games as well as consistency showing up to play. On this page you will also be able to Add this user as a friend if they are not already your friend or invite them to a game you are hosting or playing.

## User Inbox Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/21c6af0e-9708-4c92-93b2-dff3df0a7206/Untitled.png)

The User Inbox Page will be opened when the user clicks on the “Inbox” Tab in the Navigation bar. The User inbox Page will be the page where the user will be able to see all the invites from friends or other players sent to their inbox. If the user clicks on anyone of these invites the user will be brought to the “**User Game Info Page”** of the game they were invited to.

# User My Games Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/69de1141-a9b5-495d-b0dd-2bafb235e523/Untitled.png)

The “My Games” Page will be opened when the user clicks on the “My Games” Tab in the Navigation bar. This Page will show the User’s upcoming Games on the element list to the left and to the right will be an interactive table with Team games where the user needs to respond Yes or No to indicate their prescence. These 2 lists will show minimal data, only the sport and the dat and time. If any of these sport events are clicked on the User will be brought to the “**User Game Info Page”** where they will see all of the info of the game they clicked on.

# User My Account Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/66d63e1f-de0c-488a-a8d8-39538fcf6779/Untitled.png)

The “My Account” page will be opened when the user clicks on “Account” Tab in the Navigation bar. the account page will show the user all of their personal information, including email, phone number, instagram link tab, name, favorite sport, and a button to sync their google calendars with their sports account.

# Corporate side

Corporate accounts will have a different side of the website. Corporate accounts are accounts that have their own sports centers and need to organize and post their available bookings. These corporate accounts can add the amount of courts, rinks, fields, or play areas that they have available as well as the time slots that they can sell to normal user accounts to host on.

# Corporate Home Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/af7f5af1-a954-40eb-a1ca-a3a695520276/Untitled.png)

The Corporate User Home Page can be navigated to by going to the “home” tab in the navbar. On this page the corporate user will have the option to change between different rinks/courts they have at their facility and also change the month to see the availabilities left. The view will be a calendar and the days that are fully booked will be red, if their are free slots during that day it will be green with a number on it showing the number of available slots left.

# Corporate Day View Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/4a21e020-7639-468c-8090-fbd06149470e/Untitled.png)

The Corporate Day View Page will be opened when the corporate user clicks on a day in the calendar that’s green and has available bookings left. in this view there will be an element list that shows the bookings in their respective time slots. At the top of the page the corporate user can switch left to right and it will change to the previous or next day in the month that has available bookings. all of the elements on this page will have the information about the host, the host’s phone number and the price the host has payed. If there is no host in a time slot it will show “none” as the host who rented and the phone number will be empty, the corporate user will be able to change the rent price if there’s no renter for the time slot. To edit the details of these bookings in the time slots when the user clicks on one of the time slots it brings them to the “**Corporate Time Slot Edit Page”**

# Corporate Time Slot Edit Page

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/a43a9723-8e4b-4a6c-b01d-1243e95f57f5/9e845d2e-85a5-4c66-9caa-dd25f1a27595/Untitled.png)

The Corporate Time Slot Edit Page will pop up when the corporate user clicks on a time slot in the Day View Page. On this page the user will be able to see detailed information about the rented event. The corporate user also has the ability to change the price and other details if needed.

# Databases & Backend Objects

There will probably need to be multiple databases set up for this website which will include a database for storing users as well as a database for the games, rinks maybe? it will depend. For the Users it is possible to use firebase authentication that already has a backend system set up for user authentication etc. Chatgpt recommends ORM for object relational mapping. There is also the issue of when the user is authenticated should it be JWT(JSON Web Tokens) or Session-based (cookies) I have experience with cookies but JSON web tokens might be easier so worth checking.

## Account db objects

In the Account databse it will be used for authentication and storing users. I am unsure if the user authentication and databases are seperate but if they are I will have to see when I get there.

### User Object:

a user object will be made with the following structure:

User {

Username: string

Password: string ** I **dont remember how passswords are stored I think as hashed strings?\*\*

Age: Int

Instagram link? : String \*\* I dont know if I will implement this at the start of the app

User Id: Integer ( Used for sending and receiving invties)

host rating: float

player rating: float

consistency: float

Friends: User list

}

## Games DB

The games database will also use firebase and will entail a database of all the game obkects. The game will be the object visualized on the Users Home page when they are looking for games to join.

### Games Object

Game{

Sport Type: String

Date & Time: String

Description: string

skill level: string

location: String

Game Id: Int

Players: User List

HasCost: bool

Cost: Int

}

## Invites DB

Invites will have their own table as suggested by chat gpt to keep track of them and their Id’s as well as the information inside the invite.

### Invites Object

Invite {

Invite Id: int

SentFrom: User Id

SentTo: User Id

InviteRead: bool

Game: Game Id

}
