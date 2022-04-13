import { getFromLocalStorage, saveToLocalStorage } from "./localStorage.js";

const priceProduct = async (newPrice, productName) => {
	const array = getFromLocalStorage();

	array.forEach((e) => {
		if (e.name == productName) {
			e.price = newPrice;
		}
	});

	saveToLocalStorage(array);
};

export default priceProduct;
