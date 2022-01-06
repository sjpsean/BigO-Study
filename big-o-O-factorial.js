function f(n) {
	if (n === 0) {
		console.log("done");
		return;
	}
	for (let i = 0; i < n; i++) {
		f(n-1);
	}
}

f(10); // O(n!) - Factorial time
// f(10) will call 10 f(9)'s, f(9) will call 9 f(8)'s and so on.
// f(n) will call n f(n-1)'s, and so on
// for n { for n-1 { for n-2 { ... { return }
// O(n!)