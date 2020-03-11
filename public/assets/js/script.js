$(() => {

    $("#addBurgerBtn").on("click", function () {
        
        if(!inputValidate($("#burgerEntryField").val())) {return;}
        let newBurger = {
            name : $("#burgerEntryField").val()
        };
        console.log(location);
        $.ajax(`/api/newburger`, {
            type: "PUT",
            data: newBurger
          }).then( function () {
            console.log('here');
            });
        setTimeout(window.location.reload(), 3000);
    });
    $(".burgerAddLbl").on("click", function () {
        $("#addBurgerBtn").click();
    });
    $('button').on("click", function () {
        if(this.id === "addBurgerBtn") {
            console.log('submit button press');
            return;
        } else {
            console.log('eat button press');
            $.ajax(`/api/burger/${this.id}`, {
                type: "PUT"
              }).then( function () {
                console.log('clicked eat');
                location.reload();
            });
            setTimeout(function() {
                window.location.reload();
            }, 500);
        }
    });

});

function inputValidate(input) {
    let trimmed =  input.trim();
    console.log(trimmed);
    if(trimmed) {
        $("#burgerEntryField").attr('data-state', 'valid');
        return true;
    } else {
        $("#burgerEntryField").attr('data-state', 'invalid');
        return false;
    }
}
// const id = $(this).data("id");