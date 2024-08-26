

const reqCa = fetch(`http://localhost:8088/categoria/`).then((resp)=>{
  resp.json().then((data)=>{
    const [{id,nombre}] =data
    const idDOM = document.getElementById("id")
    idDOM.innerHTML=id
    const nombreDom = document.getElementById("nombre")
    nombreDom.innerHTML = nombre
    
    const listaCat =document.getElementById('listaCat')
    ////////////////////////////////////////////////////////////
    data.map(({id,nombre}) => {
      const li = document.createElement('li')
      li.innerHTML = `ID: ${id} la categoria de ${nombre}`
      listaCat.appendChild(li)
    })
  })  
}).catch(console.warn)