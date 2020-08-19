const productList = {
	products: [
		{
			title: "A Pillow",
			imageUrl:
				"https://www.maxpixel.net/Sleep-Bedtime-Pillow-Bedroom-Dream-Comfortable-1738023",
			price: "19.99",
			description: "A soft pillow",
		},
		{
			title: "A Carpet",
			imageUrl:
				"https://commons.wikimedia.org/wiki/File:Onappookkalam_Pookkalam_Flower_carpet_Nithyananda_Ashram_Kanhangad_2019.jpg",
			price: "89.99",
			description: "A carpet which you might like - or not",
		},
	],

	render() {
		const renderHook = document.getElementById("app");
		const prodList = document.createElement("ul");

		prodList.className = "product-list";

		for (const prod of this.products) {
			const prodEl = document.createElement("li");
			prodEl.className = "product-item";
			prodEl.innerHTML = `
      
      `;
			prodList.append(prodEl);
		}

		renderHook.append();
	},
};
