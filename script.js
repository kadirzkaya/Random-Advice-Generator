const userDetails=document.querySelector(".advice");
const generate=document.querySelector("#generateBtn");
const api="https://api.adviceslip.com/advice";

async function fetchApi(api_link){
    const response=await fetch(api_link);
    let data=response.json();

    data.then(d=>{
        console.log(d.slip);
        showUser(d.slip);
    })
    
}




const showUser=(user)=>{
    
    let html=`<p class="text-center w-100">${user.advice}</p>`;
    
    userDetails.innerHTML=html;
}

generate.addEventListener("click",()=>{
    fetchApi(api);
});
