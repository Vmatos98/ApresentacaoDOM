let page = 0;

function pages(){
    switch(page){
        case 0:
            document.querySelector(".back").style.color="#444444";
            newImage(1);
        break;
        case 1:
            document.querySelector(".back").style.color="aliceblue";
            newImage(2);
        break;
        case 2:
            newImage(3);
        break;
        case 3:
            newImage(4);
        break;
        case 4:
            newImage(5);
        break;
        case 5:
            exGetEllement();
        break;
        case 6:
            newImage(6);
        break;
        case 7:
            newImage(7);
        break;
        case 8:
            newImage(8);
        break;
        case 9:
            newImage(9);
        break;
        case 10:
            newImage(10);
        break;
        case 11:
            newImage(11);
        break;
        case 12:
            query();
        break;
        case 13:
            newImage(12);
        break;
        case 14:
            newImage(13);
        break;
        case 15:
            text();
        break;
        case 16:
            newImage(14);
        break;
        case 17:
            newImage(15);
        break;
        case 18:
            newImage(16);
        break;
        case 19:
            newImage(17);
        break;
        case 20:
            newImage(18);
            document.querySelector(".forward").style.color="aliceblue";
        break;
        default:
            document.querySelector(".forward").style.color="#444444";
            let endPage =document.querySelector(".pages");
            endPage.innerHTML = "";
            endPage.innerHTML=`<img src="./content/fim.gif" alt="">`;
        break;
    }
}

function pageControl(mode){
    if(mode === "+" && page<21){
        page++;
    }else if(mode==="-" && page > 0){
        page--;
    }
    document.querySelector(".exemplo").classList.add("remove"); 
    document.querySelector(".pages").classList.remove("remove"); 
    pages();
}
function newImage(content){
    let page =document.querySelector(".pages");
    page.innerHTML = "";
    page.innerHTML=`<img src="./content/${content}.svg" alt="">`;
}
function exGetEllement(){
    document.querySelector(".pages").classList.add("remove");
    document.querySelector(".exemplo").classList.remove("remove");
    let exemple = document.querySelector(".exemplo");
    exemple.innerHTML ="";
    exemple.innerHTML =`
    <p id="idElement1" class="id">Este elemento tem uma Id = "idElement1"</p><br/>
    <p id="idElement2" class="id">Este elemento tem uma Id = "idElement2"</p><br/>
    <p id="idElement3" class="id">Este elemento tem uma Id = "idElement3"</p><br/>
    <p class = "classElement1 class">Este elemento tem uma classe = "classElement1"</p><br/>
    <p class = "classElement2 class">Este elemento tem uma classe = "classElement2"</p><br/>
    <p class = "classElement3 class">Este elemento tem uma classe = "classElement3"</p><br/>
    <input class="id-clas" type="text" placeholder="Entre a class ou a ID">
    <button onclick="exGetEllementIdOrClasse('id')">pesquisar id</button>
    <button onclick="exGetEllementIdOrClasse('class')" >pesquisar classe</button>
    `;
}
function exGetEllementIdOrClasse(ellement){
    let value;
    if(ellement === 'id'){
        document.querySelectorAll(".id").forEach(element => {
            element.style.color="#FFFFFF";
           
        });
        value = document.querySelector(".id-clas");
        if(document.getElementById(`${value.value}`)!=null){
            document.getElementById(`${value.value}`).style.color="rgb(0, 255, 0)";
        }
        console.log(document.getElementById(`${value.value}`))
    }else if(ellement === 'class'){
        document.querySelectorAll(".class").forEach(element => {
            element.style.color="#FFFFFF";
            
        });
        value = document.querySelector(".id-clas");
        if(document.getElementsByClassName(`${value.value}`)){
           document.getElementsByClassName(`${value.value}`)[0].style.color="rgb(0, 255, 0)";
        }    
        console.log(document.getElementsByClassName(`class`));
        
    }
    
}
 function query(){
    document.querySelector(".pages").classList.add("remove");
    let element = document.querySelector(".exemplo");
    element.classList.remove("remove");
    element.innerHTML = "";
    element.innerHTML =`
    <p id="idElement" class="element">Este elemento do tipo p e tem uma Id = "idElement"</p><br/>
    <p class="classElement element">Este elemento do tipo p e tem uma Class = "classElement"</p><br/>
    <p id="idElement" class="element">Este elemento do tipo p e tem uma Id = "idElement"</p><br/>
    <p class="classElement element">Este elemento do tipo p e tem uma Class = "classElement"</p><br/>
    <p id="idElement" class="element">Este elemento do tipo p e tem uma Id = "idElement"</p><br/>
    <p class="classElement element">Este elemento do tipo p e tem uma Class = "classElement"</p><br/>
    <div>
        <button onclick="queryId()">querySelector id</button>
        <button onclick="queryClass()">querySelector class</button>
        <button onclick="queryElement()">querySelector p</button>
        
    </div>
    <div>
        <button onclick="queryAllId()">querySelectorAll id</button>
        <button onclick="queryAllCalss()">querySelectorAll class</button>
        <button onclick="queryAllElement()">querySelectorAll p</button>
    </div>
    <button onclick="reset()">limpar</button>
    `

 }
 function reset(){
    
    document.querySelectorAll(".element").forEach(data => {
         data.style.color="#FFFFFF";
    });
     
 }
 

 function queryClass(){
 document.querySelector(".classElement").style.color="#00FF00";
 }

 function queryId(){
    document.querySelector("#idElement").style.color="#00FF00";
 }

 function queryElement(){
    document.querySelector("p").style.color="#00FFFF";
 }

 function queryAllCalss(){

    document.querySelectorAll(".classElement").forEach(element => {
        element.style.color="#FF0000";
    });
 }

 function queryAllId(){
    document.querySelectorAll("#idElement").forEach(element => {
        element.style.color="#FF0000";
    });
 }

 function queryAllElement(){
    document.querySelectorAll("p").forEach(element => {
        element.style.color="#FF00FF";
    });
 }
 
function text(){
    document.querySelector(".pages").classList.add("remove");
    let element = document.querySelector(".exemplo");
    element.classList.remove("remove");
    element.innerHTML = "";
    element.innerHTML =`
    <div class= "text">
    <h1>Esse é um titulo h1</h1>
    <p>Acompanhado por um paragrafo <span> com um span</span> e quebra de linha</p><br/>
    <p>Com     mais      um     paragrafo       bem espaçado</p><br/>
    <p style="display: none">E esse deve se manter oculto</p><br/>
    </div>
    <button onclick="getInnerHTML()">innerHTML</button>
    <button onclick="getInnerText()">innerText</button>
    <button onclick="getTextContent()">textContent</button>
    <div class= "display"></div>
   `
}
function getInnerText() {
 let text = document.querySelector(".text").innerText;
 document.querySelector(".display").innerText ="";
 document.querySelector(".display").innerText = text;
}
function getInnerHTML() {
 let text = document.querySelector(".text").innerHTML;
 document.querySelector(".display").innerText ="";
 document.querySelector(".display").innerText = text;
}

function getTextContent() {
 let text = document.querySelector(".text").textContent;
 document.querySelector(".display").innerText ="";
 document.querySelector(".display").innerText = text;
}


pages();