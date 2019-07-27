function arkaFood(harga, kodeVoucher, jarak, pajak) {
    if(harga < 50000) {
        if(harga < 25000) {
            var jumlah = harga
        } else {
            if(kodeVoucher === 'DITRAKTIRDEMY') {
                if(jarak > 1.5) {
                    var jarak = jarak - 1.5
                    var round = Math.ceil(jarak)
                    var tarif = (5000 + round * 3000)
                } else {
                    var tarif = 5000
                }
    
                if(pajak !== false) {
                    var potongan = Math.round(5/100*75000);
                } else {
                    var potongan = 0;
                }
    
                var discount = (60/100*harga);
                if(discount > 30000) {
                    var diskon = 30000;
                } else {
                    var diskon = discount;
                }
    
                var jumlah = harga - diskon + tarif + potongan;
    
            } else if(kodeVoucher === false || kodeVoucher === undefined) {
                if(jarak > 1.5) {
                    var jarak = jarak - 1.5
                    var round = Math.ceil(jarak)
                    var tarif = (5000 + round * 3000)
                } else {
                    var tarif = 5000
                }
    
                if(pajak !== false) {
                    var potongan = Math.round(5/100*75000);
                } else {
                    var potongan = 0;
                }
    
                var jumlah = harga + tarif + potongan;
            }    
        }
    } else {
        if(kodeVoucher === 'ARKAFOOD5') {
            if(jarak > 1.5) {
                var jarak = jarak - 1.5
                var round = Math.ceil(jarak)
                var tarif = (5000 + round * 3000)
            } else {
                var tarif = 5000
            }
            console.log('Tarif : ', tarif)

            if(pajak !== false) {
                var potongan = Math.round(5/100*75000);
            } else {
                var potongan = 0;
            }
            console.log('Pajak : ', potongan)

            var discount = (50/100*harga);
            if(discount > 50000) {
                var diskon = 50000;
            } else {
                var diskon = discount;
            }
            console.log('Diskon ARKAFOOD5 : ',diskon)

            var jumlah = harga - diskon + tarif + potongan;

        } else if(kodeVoucher === 'DITRAKTIRDEMY') {
            if(jarak > 1.5) {
                var jarak = jarak - 1.5
                var round = Math.ceil(jarak)
                var tarif = (5000 + round * 3000)
            } else {
                var tarif = 5000
            }
            console.log('Tarif : ', tarif)

            if(pajak !== false) {
                var potongan = Math.round(5/100*75000);
            } else {
                var potongan = 0;
            }
            console.log('Pajak : ', potongan)

            var discount = (60/100*harga);
            if(discount > 30000) {
                var diskon = 30000;
            } else {
                var diskon = discount;
            }
            console.log('Diskon DITRAKTIRDEMY : ', diskon)

            var jumlah = harga - diskon + tarif + potongan;
        } else if(kodeVoucher === false || kodeVoucher === undefined || kodeVoucher !== 'ARKAFOOD5' || kodeVoucher !== 'DITRAKTIRDEMY')  {

            if(jarak > 1.5) {
                var jarak = jarak - 1.5
                var round = Math.ceil(jarak)
                var tarif = (5000 + round * 3000)
            } else {
                var tarif = 5000
            }

            if(pajak !== false) {
                var potongan = Math.round(5/100*75000);
            } else {
                var potongan = 0;
            }

            var jumlah = harga + tarif + potongan;
        }
    }
    console.log('Harga : ', harga)
    console.log(jumlah)
}

arkaFood(70000, 'ARKAFOOD5', 2.6, 5)