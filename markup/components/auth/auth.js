import 'jquery-validation';

$('#authForm').validate({
    errorPlacement: function (error, element) {
        $(error).addClass('inputError');
        error.insertAfter( element.parent() );
    },
    submitHandler: function (form) {
        form.reset();
        $('[data-remodal-id=auth]').remodal().close();
    }
});
