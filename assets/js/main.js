const testiArea = document.getElementById("testi-area");

var data = [];

(() => {
    fetch("http://192.168.18.12:3000/testimoni", { 
        method: "GET",
    }).then(res => res.json()).then(hasil => {
        data = hasil;

        for (let i = 0; i < data.length; i++) {
            testiArea.innerHTML += `
                <div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-2">
                                    <img src="${data[i].foto}" class="img-fluid">
                                </div>
                                <div class="col-10">
                                    <p class="m-0">${data[i].nama}</p>
                                    <p class="m-0">${data[i].univ}</p>
                                </div>
                            </div>
                            <hr>
                            <span>${data[i].isi}</span>
                        </div>
                    </div>
                </div>`
        }
    })
})()

const productArea = document.getElementById("product-area");

var data_product = [];

(() => {
    fetch("http://192.168.18.12:3000/product", { 
        method: "GET",
    }).then(res => res.json()).then(hasil => {
        data_product = hasil;

        for (let i = 0; i < data_product.length; i++) {
            if (data_product[i].status == "active") {
                productArea.innerHTML += `
                    <div class="col-12 col-xl-6 mb-3">
                        <div class="card">
                            <div class="card-product bg-secondary text-light">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4">
                                            <img src="${data_product[i].foto}" alt="Product Image" class="img-fluid img-section">
                                        </div>
                                        <div class="col-8">
                                            <h5>${data_product[i].judul}</h5>
                                            <p>${data_product[i].isi}</p>
                                            <a href="${data_product[i].link}" class="btn btn-primary">Klik Disini</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
            }
        }
    })
})()
