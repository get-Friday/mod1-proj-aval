const buildHTML = (elementToBuild) => {
	const element = document.createElement(elementToBuild.name);

	if (elementToBuild.attributeList.length > 0) {
		elementToBuild.attributeList.forEach((e) => {
			element.setAttribute(e.key, e.value);
		});
	}

	return element;
};

export default buildHTML;
