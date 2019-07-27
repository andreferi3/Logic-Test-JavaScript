function segitiga(num) {
	var s = '';
	let i = 1;
	for(i; i <= num; i++) {
		for(j=i; j <= num; j++) {
			s += '*'
        }
		s += '\n'
    }
	console.log(s)
}

segitiga(5)