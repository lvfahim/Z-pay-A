
document.getElementById('login-btn').addEventListener('click',
    function (){
        const number= 1315345166;
        const pin=2632;

        const modileNumber =document.getElementById('mobile-input').value 
        const modileNumberValue =parseInt(modileNumber)

        const pinNumber =document.getElementById('pin-input').value 
        const pinNumberValue =parseInt(pinNumber)

        if(modileNumber.length <10){
            alert('Enter you number');
            return;
        }
        if(pinNumber.length <4){
            alert('Enter your creat pin');
            return;
        }

        // console.log(modileNumberValue,pinNumberValue)
        if(modileNumberValue=== number && pinNumberValue=== pin){
           window.location.href="./home.html"
        }else{
            alert('Invalid Credentials')
        }
    }
)
