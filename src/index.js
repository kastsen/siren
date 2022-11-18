import './styles/index.scss';

document.addEventListener("DOMContentLoaded", () => {
    const formBtn = document.getElementById('form__button')
    const consumer = document.querySelector('.consumer')
    const choseFormControls = document.querySelectorAll('.choseForm__control')
    const choseText = document.getElementById('choseText')
    const choseFormButton = document.querySelector('.choseForm__button')
    const closeIcon = document.querySelector('.consumer__closeIcon')

    formBtn.onclick = function(e){
        e.preventDefault()
        consumer.classList.remove('consumer_invisible')
    }

    const closeModal = () => {
        consumer.classList.add('consumer_invisible')
    }

    closeIcon.onclick = function(){
        closeModal()
    }


    choseFormControls.forEach((e) => {
        e.onclick = function() {
            choseFormControls.forEach((e) => {
                e.classList.remove('choseForm__control_active')
            })
            this.classList.add('choseForm__control_active')
            choseText.innerText = document.querySelector('.choseForm__control_active input').value
            choseFormButton.classList.remove('button_disabled')
        }
    })

    const consumerContainers = document.querySelectorAll('.consumer__container')

    choseFormButton.onclick = function(e){
        e.preventDefault()
        if (document.querySelector('.choseForm__control_active')) {
            consumerContainers[0].classList.add('d-none')
        }
    }

    const userFormButton = document.querySelector('.userForm__button')
    closeModal()
    userFormButton.onclick = function(e){
        e.preventDefault()
        closeModal()
    }

})
