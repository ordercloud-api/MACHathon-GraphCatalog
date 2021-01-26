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
                url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60",
                contentType: "image/jpg",
                fileName: "coffee_in_stages_of_preparation.jpg"
          },
          {
                id: "2",
                url: "https://images.unsplash.com/photo-1561176389-d3c338a11434?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
                contentType: "image/jpg",
                fileName: "coffee_beans_in_a_line.jpg"
          },
          {
                id: "3",
                url: "https://images.unsplash.com/photo-1589407355263-e6a6112cc87a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1127&q=80",
                contentType: "image/jpg",
                fileName: "coffee_in_retail_bag.jpg"
          },
      ];
  }
}

module.exports = ContentfulAPI;