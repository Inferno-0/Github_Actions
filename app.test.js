const add = require('./app');

test('addition', () => {
	expect(add(2, 3)).toBe(6);
});
