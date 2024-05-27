productsDom = document.querySelector('#products')

fetch('menu.json') //Json Data import edildi
    .then(response => response.json()) //Json data js versiyonuna dönüştürdü 
    .then(veri => {
        for (let i = 0; i < veri.kategori.length; i++) {
            console.log((veri.kategori[i].id))
            productsDom.innerHTML += `
            <div class="row" id="${(veri.kategori[i].id)}">
            <div class="col">
                <div class="card mx-auto mt-3 product" >
                    <img src="${(veri.kategori[i].kategoriFoto)}" class="card-img-top img" alt="...">
                    <div  class="card-body bg-dark p-0 " style="font-size: 0.7rem;">
                        <h4 class="card-text bg-dark m-1 "> <u>${(veri.kategori[i].kategoriAdi).toUpperCase()}</u></h4>
                        <ol id="${(veri.kategori[i].kategoriAdi)}" class="list-group bg-dark textC">
                        </ol>
                    </div>
                </div>
            </div>
            </div>
            <hr>`
            productDom = document.getElementById(veri.kategori[i].kategoriAdi)
            for (let j = 0; j < veri.kategori[i].altkategori.length; j++) {
                productDom.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start bg-dark textColor">
                                            <div class="ms-2 me-auto ">
                                                <div class="fw-bold" style="text-align: left;" >${veri.kategori[i].altkategori[j].product}</div>
                                                <span id="ingredients" style="font-size:smaller; font-weight: lighter; text-align: left;">${veri.kategori[i].altkategori[j].ingredients}</span>
                                            </div>
                                            <span id="price ">${veri.kategori[i].altkategori[j].price}</span>
                                        </li>`
            }
        }
    })
    
function scrollTarget(target) {
    menuDom = document.querySelector('#menu')
    menuDom.classList.remove('show')
    targetElemnt = document.querySelector(`#${target}`)
    targetElemnt.scrollIntoView({ behavior: 'smooth' })
}