import Product from "./modules/classProduct.js";
import printProduct from "./modules/printProduct.js";
import {
	getFromLocalStorage,
	saveToLocalStorage,
} from "./modules/localStorage.js";
import printPurchaseAmount from "./modules/printPurchaseAmount.js";

const insertProductButton = document.getElementById("insert-button");

addEventListener("load", () => {
	const list = getFromLocalStorage();

	// Instancia array vazio no localStorage
	if (!list) {
		saveToLocalStorage([]);
		return;
	}

	// Imprime array do localStorage na lista
	if (list.length > 0) {
		list.forEach((e) => {
			printProduct(e);
		});
		printPurchaseAmount();
	}
});

insertProductButton.addEventListener("click", () => {
	const input = document.getElementById("insert-input");
	const list = getFromLocalStorage();
	const prod = new Product(input.value);
	let alreadyExist = false;

	if (!input.value || input.value.trim() == '') {
		alert("Por favor preencha o campo");
		input.value = ''
		return;
	}

	list.forEach((e) => {
		if (e.name == input.value) {
			alreadyExist = true;
		}
	});

	if (alreadyExist) {
		alert("Esse produto já existe na lista!");
		input.value = "";
		return;
	}

	printProduct(prod);

	list.push(prod);
	saveToLocalStorage(list);

	input.value = "";
});