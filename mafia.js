massRole = [

]

function HowMany(role, mass) {
    let count = 0
    mass.forEach(element => {
        if (element.title === role) {
            count++
        }
    });
    return count
}

let select = document.getElementById('input-type')
let btnAdd = document.getElementById('add')
let btnDelete = document.getElementById('delete')

let string = `<p>Мирных: ${HowMany('Мирный',massRole)}</p>
<p>Мафии: ${HowMany('Мирный',massRole)}</p>
<p>Коммисаров: ${HowMany('Мирный',massRole)}</p>
<p>Маньяков:${HowMany('Мирный',massRole)}</p>
<p>Врачей: ${HowMany('Мирный',massRole)}</p>
<p>Красоток: ${HowMany('Мирный',massRole)}</p>`

console.log(massRole);
let whoAdd = document.querySelector('.how-role')


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
    whoAdd.insertAdjacentHTML('beforeend',
    `<p>Мирных: ${HowMany('Мирный',massRole)}</p>
<p>Мафии: ${HowMany('Мирный',massRole)}</p>
<p>Коммисаров: ${HowMany('Мирный',massRole)}</p>
<p>Маньяков:${HowMany('Мирный',massRole)}</p>
<p>Врачей: ${HowMany('Мирный',massRole)}</p>
<p>Красоток: ${HowMany('Мирный',massRole)}</p>`
    )
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
