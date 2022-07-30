$("#addStudent").on("submit", (e) => {
    e.preventDefault();
    $.ajax({
        url: '/api/create',
        data: $("#addStudent").serialize(),
        type: "POST",
        beforeSend: function(){
            $("#add-user-submit-btn").html("Please Wait....");
        },
        success: function(data){
            console.log(data);
            if(data == 'success=true'){
                $("#form-result").html("User Added Successfully").fadeIn();
                $("#add-user-submit-btn").html("Submit");
            }
        }
    })
});

$("#updateStudent").on("submit", (e) => {
    e.preventDefault();
    $.ajax({
        url: '/api/update',
        data: $("#updateStudent").serialize(),
        type: "POST",
        beforeSend: function(){
            $("#update-user-submit-btn").html("Please Wait....");
        },
        success: function(data){
            console.log(data);
            if(data == 'success=true'){
                $("#update-form-result").html("User Updated Successfully").fadeIn();
                $("#update-user-submit-btn").html("Update User");
            }
        }
    })
});