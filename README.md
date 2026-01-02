# Fast React Pizza

It is a pizza app that allows the user to look into the menu, add pizzas to the cart, set an order, and track this order until it arrives.

created: 17/12/2025

## Table of contents

- [Overview](#overview)
  - [Functionallity](#Functionallity)
  - [Screenshot](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Functionallity

Users should be able to:

- Enter his name for the order
- Surf the menu for pizzas
- Add pizzas to the cart with the quantity that he needs
- Change the quantity from the cart or from the menu
- Empty the card
- Confirm the order by providing the phone number and the address
- Choose to get his exact address fetched
- Set his order as priority even after confirming the order
- Search for his order so he can track its estimating time.

### Screenshots

![](./Project%20screenshots/Screenshot%202026-01-01%20181403.png)
![](./Project%20screenshots/Screenshot%202026-01-01%20181415.png)
![](./Project%20screenshots/Screenshot%202026-01-01%20181432.png)
![](./Project%20screenshots/Screenshot%202026-01-01%20181507.png)
![](./Project%20screenshots/Screenshot%202026-01-01%20181519.png)

## My process

### Built with

- React
- React Router
- Redux toolkit
- CSS Tailwind
- Reverse Geocoding

### What I learned

- How to perfectly organize of the project using the redux toolkit (Store,slices and provider)
- How to handle pages using non-componential browser router, applying the (actions/loaders) concept
- Using the "Form" component provided by the react router to handle the submit order form, and validating the recived data provided by the user
- Updating existing data using the useFetcher react hook
- Applying a loader and an error handler to the whole project instead of a handler for each page/component
- How to use CSS tailwind to styles the whole app and make reusable components

### Continued development

I'd like to implement more features, like saving the users to the database, creating a full functional users accounts system.

### Useful resources

- [Jonas Schmedtman](https://www.udemy.com/user/jonasschmedtmann)

## Author

- Github - https://github.com/majedJh/
