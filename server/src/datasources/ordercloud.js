const { RESTDataSource } = require('apollo-datasource-rest');

class OrdercloudAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'XXXXXXXX';
  }

  async getAllProducts() {
    const response = this.getStaticData();
    return Array.isArray(response.Items)
      ? response.Items.map(product => this.productReducer(product))
      : [];
  }

  productReducer(product) {
    return {
        id: product.ID,
        name: product.Name,
        description: product.Description,
        quantityAvailable: product.Inventory.QuantityAvailable,
    };
  }

  getStaticData() {
      return {
          Items: [	{
			"OwnerID": "SShyjwitRe4ibpum",
			"DefaultPriceScheduleID": "bar_towels",
			"AutoForward": false,
			"ID": "bar_towels",
			"Name": "Bar Towels (Pack of 8)",
			"Description": "Pack of 8 premium bar towels.",
			"QuantityMultiplier": 1,
			"ShipWeight": 0,
			"ShipHeight": 0,
			"ShipWidth": 0,
			"ShipLength": 0,
			"Active": true,
			"SpecCount": 0,
			"VariantCount": 0,
			"ShipFromAddressID": null,
			"Inventory": {
				"Enabled": false,
				"NotificationPoint": 0,
				"VariantLevelTracking": false,
				"OrderCanExceed": false,
				"QuantityAvailable": 0,
				"LastUpdated": "2020-11-16T17:29:14.013+00:00"
			},
			"DefaultSupplierID": null,
			"xp": {
				"Brand": "Uline",
				"Size": "10x10in"
			}
		},
		{
			"OwnerID": "SShyjwitRe4ibpum",
			"DefaultPriceScheduleID": "barista_apron",
			"AutoForward": false,
			"ID": "barista_apron",
			"Name": "Barista Apron",
			"Description": "Our barista aprons are the perfect mix of practicality and fashion.",
			"QuantityMultiplier": 1,
			"ShipWeight": 0,
			"ShipHeight": 0,
			"ShipWidth": 0,
			"ShipLength": 0,
			"Active": true,
			"SpecCount": 0,
			"VariantCount": 0,
			"ShipFromAddressID": null,
			"Inventory": {
				"Enabled": false,
				"NotificationPoint": 0,
				"VariantLevelTracking": false,
				"OrderCanExceed": false,
				"QuantityAvailable": 0,
				"LastUpdated": "2020-11-16T17:28:58.233+00:00"
			},
			"DefaultSupplierID": null,
			"xp": {
				"Brand": "Uline",
				"Size": "One-Size"
			}
		},
		{
			"OwnerID": "SShyjwitRe4ibpum",
			"DefaultPriceScheduleID": "coffee_cups",
			"AutoForward": false,
			"ID": "coffee_cups",
			"Name": "Coffee Cups",
			"Description": "12oz Branded Coffee Cups",
			"QuantityMultiplier": 1,
			"ShipWeight": 0,
			"ShipHeight": 0,
			"ShipWidth": 0,
			"ShipLength": 0,
			"Active": true,
			"SpecCount": 0,
			"VariantCount": 0,
			"ShipFromAddressID": null,
			"Inventory": {
				"Enabled": false,
				"NotificationPoint": 0,
				"VariantLevelTracking": false,
				"OrderCanExceed": false,
				"QuantityAvailable": 0,
				"LastUpdated": "2020-11-16T17:28:47.857+00:00"
			},
			"DefaultSupplierID": null,
			"xp": {
				"Brand": "Uline",
				"Size": "12oz"
			}
		},
		{
			"OwnerID": "SShyjwitRe4ibpum",
			"DefaultPriceScheduleID": "croissants",
			"AutoForward": false,
			"ID": "croissants",
			"Name": "Croissants (Pack of 8)",
			"Description": "Pack of 8 French style croissants.",
			"QuantityMultiplier": 1,
			"ShipWeight": 0,
			"ShipHeight": 0,
			"ShipWidth": 0,
			"ShipLength": 0,
			"Active": true,
			"SpecCount": 0,
			"VariantCount": 0,
			"ShipFromAddressID": null,
			"Inventory": {
				"Enabled": false,
				"NotificationPoint": 0,
				"VariantLevelTracking": false,
				"OrderCanExceed": false,
				"QuantityAvailable": 0,
				"LastUpdated": "2020-11-16T17:29:17.5+00:00"
			},
			"DefaultSupplierID": null,
			"xp": {
				"Brand": "Northern Lights Coffee"
			}
		},
		{
			"OwnerID": "SShyjwitRe4ibpum",
			"DefaultPriceScheduleID": null,
			"AutoForward": false,
			"ID": "espresso_tamper",
			"Name": "Espresso Tamper",
			"Description": "A premium convex espresso tamper.",
			"QuantityMultiplier": 1,
			"ShipWeight": 0,
			"ShipHeight": 0,
			"ShipWidth": 0,
			"ShipLength": 0,
			"Active": true,
			"SpecCount": 0,
			"VariantCount": 0,
			"ShipFromAddressID": null,
			"Inventory": {
				"Enabled": false,
				"NotificationPoint": 0,
				"VariantLevelTracking": false,
				"OrderCanExceed": false,
				"QuantityAvailable": 0,
				"LastUpdated": "2020-11-16T17:29:01.53+00:00"
			},
			"DefaultSupplierID": null,
			"xp": {
				"Brand": "Benicci"
			}
		},
		{
			"OwnerID": "SShyjwitRe4ibpum",
			"DefaultPriceScheduleID": "ground_coffee_beans",
			"AutoForward": false,
			"ID": "ground_coffee_beans",
			"Name": "Ground Coffee Beans",
			"Description": "16oz bag of our freshly ground coffee beans. Our grind is optimal for pour over coffee brewing.",
			"QuantityMultiplier": 1,
			"ShipWeight": 0,
			"ShipHeight": 0,
			"ShipWidth": 0,
			"ShipLength": 0,
			"Active": true,
			"SpecCount": 0,
			"VariantCount": 0,
			"ShipFromAddressID": null,
			"Inventory": {
				"Enabled": false,
				"NotificationPoint": 0,
				"VariantLevelTracking": false,
				"OrderCanExceed": false,
				"QuantityAvailable": 0,
				"LastUpdated": "2020-11-16T17:28:54.623+00:00"
			},
			"DefaultSupplierID": null,
			"xp": {
				"Brand": "Northern Lights Coffee",
				"Size": "1lb"
			}
		},
		{
			"OwnerID": "SShyjwitRe4ibpum",
			"DefaultPriceScheduleID": "vanilla_flavoring_syrup",
			"AutoForward": false,
			"ID": "vanilla_flavoring_syrup",
			"Name": "Vanilla Flavoring Syrup",
			"Description": "A premium syrup used for flavoring beverages.",
			"QuantityMultiplier": 1,
			"ShipWeight": 0,
			"ShipHeight": 0,
			"ShipWidth": 0,
			"ShipLength": 0,
			"Active": true,
			"SpecCount": 0,
			"VariantCount": 0,
			"ShipFromAddressID": null,
			"Inventory": {
				"Enabled": false,
				"NotificationPoint": 0,
				"VariantLevelTracking": false,
				"OrderCanExceed": false,
				"QuantityAvailable": 0,
				"LastUpdated": "2020-11-16T17:29:04.39+00:00"
			},
			"DefaultSupplierID": null,
			"xp": {
				"Brand": "Torani",
				"Size": "750mL"
			}
		},
		{
			"OwnerID": "SShyjwitRe4ibpum",
			"DefaultPriceScheduleID": "white_chocolate_flavoring",
			"AutoForward": false,
			"ID": "white_chocolate_flavoring",
			"Name": "White Chocolate Flavoring",
			"Description": "A premium white chocolate flavoring for use in food and beverage.",
			"QuantityMultiplier": 1,
			"ShipWeight": 0,
			"ShipHeight": 0,
			"ShipWidth": 0,
			"ShipLength": 0,
			"Active": true,
			"SpecCount": 0,
			"VariantCount": 0,
			"ShipFromAddressID": null,
			"Inventory": {
				"Enabled": false,
				"NotificationPoint": 0,
				"VariantLevelTracking": false,
				"OrderCanExceed": false,
				"QuantityAvailable": 0,
				"LastUpdated": "2020-11-16T17:29:11.093+00:00"
			},
			"DefaultSupplierID": null,
			"xp": {
				"Brand": "Torani",
				"Size": "750mL"
			}
		},
		{
			"OwnerID": "SShyjwitRe4ibpum",
			"DefaultPriceScheduleID": "whole_coffee_beans",
			"AutoForward": false,
			"ID": "whole_coffee_beans",
			"Name": "Whole Coffee Beans",
			"Description": "16oz bag of our freshly roasted coffee beans.",
			"QuantityMultiplier": 1,
			"ShipWeight": 0,
			"ShipHeight": 0,
			"ShipWidth": 0,
			"ShipLength": 0,
			"Active": true,
			"SpecCount": 0,
			"VariantCount": 0,
			"ShipFromAddressID": null,
			"Inventory": {
				"Enabled": false,
				"NotificationPoint": 0,
				"VariantLevelTracking": false,
				"OrderCanExceed": false,
				"QuantityAvailable": 0,
				"LastUpdated": "2020-11-16T17:28:51.92+00:00"
			},
			"DefaultSupplierID": null,
			"xp": {
				"Brand": "Northern Lights Coffee",
				"Size": "1lb"
			}
		}]
      }
  }
}

module.exports = OrdercloudAPI