# Jobby

## Description

Job-board like website to advertise job offers and demands.

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **events list** - As a user I want to see all the events available so that I can choose which ones I want to attend
- **events create** - As a user I want to create an event so that I can invite others to attend
- **events detail** - As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend
- **event attend** - As a user I want to be able to attend to event so that the organizers can count me in

## Backlog

List of other features outside of the MVPs scope

User profile:

Geo Location:

Homepage

- ...

## ROUTES:

    - IF NOT LOGGED IN:

- GET /
  - renders index.hbs
- GET /auth/signup
  - renders signup.hbs
- POST /auth/signup
  - body:
    - name
    - city
    - email
    - password
- GET /auth/login
  - renders login.hbs
- POST /auth/login
  - body:
    - email
    - password
- POST /auth/logout

  - body: (empty)

    - ONLY WHEN LOGGED IN:

- GET /posting/result
  - renders post-results.hbs
- GET /posting/new
  - renders post-form.hbs
- POST /posting/new
  - body:
    - title
    - description
    - location
    - date
    - adress
    - phoneNumber
    - insurance
    - hourlyFee
    - image
- GET /posting/view
  - renders post.hbs
- GET /posting/edit
  - renders edit-post.hbs
- POST /posting/edit
  - body:
    - title
    - description
    - location
    - date
    - adress
    - phoneNumber
    - insurance
    - hourlyFee
    - image
- POST /posting/delete
  - body: (empty)
  - redirects to profile.hbs
- GET /profile
  - renders profile.hbs
- GET /profile/edit
  - renders edit-profile.hbs
- POST /profile/edit
  - body:
    - firstName
    - lastName
    - location
    - email
    - image
- GET /message/inbox
  - renders inbox.hbs
- GET /message/new
  - renders write-message.hbs

## Models

User model

```
firstName: String,
lastName: String,
location: [ENUM], required
image: String,
email: String, required, unique
password: String, required
posting: [String]



```

Posting model

```

title: String, required
description: String, required
location: [ENUM], required
date: Date, default
adress: String, required
phoneNumber: String
insurance: [ENUM]
hourlyFee: String
image: String

```

## Links

http://api.dataatwork.org/
https://fakerapi.it/
https://pipl.ir/

### Trello

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Repository Link](https://github.com/Praa199/Jobby.git)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
