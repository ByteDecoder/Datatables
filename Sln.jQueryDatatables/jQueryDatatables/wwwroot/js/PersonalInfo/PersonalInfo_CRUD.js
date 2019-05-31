
var AddEditPersonalInfo = function (id) {
    var url = "/PersonalInfo/AddEditPersonalInfo?id=" + id;
    if (id > 0)
        $('#title').html("Edit Personal Info");

    $("#PersonalInfoFormModelDiv").load(url, function () {
        $("#PersonalInfoFormModel").modal("show");

    });
};

$('body').on('click', "#btnSubmit", function () {
    var myformdata = $("#PersonalInfoForm").serialize();

    if ($.trim($('#FirstName').val()) === '') {
        Swal.fire({
            title: "Alert", text: "First Name can not be left blank.",
            icon: "info", closeOnConfirm: false,
            onAfterClose: () => {
                setTimeout(() => $("#FirstName").focus(), 110);
            }
        });
        return;
    }
    if ($.trim($('#LastName').val()) === '') {
        Swal.fire({
            title: "Alert", text: "Last Name can not be left blank.",
            icon: "info", closeOnConfirm: false,
            onAfterClose: () => {
                setTimeout(() => $("#LastName").focus(), 110);
            }
        });
        return;
    }


    if ($.trim($('#DateOfBirth').val()) === '') {
        Swal.fire({
            title: "Alert", text: "Date Of Birth can not be left blank.",
            icon: "info", closeOnConfirm: false,
            onAfterClose: () => {
                setTimeout(() => $("#DateOfBirth").focus(), 110);
            }
        });
        return;
    }

    $.ajax({
        type: "POST",
        url: "/PersonalInfo/Create",
        data: myformdata,
        success: function (result) {
            $("#PersonalInfoFormModel").modal("hide");

            Swal.fire({
                title: "Alert!",
                text: result,
                type: "Success"
            }).then(function () {
                $('#tblPersonalInfo').DataTable().ajax.reload();
            });
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
});

var DeletePersonalInfo = function (id) {
    Swal.fire({
        title: 'Do you want to delete this item?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "POST",
                url: "/PersonalInfo/Delete/" + id,
                success: function () {
                    Swal.fire({
                        title: 'Deleted!', text: 'Item has been deleted.',
                        icon: "success", closeOnConfirm: false,
                        onAfterClose: () => {
                            $('#tblPersonalInfo').DataTable().ajax.reload();
                        }
                    });
                }
            });
        }
    });
};



