import { getFromLocalStorage, saveToLocalStorage } from "./localStorage.js";

const priceProduct = async (newValue, productName) => {
	const array = getFromLocalStorage();

	array.forEach((e) => {
		if (e.name == productName) {
			e.price = newValue;
		}
	});

	saveToLocalStorage(array);
};

export default priceProduct;
