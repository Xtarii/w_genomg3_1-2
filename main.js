let n = "User123";
let p = "1a@abCd!#09456tgasde";


// Fake Login
function login(){
    // Getting name and passwd
    const name = document.getElementById("name").value;
    const passwd = document.getElementById("passwd").value;

    // Checking if passwd is not to short
    const ph = document.getElementById("ph");
    const pt = document.createElement("h4");



    // Password lenght
    if(passwd.length < 8){
        pt.innerText = `Lösenord för svagt, det måste vara mer än 8 karaktärer i ${passwd}`;
        ph.appendChild(pt);
    }


    // Password Strenght
    let passwdStrength = 0;
    if(passwd.match(/[a-z]+/)){
        passwdStrength++;
    }
    if(passwd.match(/[A-Z]+/)){
        passwdStrength++;
    }
    if (passwd.match(/[0-9]+/)){
        passwdStrength++;
    }
    if(passwd.match(/[$@#&!]+/)){
        passwdStrength++;
    }



    // Configuring pt
    if(passwdStrength < 3){
        pt.innerText = `Lösenord för svagt, det borde vara mer variant i ${passwd}`;
        ph.appendChild(pt);
    }


    


    // Checking if name and passwd are correct to the "data-base data"
    if(passwd == p && name == n){
        const text = document.createElement("h2");
        text.innerText = `Välkommen ${name}`;


        document.getElementById("lh").appendChild(text);


        // Starting FNAF
        startFNAF();
        return false;

    }else if(passwd != p){
        pt.innerText = `Lösenord används redan av User: Unicorn123Lover!`;
        ph.appendChild(pt);

        return false;
    }
}




// Starting Game
function startFNAF(){
    // Creating embed
    const game = document.createElement("embed");
    const holder = document.getElementById("embed");

    game.setAttribute("width", "1000px");
    game.setAttribute("height", "600px");
    game.setAttribute("src", "/game/index.html");


    holder.appendChild(game);
}