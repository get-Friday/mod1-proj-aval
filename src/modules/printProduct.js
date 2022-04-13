import {
	getFromLocalStorage,
	saveToLocalStorage,
	updateCheckedAttribute,
} from "./localStorage.js";
import modalQuery from "./modalQuery.js";
import printPurchaseAmount from "./printPurchaseAmount.js";
import HTMLElement from "./classElement.js";
import buildHTML from "./buildHTML.js";

const printProduct = productList => {
	const uniqueId = Math.floor(Math.random() * 9999);
	const parentDiv = document.getElementById("list-container");
	const productContainer = document.createElement("div");

	const checkboxAttributes = [
		{ key: "type", value: "checkbox" },
		{ key: "value", value: productList.price },
		{ key: "id", value: `${uniqueId}checkbox` },
	];
	const checkbox = buildHTML(new HTMLElement("input", checkboxAttributes));

	const labelAttributes = [{ key: "for", value: `${uniqueId}button` }];
	const label = buildHTML(new HTMLElement("label", labelAttributes));

	const buttonAttributes = [
		{ key: "type", value: "button" },
		{ key: "id", value: `${uniqueId}button` },
	];
	const button = buildHTML(new HTMLElement("button", buttonAttributes));

	const spanAttributes = [{ key: "class", value: "chkbox" }];
	const span = buildHTML(new HTMLElement("span", spanAttributes));

	checkbox.addEventListener("change", () => {
		checkItem(uniqueId, productList);
	});

	button.innerHTML = "&times;";
	button.addEventListener("click", () => {
		removeProduct(productList.name, productContainer);
	});

	if (productList.checked) {
		checkbox.checked = true;
	}

	// div>label>(input:checkbox+span.chkbox)+button
	productContainer.appendChild(label);
	label.appendChild(checkbox);
	label.appendChild(span);
	label.append(productList.name);
	productContainer.appendChild(button);
	parentDiv.appendChild(productContainer);
};

const removeProduct = (productName, productHTMLElement) => {
	const array = getFromLocalStorage();
	const removedItem = array.filter((e) => e.name != productName);

	saveToLocalStorage(removedItem);
	printPurchaseAmount();
	productHTMLElement.remove();
};

const checkItem = (elementId, productObject) => {
	const checked = document.getElementById(`${elementId}checkbox`).checked;

	if (checked) {
		updateCheckedAttribute(productObject.name, true);
		modalQuery(productObject, elementId);
	} else {
		updateCheckedAttribute(productObject.name, false);
		printPurchaseAmount();
	}
};

export default printProduct;
