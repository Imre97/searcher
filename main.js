
document.querySelector('.myForm').addEventListener('submit', handleSubmit)
let input = document.querySelector('#url')
let contentBox = document.querySelector('.content-box')

input.addEventListener('change', handleChange)

let url = null
let words = []

function handleChange(e) {
    url = e.target.value
}



function handleSubmit(e) {
    e.preventDefault()
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let span = document.createElement('div');
            let reg = new RegExp(/[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]*(ly|Ly|LY)[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ]*/g)
            let res = xmlhttp.responseText.split('</head>')[1];
            span.innerHTML = res;
            words = (span.innerText.match(reg))
            return words;
        }
    }
    xmlhttp.open("GET", `${url}`, false);
    xmlhttp.send();

    write()
}

function write() {

    if (words === null ) {
        contentBox.innerHTML = `<h1>Nincs 'ly'-t tartalmazó szó</h1>`
        return
    }

    let arr = words.map(world => {
        return `<p>${world}</p>`
    })

    contentBox.innerHTML = arr.join("");
}




