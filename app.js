const correctsAnswers = ['A', 'A', 'B', 'C', 'A', 'C' ]

const containerResult = document.querySelector('[data-js="container-result"]')

// const element = document.getElementById('question__one')



// console.log(valueOfEachQuestion)

const form = document.querySelector('.questions__form')




// function setBackground (el) {
    
    //     if (element.checked)
    
    //     if (el.className.includes('background-color')) {
        //         el.classList.remove('background-color')
        //     } else {
            //         el.classList.add('background-color')
            //     }  
            // }
            
form.addEventListener('submit', e => {
    e.preventDefault()
                
    let score = 0 
    const valueOfEachQuestion = Math.round(100 / correctsAnswers.length)


    console.log(valueOfEachQuestion)
    const userAnswers = [
        form.question1.value,
        form.question2.value,
        form.question3.value,
        form.question4.value,
        form.question5.value,
        form.question6.value
    ]

    const checkAllAnswers = (answers) => answers !== ''

    if (!userAnswers.every(checkAllAnswers)) {
        alert('Ops, deve ter esquecido de responder alguma pergunta. Revise e envie novamente')
    } else {
        console.log(userAnswers)
        userAnswers.forEach((answers, index) => {
            const isCorrect = answers === correctsAnswers[index]

            if (isCorrect) {

                const showResult = document.querySelector('.show-result')

                score += valueOfEachQuestion
                containerResult.style.display = 'block'

                
                scrollTo(0, 0)
                
                let count = 0
                console.log(score, count)

                const timer = setInterval(() => {
                    if (score === count || count === 99) {
                        clearInterval(timer)
                    }
                    count++
                    showResult.textContent = `${count}%`
                }, 30)
            } else if (score === 0) {
                scrollTo(0 ,0)
                containerResult.style.display = 'block'
                // showResult.textContent = `${count}%`
            } 
        })
    }

    


})


// element.addEventListener('click', e => {
//     const elclick = e.target
//     const alternative = e.target.textContent.trim().slice('-')[0]
    

//     if (elclick.className === 'question__option' && que) {
//         question1.push(alternative)
//         setBackground(elclick)
//         console.log(elclick)
//     }

// })


// form.addEventListener('click', e => {

//     const reference = e.target.parentElement.classList[1]
    
//     const itemClicked = e.target9
    
//     const elemento = document.getElementById(`${reference}`)

//     if (reference === 'question__one' && question1.length === 0 ) {

//         console.log(elemento)

//             console.log(question1)

//             console.log(itemClicked.classList[1])
//             question1.push(alternative)
          
//         }
//         setBackground(itemClicked, e)

    



    
    
    
    
//     // if (itemClicked === 'question__option') {
        
//     //     e.target.classList.add('background-color')
//     //     userAnswers.push(alternative)
        
//     //     console.log('clicou no lugar certo', userAnswers)
//     // } 
// })