const { RESTDataSource, RequestOptions } = require("apollo-datasource-rest");
class OrdercloudAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://sandboxapi.ordercloud.io/";
  }

  willSendRequest(request) {
    if (this.context.token) {
      request.headers.set("Authorization", "bearer " + this.context.token);
    } else {
      request.headers.set("Content-Type", "text/plain");
    }
  }

  async getAllProducts() {
    if (!this.context.token) {
      await this.getAuthToken();
    }
    return await this.getAllOCProducts();
  }

  async getAuthToken() {
    const roles = ["ProductAdmin", "PriceScheduleAdmin"];
    const clientID = "533320C2-623E-4E70-B96A-7D16F79F60EE";
    const clientSecret = "super-secret-and-secure-client-secret-key";
    const authBody = `client_id=${clientID}&grant_type=client_credentials&client_secret=${clientSecret}&scope=${roles.join(
      " "
    )}`;
    const authResponse = await this.post("oauth/token", authBody);
    this.context.token = authResponse.access_token;
  }

  productReducer(product) {
    return {
      id: product.ID,
      name: product.Name,
      description: product.Description,
      quantityAvailable: product.Inventory.QuantityAvailable,
      contentfulEntryID: product.xp?.contentfulEntryID,
    };
  }

  async getAllOCProducts() {
    const response = await this.get("v1/products");
    const ocProducts = Array.isArray(response.Items)
      ? response.Items.map((product) => this.productReducer(product))
      : [];
    return ocProducts;
  }

  async getPriceForProduct(productID) {
    if (productID == null) {
      return null;
    }
    try {
      var priceSchedule = await this.get("v1/priceschedules/" + productID);
    } catch {
      return null; // if there is no price schedule with id matching the productId
    }
    if (
      Array.isArray(priceSchedule.PriceBreaks) &&
      priceSchedule.PriceBreaks.length > 0
    ) {
      return priceSchedule.PriceBreaks[0].Price;
    }
    return null;
  }
}

module.exports = OrdercloudAPI;
