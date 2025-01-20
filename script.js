async function fet() {
    let table = document.querySelector('#displaydata');
    let res = await fetch("http://localhost:3000/data");
    let data = await res.json()
    let finaldata = data.map((x) =>
        `<tr>
    <td>${x.id}</td>
    <td>${x.from}</td>
    <td>${x.to}</td>
    <td>${x.departure}</td>
    <td>${x.return}</td>
    <td>${x.traveling_as}</td>
    <td>${x.payment}</td>
    </tr>`
    ).join("")
    table.innerHTML = finaldata;
}
fet();

function insert_data() {
    let data = {
        from: document.querySelector('#from').value,
        to: document.querySelector('#to').value,
        departure: document.querySelector('#departure').value,
        return: document.querySelector('.return1').value,
        traveling_as: document.querySelector('#traveling_as').value,
        payment: document.querySelector('#payment').value
        // name: document.querySelector('#name').value,
        // lastname: document.querySelector('#lastname').value,
        // dateofbirth: document.querySelector('#dob').value,
        // phone: document.querySelector('#phone').value,
        // email: document.querySelector('#email').value
    }

    fetch("http://localhost:3000/data", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    });



}

function error() {
    let from = document.querySelector('#from').value
    let to = document.querySelector('#to').value
    let departure = document.querySelector('#departure').value

    if (from === "") {
        let selectfrom = document.querySelector('#from');
        selectfrom.style.borderColor = "red";
        selectfrom.style.outlineColor = "red";

        return false;
    }

    else if (to === "") {
        let selectto = document.querySelector('#to');
        selectto.style.borderColor = "red";
        selectto.style.outlineColor = "red";

        return false;
    }

    else if (departure === "") {
        let selectdeparture = document.querySelector('#departure');
        selectdeparture.style.borderColor = "red";
        selectdeparture.style.outlineColor = "red";

        return false;
    }
}
function s(a){
    console.log(a);
    let selectinput = document.querySelector(`#${a}`);
    console.log(selectinput);
    selectinput.style.borderColor = "black";
    selectinput.style.outlineColor = "blace";

    return false;
}
// ==========================================================================================================================
function singup(){
    var data = {
        username : document.querySelector("#name").value,
        lastname : document.querySelector("#lastname").value,
        password : document.querySelector("#password").value,
    }

    localStorage.setItem("singupdata",JSON.stringify(data));
}

var local_data = JSON.parse(localStorage.getItem("singupdata"));

function login(){
    let data = {
        namelogin : document.getElementById("name").value,
        lastnamelogin : document.getElementById("lastname").value,
        passwordlogin : document.getElementById("password").value
    }

    if(local_data.name!=data.namelogin || local_data.password!=data.passwordlogin)
    {
        alert("user not found")
        return false;
    }
}