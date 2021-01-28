const { RESTDataSource } = require("apollo-datasource-rest");
const contentful = require("contentful");
// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: "developer_bookshelf",
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: "0b7f6x59a0"
// });
// // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client
//   .getEntry("5PeGS2SoZGSa4GuiQsigQu")
//   .then(entry => console.log(entry))
//   .catch(err => console.log(err));

class ContentfulAPI extends RESTDataSource {
  constructor() {
    super();
    this.client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "vcszj21qq600",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken:
        "52f972f2c0507ba5ca116835e6ea5026ecfdb0a85034e82a570e99d7d846b65f",
    });
    this.baseURL = "XXXXXXXX";
  }

  async getImagesForProduct({ contentfulEntryID }) {
    try {
      console.log("are you coming thro bro?", contentfulEntryID);
      if (!contentfulEntryID) return [];
      let entry = await this.client.getEntry(contentfulEntryID);
      let formatted = entry.fields.images.map((imgInfo) => {
        console.log("imginfi", imgInfo);
        return {
          id: contentfulEntryID,
          url: imgInfo.fields.file.url,
          contentType: imgInfo.fields.file.contentType,
        };
      });
      console.log("updated", formatted);
      return formatted;
    } catch (err) {
      console.log(err);
    }
  }

  getStaticData() {
    return [
      {
        id: "1",
        url:
          "https://images.unsplash.com/photo-1503481766315-7a586b20f66d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1335&q=80",
        contentType: "image/jpg",
      },
      {
        id: "2",
        url:
          "https://images.unsplash.com/photo-1488153074946-0d3b1bcd029c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        contentType: "image/jpg",
        fileName: "coffee_on_towel.jpg",
      },
      {
        id: "3",
        url:
          "https://images.unsplash.com/photo-1589407355263-e6a6112cc87a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1127&q=80",
        contentType: "image/jpg",
        fileName: "coffee_in_retail_bag.jpg",
      },
      {
        id: "4",
        url:
          "https://images.unsplash.com/photo-1533087355953-a4a88874bd1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        contentType: "image/jpg",
        fileName: "co_bag.jpg",
      },
    ];
  }
}

module.exports = ContentfulAPI;
