const btns = document.querySelectorAll('button');
const input = document.querySelector('.input');
const upper = document.querySelector('.upper');


btns.forEach(btn=>{
    
    btn.addEventListener('click', () => {
        
        switch(btn.innerHTML){
            case 'AC':
                input.innerHTML = "";
                input.style.color = "black";
                break;
            case 'DEL':
                if(input.innerHTML || input.innerHTML.length < 5){
                   input.innerHTML = input.innerHTML.slice(0, -1);
                   input.style.color = "black";
                }
                break;
            case '=':
                try{
                    input.innerHTML = eval(input.innerHTML);
                }
                catch{
                    input.innerHTML = 'Eror!';
                }
                break;
            default:
                if(input.innerHTML.length > 5){
                    input.innerHTML = input.innerHTML;
                    input.style.color = "red";
                }else{
                    input.innerHTML += btn.innerHTML;
                } 
        }
        
            
        

    })
})