$(function() {

         $("#fname_error_message").hide();
         $("#fnum_error_message").hide();
         $("#fmonth_error_message").hide();
         $("#fyear_error_message").hide();
         $("#fcvc_error_message").hide();

         var error_fname = false;
         var error_fnum = false;
         var error_fdate = false;
         var error_fmonth = false;
         var error_fcvc = false;

         $("#form_fname").focusout(function(){
            check_fname();
         });
         $("#form_fnum").focusout(function() {
            check_fnum();
         });
         $("#form_fmonth").focusout(function() {
            check_fmonth();
         });
         $("#form_fyear").focusout(function() {
            check_fyear();
         });
         $("#form_fcvc").focusout(function() {
            check_fcvc();
         });

         function check_fname() {
            var pattern = /^[a-zA-Z .]*$/;
            var fname = $("#form_fname").val();
            if (pattern.test(fname) && fname !== '') {
               $("#fname_error_message").hide();
               $("#form_fname").css("border-bottom","2px solid #34F458");
            } else {
               $("#fname_error_message").html("!error");
               $("#fname_error_message").show();
               $("#form_fname").css("border-bottom","2px solid #dc3535");
               error_fname = true;
            }
         }

         function check_fnum() {
            var pattern = /^[0-9 ]*$/;
            var fnum = $("#form_fnum").val();
            if (pattern.test(fnum) && fnum !== '' &&  fnum.length == 19 ){
               $("#fnum_error_message").hide();
               $("#form_fnum").css("border-bottom","2px solid #34F458");
            }else {
               $("#fnum_error_message").html("!error");
               $("#fnum_error_message").show();
               $("#form_fnum").css("border-bottom","2px solid #F90A0A");
               error_fnum = true;
            }
         }

         function check_fmonth() {
            var pattern = /^[0-9]*$/
            var fmonth = $("#form_fmonth").val();
            if (pattern.test(fmonth) && fmonth !== '' && (fmonth.length == 2 || fmonth.length < 2) && (fmonth < 13) ) {
               $("#fmonth_error_message").hide();
               $("#form_fmonth").css("border-bottom","2px solid #34F458");

            } else {
              $("#fmonth_error_message").html("!error");
              $("#fmonth_error_message").show();
              $("#form_fmonth").css("border-bottom","2px solid #F90A0A");
              error_fmonth = true;
            }
         }

         function check_fyear() {
            var pattern = /^[0-9]*$/;
            var fyear = $("#form_fyear").val();
            if (pattern.test(fyear) && fyear !=='' && fyear > 2022 && fyear < 2030 || fyear ==2022) {
               $("#fyear_error_message").hide();
               $("#form_fyear").css("border-bottom","2px solid #34F458");

            } else {
              $("#fyear_error_message").html("!error");
              $("#fyear_error_message").show();
              $("#form_fyear").css("border-bottom","2px solid #F90A0A");
              error_fyear = true;
            }
         }

         function check_fcvc() {
            var pattern = /^[0-9]*$/;
            var fcvc = $("#form_fcvc").val();
            if (pattern.test(fcvc) && fcvc !== '' && fcvc.length == 3) {
               $("#fcvc_error_message").hide();
               $("#form_fcvc").css("border-bottom","2px solid #34F458");
            } else {
               $("#fcvc_error_message").html("!error");
               $("#fcvc_error_message").show();
               $("#form_cvc").css("border-bottom","2px solid #F90A0A");
               error_fcvc = true;
            }
         }

         $("#bt").click(function() {
            error_fname = false;
            error_fnum = false;
            error_fmonth = false;
            error_fyear = false;
            error_fcvc = false;

            check_fname();
            check_fnum();
            check_fmonth();
            check_fyear();
            check_fcvc();

            if (error_fname === false && error_fnum === false && error_fmonth === false && error_fyear === false && error_fcvc === false) {

             $(function () {
                var name = $(".in-na").val();
                var num = $(".in-nu").val();
                var month = $(".in-m").val();
                var year = $(".in-y").val();
                var cvc = $(".in-cvc").val();

                localStorage.setItem("name1",name);
                localStorage.setItem("num1",num);
                localStorage.setItem("month1",month);
                localStorage.setItem("year1",year);
                localStorage.setItem("cvc1",cvc);

                window.location.href="index2.html";})


                return true;}


});});
