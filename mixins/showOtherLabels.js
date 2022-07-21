export default {
	methods: {
		showLabels(startArray, title, endArray) {
			startArray.forEach((el) => {
				if (el.title !== title) {
					endArray.push(el);
				}
			});
		}
	}
}