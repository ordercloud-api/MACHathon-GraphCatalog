module.exports = {
    Query: {
      products: (_, __, { dataSources }) =>
        dataSources.ordercloudAPI.getAllProducts(),
    },
    Product: {
        images: (product, _, { dataSources }) => 
          dataSources.contentfulAPI.getImagesForProduct({ productID: product.id}),
    }
  };