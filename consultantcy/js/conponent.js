// //  we creating a component with the construct to add to a web page so that anytime we need it we can just call it

// // we a creating a component in the form of a html tag 

// // then we pass a showRoot/attachmentShadow to give the open a mode of open or close so that we can be able to add css or javascript when open and not allow to add when closed

let container = document.querySelector('.nav-container');
container.innerHTML += `

// styles
<style>
:host(nav-container){
    background-color:#fff;
    display:inline-block;
}
::slotted(links){
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}
::slotted(links ul li){
    display: inline-block;
    margin: 20px;
    color:#333;
    font-size: 17px;
    font-family: sans-serif;  
    cursor: pointer;
}

::slotted(let__talk){
    position: absolute;
    right: 5%;
    padding: 0 10px;
}
::slotted(talk__btn){
    padding: 10px 15px;
    border: 0;
    outline: 0;
    background-color: #05495f;
    color: #fff;
    font-family: sans-serif;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
}

::slotted(bar){
    display: none;
    color: #333;
    font-size: 1.5rem;
    cursor: pointer;
}
</style>

<div class="nav-container">
<!-- logo -->
<slot name="logo"></slot>

<!-- navs links -->
<slot name="nav"></slot>

<!-- btn -->
<slot name="btn"></slot>

<!-- toogle -->

<slot name="bar"></slot>
</div>
`
class Navigation extends HTMLElement{
    constructor(){
        super()
        let shadowRoot = this.attachShadow({mode: "closed"});
        let clone = container.content.cloneNode(true)
        shadowRoot.append(clone)
    }       
}

customElements.define( 'nav-container', Navigation);




// <div class="nav-container" slot="logo">
//         <!-- logo -->
//         <div class="logo">
//             <h2>Codod</h2>
//         </div>

//         <!-- navs links -->
//         <nav class="links" slot="nav">
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Conference</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>

//         <!-- button -->

//         <div class="let__tak" slot="btn">
//             <a href="" class="talk">
//                 <button class="talk__btn">Let Talk</button>
//             </a>
//         </div>

//         <!-- toogle -->

//         <div class="toggle" slot="bars">
//             <span class="bar"><i class="fa fa-bars"></i></span>
//         </div>
//     </div>