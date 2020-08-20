class Product {
	// title = "DEFAULT"; // Optional definitions of fields
	// imageUrl;
	// description;
	// price;

	constructor(title, image, desc, price) {
		this.title = title;
		this.imageUrl = image;
		this.description = desc;
		this.price = price;
	}
}

console.log("Product", new Product()); // for viewing the fields (at first)

class ProductItem {
	// class "Product" lays out the template. This one renders.
	constructor(product) {
		this.product = product;
	}

	render() {
		const prodEl = document.createElement("li");
		prodEl.className = "product-item";
		prodEl.innerHTML = `
			<div>
				<img src="${this.product.imageUrl}" alt="${this.product.title}">
				<div class="product=item__content">
					<h2>${this.product.title}</h2>
					<h3>\$${this.product.price}</h3>
					<p>${this.product.description}</p>
					<button>Add to Cart</button>
				</div>
			</div>
		`;
		return prodEl;
	}
}

class ProductList {
	products = [
		new Product("A Title", "assets/images/pillow.jpg", "A Description", 19.99),
		{
			title: "A Pillow",
			imageUrl: "assets/images/pillow.jpg",
			price: "19.99",
			description: "A soft pillow",
		},
		{
			title: "A Carpet",
			imageUrl: "assets/images/carpet.jpg",
			price: "89.99",
			description: "A carpet which you might like - or not",
		},
	];

	constructor() {}

	render() {
		const renderHook = document.getElementById("app");
		const prodList = document.createElement("ul");

		prodList.className = "product-list";

		for (const prod of this.products) {
			const productItem = new ProductItem(prod);
			const prodEl = productItem.render();
			prodList.append(prodEl);
		}

		renderHook.append(prodList);
	}
}

const productList = new ProductList();
productList.render();
