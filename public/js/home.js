


function addLoadToggle(){
    let load = document.body.querySelector('.sidebutton');
    if(load){
        let hiddenCards = document.querySelectorAll('.hide');
        let hiddenArr = Array.from(hiddenCards);
        load.addEventListener('click', function(event) {
            let count = 0;
            for (i=0; i<4; i++){
                if (hiddenArr[0]){
                    hiddenArr[0].classList.remove('hide');
                    hiddenArr = hiddenArr.slice(1, hiddenArr.length - 1)
                } else {
                    load.classList.add('hide');
                }
            }
        })
    }
};
function hideAllCards(){
    let profileCards = document.body.querySelectorAll('.profile-container');
    let cardsArr = Array.from(profileCards);
    let cutCardsArr = cardsArr.slice(4, cardsArr.length - 1);
    console.log(cutCardsArr);
    for (i=0; i<cutCardsArr.length; i++){
        cutCardsArr[i].classList.add('hide');
    }
}


hideAllCards();
addLoadToggle();