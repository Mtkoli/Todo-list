const $ = document;
const form = $.querySelector('form');
form.addEventListener('submit', prev);
function prev(event){
    event.preventDefault();
}
const _class = (classname) => $.querySelector(`.${classname}`);
const ul = _class('list-group');
const inpt = _class('form-control');
let res = _class('res');
inpt.addEventListener('keydown', task);
function task(event){
    if(event.key == 'Enter'){
        if(inpt.value){
            res.innerText = '';
            let li = $.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            let span = $.createElement('span');
            span.innerText = inpt.value;
            icon = $.createElement('i');
            icon.className = 'fa fa-trash-o delete';
            icon.addEventListener('click', del);
            function del(event){
                event.target.parentNode.remove();
            }
            ul.appendChild(li);
            li.appendChild(span);
            li.appendChild(icon);
            inpt.value = '';
        }else{
            res.innerText = 'Write down your task above then hit Enter!'
        }
    }
}