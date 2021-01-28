module.exports = {
  Query: {
    products: (_, __, { dataSources }) =>
      dataSources.ordercloudAPI.getAllProducts(),
  },
  Product: {
    images: (product, _, { dataSources }) =>
      dataSources.contentfulAPI.getImagesForProduct({
        contentfulEntryID: product.contentfulEntryID,
      }),
    price: (product, _, { dataSources }) =>
      dataSources.ordercloudAPI.getPriceForProduct(product.id),
  },
};
