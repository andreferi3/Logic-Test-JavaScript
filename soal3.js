function segitiga(num) {
    var s = '';
    let i = 0;
    for(i; i <= num; i++) {
        for(j=i; j <= num; j++) {
            s += ' ';
        }
        for(k=0; k <= i; k++) {
            s += '*';
        }
        s += '\n'
    }
    console.log(s)
}

segitiga(5)