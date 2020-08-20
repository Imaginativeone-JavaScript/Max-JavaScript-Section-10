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

class ElementAttribute {
	constructor(attrName, attrValue) {
		this.name = attrName;
		this.value = attrValue;
	}
}
class Component {
	createRootElement(tag, cssClasses, attributes) {
		const rootElement = documentCreateElement(tag);

		if (cssClasses) {
			rootElement.className = cssClasses;
		}

		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				rootElement.setAttribute(attr.name, attr.value);
			}
		}
	}
}

class ShoppingCart {
	items = [];

	set cartItems(value) {
		this.items = value;
		this.totalOutput.innerHTML = `<h2>Total \$${this.totalAmount.toFixed(
			2
		)}</h2>`;
	}

	// Getters and Setters
	// get totalAmount() {
	// 	const sum = this.items.reduce((previousValue, currentItem) => {
	// 		return previousValue + currentItem.price;
	// 	}, 0);
	//  return sum;
	// }
	get totalAmount() {
		const sum = this.items.reduce(
			(prevValue, currItem) => prevValue + currItem.price,
			0
		);
		return sum;
	}

	addProduct(product) {
		// this.items.push(product);
		const updatedItems = [...this.items];
		updatedItems.push(product);
		this.cartItems = updatedItems;
	}

	render() {
		const cartEl = document.createElement("section");
		cartEl.innerHTML = `
			<h2>Total \$${0}</h2>
			<button>Order Now!</button>
		`;
		cartEl.className = "cart"; // given by instructor
		this.totalOutput = cartEl.querySelector("h2"); // dynamically adding a new property
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
		App.addProductToCart(this.product);
	}

	render() {
		const prodEl = document.createElement("li");
		prodEl.className = "product-item";
		prodEl.innerHTML = `
			<div>
				<img src="${this.product.imageUrl}" alt="${this.product.title}">
				<div class="product-item__content">
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
			price: 29.99,
			description: "A soft pillow",
		},
		{
			title: "A Carpet",
			imageUrl: "assets/images/carpet.jpg",
			price: 89.99,
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

		console.log(this);

		// const cart = new ShoppingCart();
		this.cart = new ShoppingCart();

		console.log(this.cart);

		const cartEl = this.cart.render(); // update all the cart(s)

		const productList = new ProductList();
		const prodListEl = productList.render();

		renderHook.append(cartEl);
		renderHook.append(prodListEl);
	}
}

class App {
	static cart; // Explicit declaration for readability

	static init() {
		const shop = new Shop();
		shop.render();

		// "this" refers to the CLASS ITSELF, not to an instance of the class

		this.cart = shop.cart; // The shop, which is a static (object) property of App, assigns its shop.cart property
		// to the App.cart property. This assignment serves to "link" this particular Shop with the static App.
	}

	static addProductToCart(product) {
		this.cart.addProduct(product); // Proxy method, can be called to access Shop methods
	}
}

App.init();
// Take a look at the ShoppingCart addProduct method
