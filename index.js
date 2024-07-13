// function handleContent() {
//     const btn = document.querySelectorAll('.icon-btn');
//     const content = document.querySelector('.content');


//     if(content.classList.contains('show-content')) {
//         content.classList.remove('show-content')
//     }else {
//         content.classList.add('show-content')
//     }
// }


// document.querySelector('.icon-btn').addEventListener('click' , handleContent);

function handleContent(event) {
    const button = event.target;
    const content = button.parentElement.nextElementSibling;
    console.log(content);

    // console.log(button);

    if(content.classList.contains('show-content')) {
        content.classList.remove('show-content');
        button.classList.remove('show-content');
    } else {
        content.classList.add('show-content');
    }
}

const buttons = document.querySelectorAll('.icon-btn');

buttons.forEach(button => {
    button.addEventListener('click', handleContent);
});
