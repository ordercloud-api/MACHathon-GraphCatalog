# MACHathon-GraphCatalog
Query your product catalog's commerce data and static content through one GraphQL gateway API.

## Tools we're using 
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) (GraphQL Implementation)
- [Ordercloud](https://ordercloud.io/) (Headless Ecommerce Platform, MACH alliance member)
- [Contentful](https://www.contentful.com) (Headless Content Management, MACH alliance member)
- [Node JS](https://nodejs.org/en/about/)
- [React](https://reactjs.org/)
## Run Server
1. Clone this repo `git clone https://github.com/ordercloud-api/MACHathon-GraphCatalog.git`
2. Install dependencies in `./server` with `npm install`
3. `npm start`
4. Navigate to [http://localhost:4000/](http://localhost:4000/) where you shoud see Apollo GraphQL Playground ([Docs](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/))
5. Try out some API requests!

## Run example client
1. First, run the server
2. Install dependencies in `./client` with `npm install`
3. `npm start`
4. Navigate to [http://localhost:3000/](http://localhost:3000/)

## Account Credentials

We've put our sandbox account credentials in `./server/src/config.js` in order to make it easy to get up and running quickly. To connect your own Ordercloud or Contentful account, edit the values in that file. 

