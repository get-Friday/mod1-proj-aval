const saveToLocalStorage = (array) => {
	localStorage.setItem("Compras", JSON.stringify(array));
};

const getFromLocalStorage = () => JSON.parse(localStorage.getItem("Compras"));

const updateCheckedAttribute = (objectName, option) => {
	const array = getFromLocalStorage();

	array.forEach((e) => {
		if (e.name == objectName) {
			switch (option) {
				case true:
					e.checked = true;
					break;
				case false:
					e.checked = false;
			}
		}
	});
	saveToLocalStorage(array);
};

export { saveToLocalStorage, getFromLocalStorage, updateCheckedAttribute };
