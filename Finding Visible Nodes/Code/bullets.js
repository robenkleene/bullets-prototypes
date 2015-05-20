	findVisibleElementFromElement: function (element, backwards) {

		if (element === this.rootElement) {
console.log("Returning null");
			return null;
		}


		// DEBUG
// console.log("element.outerHTML = " + element.outerHTML);
		var elementString = element.innerText;
		if (elementString.indexOf('\n') > 0) {
			elementString = elementString.substr(0, elementString.indexOf('\n'));
		}
		console.log(element + " : " + elementString);
		// DEBUG
// console.log("element.matches(this.selectTags) = " + element.matches(this.selectTags));
// console.log("this.elementIsVisible(element) = " + this.elementIsVisible(element));


		if (this.elementIsVisible(element) && element.matches(this.selectTags)) {
			return element;
		}

		if (this.elementIsVisible(element.parentNode)) {
			// Has to first go into children here

			// var nodeList = element.querySelectorAll(this.selectTags);
			// var increment = backwards ? -1 : 1;
			var nextElement = backwards ? element.previousElementSibling : element.nextElementSibling;
			if (!!nextElement) {
				return this.findVisibleElementFromElement(nextElement, backwards);
			}

			// var nextIndex = Array.prototype.indexOf.call(nodeList, element) + increment;
			// if (nextIndex > 0 && nextIndex < nodeList.length) {
			// 	var nextElement = nodeList[nextIndex];
			// 	return this.findVisibleElementFromElement(nextElement, backwards);
			// }


			// var nodeList = element.parentNode.querySelectorAll(this.selectTags);
			// var increment = backwards ? -1 : 1;
			// var nextIndex = Array.prototype.indexOf.call(nodeList, element) + increment;
			// if (nextIndex > 0 && nextIndex < nodeList.length) {
			// 	var nextElement = nodeList[nextIndex];
			// 	return this.findVisibleElementFromElement(nextElement, backwards);
			// }
		}

		return this.findVisibleElementFromElement(element.parentNode, backwards);
	},