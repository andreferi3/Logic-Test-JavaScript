function segitiga(num) {
    var s = '';
    let i = 0;
    for(i; i <= num; i++) {
        for(j=0; j <= i; j++) {
            s += '*'
        }
        s += '\n'
    }
    console.log(s)
}

segitiga(5)