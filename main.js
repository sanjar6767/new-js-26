let body = document.body
let search = document.getElementById("search")
let glavniy = document.getElementById("glavniy")

function getData (){
    fetch("https://restcountries.com/v3.1/all?fields=name,flags",{
        method:"GET",
        headers:{
            "Content-Type": "application/json"
        }
    }).then((respons)=>{
        return respons.json()
    }).then((data)=>{
        datas = data
        renderData(datas)
    })
}

getData()


function renderData (data){
   data.forEach((contir)=>{
            let div = document.createElement("div")
            div.innerHTML = `
        <img src="${contir.flags.png}" />
        <h1>${contir.name.common}</h1>
        `
        glavniy.appendChild(div)
        })
}

search.addEventListener("input",(e)=>{
        glavniy.innerHTML =  ``
        let arr = datas.filter((coom)=>{
            return coom.name.common.toLowerCase().includes(e.target.value.toLowerCase())
        })
        console.log(arr)
        renderData(arr)
    })
