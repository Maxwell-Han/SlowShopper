_Good things come w' sloths_

![The Slow Shopper](https://grace-slothpper.herokuapp.com/img/sloth-md.gif)

## Intro

The Slow Shopper is an E-Commerce application built by Team Sloth -- Nes Martinez, Harry Prevor, Maxwell Han and Mercedes Madanire -- at Fullstack Academy on March 2020.

Looking to mix up a backend with `express`/`sequelize` and a frontend with
`react`/`redux`? That's `The Slow Shopper`!

## Tech Stack

* [AWS](https://aws.amazon.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* AWS RDS and [PostgreSQL](https://www.postgresql.org/)
* [Sequelize](https://sequelize.org/)
* [React](https://facebook.github.io/react/)
* [Redux](https://redux.js.org/)
* [Stripe](https://stripe.com/)
* [sweetalert](https://sweetalert2.github.io/)
* [Webpack](https://webpack.js.org/)
* [Material UI](https://https://v2.grommet.io/)

## Setup

===How to Run===
First, install the latest versions of `node` and `npm` from [nodejs.org](https://www.nodejs.org).

Then, from the command line, run:

```
git clone https://github.com/Maxwell-Han/SlowShopper.git
cd SlowShopper
npm install
npm run seed
npm run start-dev
```

The webapp should now be accessible from http://localhost:8080/.

## Features

### Stripe Checkout:

* The Slow Shopper has a built-in Stripe Checkout feature. Users are able to purchase via credit card; authorization tokens are sent through Stripe’s API keys, to Slothpper’s Stripe Dashboard. Stripe Checkout is integrated with the Orders on our website: when a customer checkout through Stripe, orders are added to their history. This will be essential for merging Stripe’s Dashboard info with our database.

### Google Authentication:

* In addition to creating a local account via the Sign Up sheet, users are able to use their Google accounts to create a The Slow Shopper account. Once a user has created a new account through Google, functionality remains identical as creating a local account.

### Notifications:

* The Slow Shopper has toast notifications enabled throughout the site to enable a good user experience. For example, when a user has logged in, or logged out, a simple notification enhances the experience. Additionally, cart functionality has toast notifications enabled, for adding and removing products. Throughout the site, simple user-end alerts are enabled, such as whether a user already exists (when signing up), if a user has tried to purchase more items than the quantity allows, or if a user input the wrong password at login.

### Administrative Functionality:

* The ability to perform special actions as a shop owner are enabled through conditionally rendering admin components based on a user’s authorization. Forms for adding new products, updating existing products, managing user cart items, and displays for viewing sales data are provided. These views are additionally protected at the Route definition level using React and React-Router-Dom.

### Backend protections:

* User data security is addressed through the use of auth and custom middleware functions in Express routes. Users can only access their own data while Admins can see all. Special cases such as unregistered guests adding items to an order are also permitted.

### Inventory Management:

* The situation where users place orders where the items are not in stock are addressed on the backend. Sequelize model methods enable easy query building to process requested item amounts against the actual stock and will prevent invalid orders from being placed. In the case of valid order requests, the database updates the product quantity reflecting the amount remaining after a purchase is made.

### Current Product Display:

* Making use of an actively managed inventory, singular product pages render selection options that prevent users from adding more items than they should. If items are not in stock, no items will show.

### Pagination and Filtering on Products:

* These features are enabled via utility methods defined in React components. Query-String simplifies parsing the URL where product selection is specified. Large numbers of products are handled through pagination where page navigation options are provided.

### QueryString

* The pagination is built with querystring module for parsing and formatting URL query strings.

## Design

### UX/ UI and Design

* View the screens of the web app for the Slothpper eCommerce store. The requirements for the user stories are listed on Google Docs. The look and feel guide including colors and layout is designed on a Figma board. The styling and user experience is built with CSS, and Flexbox.
  Javascript Libraries, Slothpper is built with multiple Javascript libraries: SweetAlert, Moment, QueryString, and Material-UI.

### SweetAlert

* We use SweetAlert for toast messages. Toasts provide simple feedback about user operations in a small popup for the current activity to remain visible and interactive.

### Moment

* The dates are displayed beautifully with momentjs

### Material-UI

* We plan to build out new interaction patterns with Material-UI, a popular React UI framework to unify React and Material Design.
