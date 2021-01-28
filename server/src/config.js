const config = {
    orderCloud: {
        baseURL: "https://sandboxapi.ordercloud.io/",
        roles: ["ProductAdmin", "PriceScheduleAdmin"],
        clientID: "533320C2-623E-4E70-B96A-7D16F79F60EE",
        clientSecret: "super-secret-and-secure-client-secret-key"

    },
    contentful: {
        // This is the space ID. A space is like a project folder in Contentful terms
        space: "vcszj21qq600",
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken:
          "52f972f2c0507ba5ca116835e6ea5026ecfdb0a85034e82a570e99d7d846b65f",
      }
   };
   module.exports = config;