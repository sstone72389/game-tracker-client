Links:
* [Deployed application](https://sstone72389.github.io/game-tracker-client/)
* [Back end deployed link](https://tranquil-coast-56887.herokuapp.com/)
* [Back end Repo](https://github.com/sstone72389/game-tracker-back-end)


Wireframes:
* [Main page](http://res.cloudinary.com/dfu4pwocw/image/upload/v1497533054/image1_u6hasv.jpg)
* [User Page](http://res.cloudinary.com/dfu4pwocw/image/upload/v1497194427/USER_WF_unzi84.jpg)

[Link to ERD](http://res.cloudinary.com/dfu4pwocw/image/upload/v1497533892/image1-1_hs2aqo.jpg)

App Screenshots: ![Game Asylum](http://res.cloudinary.com/dfu4pwocw/image/upload/v1497569096/Screen_Shot_2017-06-15_at_7.24.37_PM_bm5vst.png "Main Page")

![Game Asylum](http://res.cloudinary.com/dfu4pwocw/image/upload/v1498002814/Screen_Shot_2017-06-20_at_7.53.03_PM_pnaaea.png "Logged in")

![Game Asylum](http://res.cloudinary.com/dfu4pwocw/image/upload/v1497543994/Screen_Shot_2017-06-15_at_12.24.08_PM_czflaz.png "Content")

Purpose of app: A video game tracker, allowing users to make posts and track the progress of their gameplay. It will be used to upload videos along with posts to help manage games that have large maps. For example, you could take notes on where to find a secret item and upload a video to go with your post.

This project is a single page application containing user authentication (sign up, sign in, sign out and change password) that interacts with a custom API built with Rails. This app can create, read, update, and delete data in an SQL database to create a custom game-tracker.

Approach taken when building: Planning was key, here. I started by creating wireframes and user stories. The next step for me was to build a basic HTML/CSS template that will provide a responsive user experience. From there, the next step was to build the back-end so and test via CURL scripts to ensure functionality. Once confirmed, I was able to move to the front end and create proper client interactions to access the database.

URLs are validated with regualr expressions. You cannot input any type of link other than YouTube links and they must have a valid YouTube ID to be accepted. All of this is validted with regexp.

User Stories:
* As a user, I want to be able to login/signup
* As a user, I want to be able to change my password
* As a user, I want to be able to sign out
* As a user, I want to be able to make posts
* As a user, I want to be able to post YouTube videos
* As a user, I want to be able to delete my posts
* As a user, I want to be able to modify my posts (only text)

Technologies used:

HTML, CSS, JS, jQuery, JSON, AJAX, Git, GitHub, Grunt, Rails, Sass, Bootstrap, Handlebars, Ruby, Ruby on Rails, Rails Console, Node console(testing), Pry(testing).
