function creatNumber(id){
    const number=document.getElementById(id);
    const numberValue=number.value;
    const numberValuePar=parseInt(numberValue);
    return numberValuePar;
}
function creatInnertext(id){
    const number=document.getElementById(id);
    const numberInnertext=number.innerText;
    const numberInnertextPar=parseInt(numberInnertext);
    return numberInnertextPar;
}
function searchChake(id){
    const fromBtns= document.getElementsByClassName('from')
       for(const fromBtn of fromBtns){
        fromBtn.style.display='none'
       }
       document.getElementById(id).style.display='block'
       const lastp=document.getElementById('latest-payment')
       lastp.style.display='none';
}
function buttonBgColor(id){
    const fromBtns=document.getElementsByClassName('from-btn')
       for(const fromBtn of fromBtns){
        fromBtn.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
        fromBtn.classList.add('border-gray-300')
       }
       document.getElementById(id).classList.remove('border-gray-300')
       document.getElementById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]')
}
const transactionsData=[];

document.getElementById('transactions-section-btn').addEventListener('click',
    function (e){
        e.preventDefault();
        const transactionAdd=document.getElementById('transaction-add')
         transactionAdd.innerHTML="";
        for(const data of transactionsData){
            const div=document.createElement('div')
            div.innerHTML=`
            <div class="bg-white mt-[16px] p-[24px] rounded-xl ">
                <div class="flex justify-between items-center">
                  <div class="flex items-center">
                    <div class="p-3 rounded-full bg-[#f4f5f7]">
                        <img src="./assets/wallet1.png" class="mx-auto " alt="">
                    </div>
                    <div class="ml-5">
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                 </div>
                 <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                 </div>
                </div>
               </div>
            `
            transactionAdd.appendChild(div)
        }
    }
)

// add money section 
document.getElementById('add-money-btn').addEventListener('click',
    function (){
        const pin=2632;
        const bank=document.getElementById('bank').value 
        const bankNumber=document.getElementById('bank-number').value 
        const addAmount=creatNumber('add-amount');
        if(addAmount<=0){
            alert('Inviled Amount');
            return;
        }
        const pinNumber=creatNumber('add-pin')
        // console.log(addAmount,pinNumber);
        // console.log(bank,bankNumber,addAmount,pinNumber)
        const pregentBalan=creatInnertext('pregent-balan')
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

        const data={
            name:'add money',
            date:new Date().toLocaleTimeString()
        }
        transactionsData.push(data);
        // console.log(transactionsData)


    }
)

// withdraw money section 
document.getElementById('withdraw-btn').addEventListener('click',
    function (){
        const pin=2632;
        const pregentBalan=creatInnertext('pregent-balan')
        const agentNumber=document.getElementById('agent-number').value
        const withDrawAmount=creatNumber('withdraw-amount')
        if(pregentBalan<withDrawAmount){
            alert('Not your Balance');
            return;
        }
        if(withDrawAmount<=0){
            alert('Inviled Amount');
            return;
        }
        const pinNumber=creatNumber('width-pin')
        if(agentNumber.length <11){
            alert('Invalid Your Agent Number');
            return;
        }
        if(pinNumber !== pin){
            alert('Your Pin is not match')
            return;
        }
        const totalBalans=pregentBalan-withDrawAmount;
        // console.log(totalBalans,pregentBalan,withDrawAmount)
        document.getElementById('pregent-balan').innerText=totalBalans;

        const data={
            name:'Cash out',
            date:new Date().toLocaleTimeString()
        }
        transactionsData.push(data);
        // console.log(transactionsData)

    }
)
// Button section is change 
document.getElementById('add-money-section-btn').addEventListener('click',
    function (){
       searchChake('add-money-section');
       buttonBgColor('add-money-section-btn')
    }
);
document.getElementById('cashout-section-btn').addEventListener('click',
    function (){
        searchChake('cashout-section');
        buttonBgColor('cashout-section-btn')
    }
);
document.getElementById('transfer-money-section-btn').addEventListener('click',
    function (){
        searchChake('transfer-section')
        buttonBgColor('transfer-money-section-btn')
    }
);
document.getElementById('get-bonus-section-btn').addEventListener('click',
    function (){
        searchChake('get-bonus-section')
        buttonBgColor('get-bonus-section-btn')
    }
);
document.getElementById('pay-bill-section-btn').addEventListener('click',
    function (){
        searchChake('pay-bill-section')
        buttonBgColor('pay-bill-section-btn')
    }
);
document.getElementById('transactions-section-btn').addEventListener('click',
    function (){
        searchChake('transaction-section')
        buttonBgColor('transactions-section-btn')
    }
);


// LogOut
document.getElementById('LogOut').addEventListener('click',
    function (){
        window.location.href="./index.html"
    }
)