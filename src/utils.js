function createNumberRange(length) {
	return Array(+length)
		.fill()
		.map((_, i) => i);
}

export { createNumberRange };
