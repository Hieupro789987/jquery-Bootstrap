
$(document).ready(()=> {
    $('#list').click((e) => { 
        $(e.target).css('color', 'red')
    });
})


$(document).ready(function () {
    $('input').css('border', '2px solid red')
    $('#loginForm').click(function (e) { 
        e.preventDefault();
        console.log(e.target)
        $(e.target).css('border', '1px solid blue')
    });
});