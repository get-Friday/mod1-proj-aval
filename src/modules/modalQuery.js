import { updateCheckedAttribute } from "./localStorage.js";
import priceProduct from "./priceProduct.js";
import printPurchaseAmount from "./printPurchaseAmount.js";
import HTMLElement from "./classElement.js";
import buildHTML from "./buildHTML.js";

const modalQuery = (product, uniqueId) => {
	const modalDivAttributes = [{ key: "id", value: "modal" }];
	const modalDiv = buildHTML(new HTMLElement("div", modalDivAttributes));

	const contentDivAttributes = [{ key: "class", value: "modal-content" }];
	const contentDiv = buildHTML(new HTMLElement("div", contentDivAttributes));

	const separatorDiv = document.createElement("div");

	const spanAttributes = [{ key: "class", value: "modal-close" }];
	const span = buildHTML(new HTMLElement("span", spanAttributes));

	const inputAttributes = [
		{ key: "type", value: "number" },
		{ key: "placeholder", value: "0,00" },
	];
	const input = buildHTML(new HTMLElement("input", inputAttributes));

	const label = buildHTML(new HTMLElement("label", []));

	const button = buildHTML(new HTMLElement("button", []));

	span.innerHTML = "&times;";
	label.innerHTML = `Valor de ${product.name}:`;
	button.innerHTML = "Inserir";

	// #modal>.modal-content>((div>label+input+button)+span)
	document.body.appendChild(modalDiv);
	modalDiv.appendChild(contentDiv);
	contentDiv.appendChild(separatorDiv);
	separatorDiv.appendChild(label);
	separatorDiv.appendChild(input);
	separatorDiv.appendChild(button);
	contentDiv.appendChild(span);

	span.addEventListener("click", () => {
		const checkbox = document.getElementById(`${uniqueId}checkbox`);

		checkbox.parentElement.style.textDecoration = 'none' // label
		checkbox.checked = false;
		updateCheckedAttribute(product.name, false);
		modalDiv.remove();
	});

	button.addEventListener("click", () => {
		const price = parseFloat(input.value).toFixed(2);

		if (!price) {
			alert("Preencha o campo");
			return;
		}

		if (isNaN(price)) {
			alert("Insira um número");
			return;
		}

		if (price <= 0) {
			alert("Insira um número positivo");
			input.value = "";
			return;
		}

		modalDiv.remove();
		priceProduct(price, product.name);
		printPurchaseAmount();
	});
};

export default modalQuery;
