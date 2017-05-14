$(document).ready(function() {
    var GetinTouch = {
        init: function() {
            this.bindUiActions();
        },
        bindUiActions: function() {
            $('form').submit(function(event) {
                event.preventDefault();
            });

            $(".checkout").click(function() {
                if ($(this).hasClass('preorder-btn')) {
                    $(window).trigger('fillField');
                }

                GetinTouch.validateForm($(this));
            });

        },
        validateForm: function(submit) {
            var formValid = true,
                thisForm = submit.closest('form');
                /* validate e-mail */
            $('input.required', thisForm).each(function() {
                var thisInput = $(this),
                re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if ($(this).attr('name') === "e-mail") {
                    if(thisInput==="" || !re.test(thisInput.val())){
                        var rvmail = true;
                        formValid = false;
                        thisInput.addClass('wrong-form');
                    }
                    else{
                        thisInput.removeClass('wrong-form');
                    }
                } else {
                    if(thisInput===""){
                        formValid = false;
                    }
                };
                /* validate name */
                var rv_name = /[а-яА-ЯёЁa-zA-Z0-9\s]+$/;

                if ($(this).attr('name') === "name") {
                    if(thisInput==="" || !rv_name.test(thisInput.val())){
                        var rvname = true;
                        formValid = false;
                        thisInput.addClass('wrong-form');
                    }
                    else{
                        thisInput.removeClass('wrong-form');
                    }
                } else {
                    if(thisInput===""){
                        formValid = false;
                    }
                };

                /* validate name */
                var rv_name = /[а-яА-ЯёЁa-zA-Z0-9\s]+$/;

                if ($(this).attr('name') === "text") {
                    if(thisInput==="" || !rv_name.test(thisInput.val())){
                        var rvname = true;
                        formValid = false;
                        thisInput.addClass('wrong-form');
                    }
                    else{
                        thisInput.removeClass('wrong-form');
                    }
                } else {
                    if(thisInput===""){
                        formValid = false;
                    }
                };

            });

            if (formValid) {
                GetinTouch.sendForm(thisForm);
                $('.write-to-us input:not("[type=submit]"), .write-to-us textarea, #small-form input:not("[type=submit]")').val('');
            } else {
                return false;
            }
        },
        sendForm: function(thisForm) {
                var url = "sendmail.php";

                $.ajax({
                    type: "POST",
                    url: url,
                    data: thisForm.serialize(), // serializes the form's elements.
                    success: function(){
                        $('.send').remodal().open();
                        thisForm.find('input[type="text"]').val('');
                    }
                });
                
            return false;
        },
        bindPopup: function(container, onOpen) {
            container.bPopup({
                closeClass: 'close-popup',
                onOpen: onOpen
            });
        }
    };
        /* validate onblure */
        $('input').keyup(function(){
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if ($(this).attr('name') === "mail_field") {
                if($(this) === "" || !re.test($(this).val())){
                    var rvmail = true;
                    formValid = false;
                    $(this).addClass('wrong-form');
                }
                else{
                    $(this).removeClass('wrong-form');
                }
            }
        var rv_name = /[а-яА-ЯёЁa-zA-Z0-9\s]+$/;
        if ($(this).attr('name') === "name_field") {
                if($(this)==="" || !rv_name.test($(this).val())){
                    var rvname = true;
                    formValid = false;
                    $(this).addClass('wrong-form');
                }
                else{
                    $(this).removeClass('wrong-form');
                }
            } else {
                if($(this)===""){
                    formValid = false;
                }
            };
            var rv_phone = /[0-9]/;

            if ($(this).attr('name') === "phone_field") {
                if($(this).val().length < 10 || $(this)==="" || !rv_phone.test($(this).val())){
                    var rvphone = true;
                    formValid = false;
                    $(this).addClass('wrong-form');
                }
                else{
                            $(this).removeClass('wrong-form');
                }
                } else {
                    if($(this)===""){
                        formValid = false;
                }
            };
    });
    GetinTouch.init();
});
