function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um numero')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 0;c <= 12;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${item}`
            tab.appendChild(item)
        } 
    }
}