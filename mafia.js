massRole = [


]
let select = document.getElementById('input-type')
let btnAdd = document.getElementById('add')
let btnDelete = document.getElementById('delete')



console.log(massRole);
let btn = document.getElementById('button')
let reload = document.getElementById('reload')
let who = document.getElementById('role')
let clear = document.getElementById('clear')
let image = document.getElementById('image')
let i

btnAdd.onclick = ()=>{
    switch (select.value) {
        case 'Мирный':
            massRole.push({
                "title":'Мирный',
                "src":'./images/Мирный.png'
             })
            break;
        case 'Мафия':
            massRole.push({
                "title":'Мафия',
                "src":'./images/Мафия.png'
             })
            break;
        case 'Маньяк':
            massRole.push({
                "title":'Маньяк',
                "src":'./images/Маньяк.png'
             })
            break;
        case 'Красотка':
            massRole.push({
                "title":'Красотка',
                "src":'./images/Красотка.png'
             })
            break;
        case 'Коммисар':
            massRole.push({
                "title":'Коммисар',
                "src":'./images/Коммисар.png'
             })
            break;
        case 'Врач':
            massRole.push({
                "title":'Врач',
                "src":'./images/Врач.png'
             })
            break;
    
        default:
            break;
    }
    
 console.log(massRole);
}

btnDelete.onclick = ()=>{
    switch (select.value) {
        case 'Мирный':
            massRole.push({
                "title":'Мирный',
                "src":'./images/Мирный.png'
             })
            break;
        case 'Мафия':
            massRole.push({
                "title":'Мафия',
                "src":'./images/Мафия.png'
             })
            break;
        case 'Маньяк':
            massRole.push({
                "title":'Маньяк',
                "src":'./images/Маньяк.png'
             })
            break;
        case 'Красотка':
            massRole.push({
                "title":'Красотка',
                "src":'./images/Красотка.png'
             })
            break;
        case 'Коммисар':
            massRole.push({
                "title":'Коммисар',
                "src":'./images/Коммисар.png'
             })
            break;
        case 'Врач':
            massRole.push({
                "title":'Врач',
                "src":'./images/Врач.png'
             })
            break;
    
        default:
            break;
    }
    
 console.log(massRole);
}


btn.onclick = ()=>{
    if (massRole.length == 0) {
        who.innerHTML = ''
        image.src = ''
        setTimeout(()=>{
            location.reload();
        },3000)
    }
    i = Math.floor(Math.random() * massRole.length)
    who.innerHTML = massRole[i].title
    image.src = massRole[i].src
    massRole.splice(i,1)
    console.log(massRole);
    setTimeout(()=>{},1000)
  
}
clear.onclick=()=> {
    who.innerHTML = ''
    image.src = ''
}
reload.onclick = ()=>{
    location.reload();
}
