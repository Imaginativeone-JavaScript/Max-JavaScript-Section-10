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

// console.log("Product", new Product()); // for viewing the fields (at first)

class ShoppingCart {
	items = [];

	render() {
		const cartEl = document.createElement("section");
		cartEl.innerHTML = `
			<h2>Total \$${0}</h2>
			<button>Order Now!</button>
		`;
		cartEl.className = "cart"; // given by instructor
		return cartEl;
	}
}

class ProductItem {
	// class "Product" lays out the template. This one renders.
	constructor(product) {
		this.product = product;
	}

	addToCart() {
		console.log("Adding product to cart...");
		console.log(this.product);
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

		const addCartButton = prodEl.querySelector("button");
		addCartButton.addEventListener("click", this.addToCart.bind(this));
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
		const prodList = document.createElement("ul");

		prodList.className = "product-list";

		for (const prod of this.products) {
			const productItem = new ProductItem(prod);
			const prodEl = productItem.render();
			prodList.append(prodEl);
		}
		return prodList;
	}
}

class Shop {
	render() {
		const renderHook = document.getElementById("app");

		const cart = new ShoppingCart();
		const cartEl = cart.render();

		const productList = new ProductList();
		const prodListEl = productList.render();

		renderHook.append(cartEl);
		renderHook.append(prodListEl);
	}
}

const shop = new Shop();
shop.render();
