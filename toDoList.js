const listContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let lists = [];

newListForm.addEventListener('submit', function(e) {
    e.preventDefault() //para não perder os dados capturados ao atualizar a página
    const listName = newListInput.value; //pegar o valor de input

    if (listName === null || listName === '') return
    const list = createList (listName);
    newListInput.value = null;
    lists.push(list);
    render();
})

function createList (name) {
    return {id: Date.now().toString(), name: name }
}

function render () { //função que vai mostrar os itens na tela
    clearElement(listContainer)
    lists.forEach(function(list) {
        const item = document.createElement('li');
        item.classList.add('item');
        item.innerText = list.name;
        listContainer.appendChild(item);
    })
}

function clearElement (element) {
    while (element.firstChild) {
        element.removeChild (element.firstChild)
    }
}

render();

