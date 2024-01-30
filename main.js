$(document).ready(function(){
    $('form').on ('submit', funciton(e){
        e.preventDefault();
        const NomeDaTarefa = $('input').val();
        const novaTarefa = $(`<li>${nomeDaTarefa}</li>`)

        $(novaTarefa).appendTo('ul')
        $('input').val('')
})

    $('ul').on('click', 'li', function(e){
    e.preventDefault();
    $(this).toggleClass('riscarTarefa')

})


})