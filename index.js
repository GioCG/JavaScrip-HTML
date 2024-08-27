const reqCa = fetch('http://localhost:8088/categoria/').then((resp)=>{
    resp.json().then((data)=>{
      
        const listCategoria = document.getElementById('listCategoria')
 
        data.map(({id, nombre})=> {
            const li = document.createElement('li')
            li.innerHTML =  `id: ${id} categoria: ${nombre}`
            listCategoria.appendChild(li)
        })
    })  
}).catch(console.warn)