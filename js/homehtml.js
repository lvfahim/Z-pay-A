document.getElementById('add-money-btn').addEventListener('click',
    function (){
        const pin=2632;
        const bank=document.getElementById('bank').value 
        const bankNumber=document.getElementById('bank-number').value 
        const addAmount=parseInt(document.getElementById('add-amount').value)
        const pinNumber=parseInt(document.getElementById('add-pin').value)
        console.log(bank,bankNumber,addAmount,pinNumber)
        const pregentBalan=parseInt(document.getElementById('pregent-balan').innerText)
        if(bankNumber.length <11){
            alert('Invalid Your Bank Number');
            return;
        }
        if(pin !== pinNumber){
            alert('Your pin is not match ');
            return;
        }
        const totalBalans=addAmount+pregentBalan;
        // pregentBalan.innerText=totalBalans;
        document.getElementById('pregent-balan').innerText=totalBalans;
    }
)