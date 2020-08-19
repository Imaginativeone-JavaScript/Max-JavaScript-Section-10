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

console.log("Product", new Product());

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
}

const productList = {
	render() {
		const renderHook = document.getElementById("app");
		const prodList = document.createElement("ul");

		prodList.className = "product-list";

		for (const prod of this.products) {
			const prodEl = document.createElement("li");
			prodEl.className = "product-item";
			prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}">
          <div class="product=item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
			prodList.append(prodEl);
		}

		renderHook.append(prodList);
	},
};

productList.render();
