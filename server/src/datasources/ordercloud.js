const { RESTDataSource, RequestOptions } = require("apollo-datasource-rest");
class OrdercloudAPI extends RESTDataSource {
	constructor(config) {
		super();
		this.baseURL = config.orderCloud.baseURL;
		this.config = config;
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
		const roles = this.config.orderCloud.roles;
		const clientID = this.config.orderCloud.clientID;
		const clientSecret = this.config.orderCloud.clientSecret;
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
