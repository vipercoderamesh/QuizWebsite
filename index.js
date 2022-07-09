

var quizdata=[
    {
        questions:'Which Framework is belongs to Javascript?',
        a:'.Net',
        b:'Laravel',
        c:'React',
        d:'Django',
        correct:'c'
    },
    {
        questions:'Which is not programming langauge?',
        a:'C++',
        b:'HTML',
        c:'Javscript',
        d:'Python',
        correct:'b'

    },
    {

        questions:'CSS Stands for?',
        a:'Cascade Style Sheet',
        b:'Cascade Styling Sheet',
        c:'Cascading Styling Sheet',
        d:'Cascading Style Sheet',
        correct:'d'
    },
    {

        questions:'What is the correct HTML for creating a hyperlink?',
        a:'<a name="">A</a>',
        b:'<a>B</a>',
        c:'<a href="http://www.example.com">example</a>',
        d:'<a url="http://www.example.com">example</a>',
        correct:'c'


      

    },
    {
      questions:' How can you open a link in a new browser window?',
      a:' <a href="url" new>',
      b:'<a href="url" target="new">',
      c:'<a href="url" target=""></a>',
      d:'<a href="url" target="_blank">',
      correct:'d'

    }
]

var quiz=document.getElementById('quiz')
var questions=document.getElementById('questions')
var answer=document.querySelectorAll('.answer')
var a_option=document.getElementById('a_value')
var b_option=document.getElementById('b_value')
var c_option=document.getElementById('c_value')
var d_option=document.getElementById('d_value')

var submit=document.getElementById('submit')

var current_question=0
var quiz_score=0

loadquiz()

function loadquiz(){

    deselect()
    questions.innerHTML=quizdata[current_question].questions
    a_option.innerText=quizdata[current_question].a
    b_option.innerText=quizdata[current_question].b
    c_option.innerText=quizdata[current_question].c
    d_option.innerText=quizdata[current_question].d
    

}
function deselect(){
    answer.forEach(answer=>answer.checked=false)
}

submit.addEventListener('click',()=>{
    var selectedoption;

    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption=answer.id
        }

    })

    if(selectedoption==quizdata[current_question].correct)
    {
        quiz_score=quiz_score+1
    }
    current_question=current_question+1

    if(current_question==quizdata.length){
        document.getElementById('quizdiv').innerHTML=`<h1> You have answered ${quiz_score} correclty out of ${quizdata.length}</h1>`

    }
    else{
        loadquiz()
    }
    

});