
document.querySelector('.myForm').addEventListener('submit', handleSubmit)
let input = document.querySelector('#url')
let contentBox = document.querySelector('.content-box')

input.addEventListener('change', handleChange)

let url = null

function handleChange(e) {
    url = e.target.value
    console.log(url)
}



function handleSubmit(e) {
    e.preventDefault()
    let xmlhttp = new XMLHttpRequest();
    console.log
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let span = document.createElement('div');
            let reg = new RegExp(/[a-zA-Z-]*(ly|Ly)[a-zA-Z]*/g)
            let res = xmlhttp.responseText.split('</head>')[1];
            span.innerHTML = res;
            console.log(span.innerText)
            console.log(span.innerText.match(reg))
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", `${url}`, false);
    xmlhttp.send();
}