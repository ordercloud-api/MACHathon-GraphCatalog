const { RESTDataSource } = require('apollo-datasource-rest');

class ContentfulAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'XXXXXXXX';
  }

  async getImagesForProduct({ productID }) {
    return this.getStaticData();
  }

  getStaticData() {
      return [
          {
                id: "1",
                url: "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80",
                contentType: "image/jpg",
                fileName: "coffee_in_cup.jpg"
          },
          {
                id: "2",
                url: "https://images.unsplash.com/photo-1488153074946-0d3b1bcd029c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                contentType: "image/jpg",
                fileName: "coffee_on_towel.jpg"
          },
          {
                id: "3",
                url: "https://images.unsplash.com/photo-1589407355263-e6a6112cc87a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1127&q=80",
                contentType: "image/jpg",
                fileName: "coffee_in_retail_bag.jpg"
          },
          {
                id: "4",
                url: "https://images.unsplash.com/photo-1533087355953-a4a88874bd1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                contentType: "image/jpg",
                fileName: "co_bag.jpg"
          },
      ];
  }
}

module.exports = ContentfulAPI;