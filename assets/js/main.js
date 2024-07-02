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
                                    <img src="${data[i].foto}" class="img-fluid mt-1 ms-2">
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
    fetch("http://192.168.18.12:3000/product",{
        method: "GET",
    }).then(res => res.json()).then(hasil => {
        console.log(hasil)
        data_product = hasil
        for(let i = 0; i < data_product.length; i++){
            if(data_product[i].status == "active"){
            productArea.innerHTML +=`
              <div class="col-12 col-xl-6 mb-5">
                  <div class="card card-product bg-secondary text-light">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-4">
                          <img src="${data_product[i].foto}" alt="" 
                          class="img-fluid"/>
                        </div>
                        <div class="col-8 mt-2">
                            <h5 class="fw-bold">${data_product[i].judul}</h5>
                           ${data_product[i].isi} <br>
                            <a href="${data_product[i].link}" class="btn btn-primary mt-4">Klik Disini</a>
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
            `
        }
        }})})()



const dropArea = document.getElementById("dropArea");

var data_input = [];

(() => {
    fetch("http://192.168.18.12:3000/cek-turnitin", { 
        method: "GET",
    }).then(res => res.json()).then(hasil => {
        data_input = hasil;

        for (let i = 0; i < data_input.length; i++) {
            if (data_input[i].status == "active") {
               cekTurnitin.innerHTML += `
                     <div class="py-4 mb-2">
                            <div class="p-3 mb-0 bg-body-tertiary rounded" id="dropArea">
                                <input 
                                    type="file" 
                                    class="input-file"
                                    name="file" 
                                    id="fileInput"
                                />
                                <button type="button" class="btn btn-danger float-sm-end mx-2 mt-2">Hapus Semua</button>
                                <button type="button" for="file-upload" class="btn btn-primary float-sm-end mt-2">Unggah File</button>
                                <div class="container py-5 m-3">
                                    <div class="text-center text-secondary" id="fileList" name="kutipan">
                                        <h4>Cek Turnitin No-Repository</h4>
                                        <span>TARIK FILE MU KESINI / KLIK AJA DISINI</span><br>
                                        <span>.docx .pdf aja ya</span>
                                    </div>
                                </div>
                            </div>
                        </div>`
            }
        }
    })
})()
