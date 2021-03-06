import {
	getFromLocalStorage,
	saveToLocalStorage,
	updateCheckedAttribute,
} from "./localStorage.js";
import modalQuery from "./modalQuery.js";
import printPurchaseAmount from "./printPurchaseAmount.js";
import HTMLElement from "./classElement.js";
import buildHTML from "./buildHTML.js";

const printProduct = (productList) => {
	const uniqueId = Math.floor(Math.random() * 9999);
	const parentUl = document.getElementById("products-list");

	const productListItemAttributes = [{ key: "id", value: `${uniqueId}-${productList.name}` }, { key: "class", value: "list-item" }];
	const productListItem = buildHTML(new HTMLElement("li", productListItemAttributes));

	const checkboxAttributes = [
		{ key: "type", value: "checkbox" },
		{ key: "value", value: productList.price },
		{ key: "id", value: `${uniqueId}checkbox` },
	];
	const checkbox = buildHTML(new HTMLElement("input", checkboxAttributes));

	const label = buildHTML(new HTMLElement("label", []));

	const buttonAttributes = [
		{ key: "type", value: "button" },
		{ key: "id", value: `${uniqueId}button` },
	];
	const button = buildHTML(new HTMLElement("button", buttonAttributes));

	const spanAttributes = [{ key: "class", value: "chkbox" }];
	const span = buildHTML(new HTMLElement("span", spanAttributes));

	checkbox.addEventListener("change", () => {
		checkItem(label, uniqueId, productList);
	});

	button.innerHTML = "&times;";
	button.addEventListener("click", () => {
		removeProduct(productList.name, productListItem);
	});

	if (productList.checked) {
		checkbox.checked = true;
		label.style.textDecoration = "line-through";
	}

	// ul>li>(label>(input:checkbox+span.chkbox))+button
	productListItem.appendChild(label);
	label.append(productList.name);
	label.appendChild(checkbox);
	label.appendChild(span);
	productListItem.appendChild(button);
	parentUl.appendChild(productListItem);
};

const removeProduct = (productName, productHTMLElement) => {
	const array = getFromLocalStorage();
	const removedItem = array.filter((e) => e.name != productName);

	saveToLocalStorage(removedItem);
	printPurchaseAmount();
	productHTMLElement.remove();
};

const checkItem = (label, elementId, productObject) => {
	const checked = document.getElementById(`${elementId}checkbox`).checked;

	if (checked) {
		label.style.textDecoration = "line-through";
		updateCheckedAttribute(productObject.name, true);
		modalQuery(productObject, elementId);
	} else {
		label.style.textDecoration = "none";
		updateCheckedAttribute(productObject.name, false);
		printPurchaseAmount();
	}
};

export default printProduct;
