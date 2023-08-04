const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `

<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>
`
    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {

    e.preventDefault();

    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
    }
    //  this below addform.reset() in above if statment and hare below also
    addForm.reset()

});

//delete todos section

list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})


// //keyup event

const filter = (tem) => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(tem))
        .forEach(todo => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter(todo => todo.textContent.includes(tem))
        .forEach(todo => todo.classList.remove('filtered'));
}

search.addEventListener('keyup', () => {
    const tem = search.value.trim().toLowerCase();
    filter(tem);
})

// LocalStorage section
    // localStorage.setItem('addForm',addForm)
    
    // if( localStorage.getItem('addForm')){
    //     generateTemplate(localStorage.getItem('html'))
    //     .then(data=>addForm(data))
    //     .catch(err=>console.log(err))
    // }