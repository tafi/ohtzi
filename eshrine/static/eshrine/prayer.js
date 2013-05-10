var nameInputId = '#name-input';
var prayerInputId = '#prayer-input';
var dateInputId = '#date-input';
var defaultNameText = "Your name";
var defaultPrayerText = "Your prayer";

function getVal(inputName) {
	return $.trim($(inputName).val());
}

function isEmptyInput(inputName, defaultValue) {
	var inputVal = getVal(inputName);
	return (inputVal == defaultValue) || (inputVal == '');
}

function initInput(inputName, defaultValue){
	
	// Preliminaries
	$(inputName).val(defaultValue);
	
	// Define events
	$(inputName).focus(function(){
        if(getVal(inputName) == defaultValue){
            $(inputName).val('')
        }
    });
    $(inputName).blur(function(){
    	if(getVal(inputName) == ""){
            $(inputName).val(defaultValue);
        }
    });
}


$(document).ready(function() {
    
	$("#prayer-form").hide();
	
	$("#add").click(function(){
		// $("#add").hide('slow');
		$("#add").hide('slow');
		initInput(nameInputId, defaultNameText);
		initInput(prayerInputId, defaultPrayerText);
		setTimeout(function(){$("#prayer-form").show('slow');}, 500);
	});
	
	$("#prayer-form").submit(function(){
		if (isEmptyInput(nameInputId, defaultNameText) || isEmptyInput(prayerInputId, defaultPrayerText)){
			if (isEmptyInput(nameInputId, defaultNameText)) {
				$(nameInputId).addClass("prayer-missing-req");
				setTimeout(function(){$(nameInputId).removeClass("prayer-missing-req")}, 3000);
			}
			if (isEmptyInput(prayerInputId, defaultPrayerText)) {
				$(prayerInputId).addClass("prayer-missing-req");
				setTimeout(function(){$(prayerInputId).removeClass("prayer-missing-req")}, 3000);
			}
			return false;
		}
		else {
			// Get date
			var now = new Date()
			$(dateInputId).val(now);
			
			// Send form
			var prayerSel = "#prayer-form";
			// debugger;
			// $.ajax({
                // // data: $(prayerSel).serialize(),
                // data: {author: $(nameInputId).val().toString()},
                // type: $(prayerSel).attr('method'),
                // url: $(prayerSel).attr('action'),
                // failure: function(response) {
                	// alert(response);
                // },
                // success: function(response) {
                	// alert(response);
                    // // Update form
					// $("#prayer-list").before(
						// '<li><div style="color:#CC6600;display:inline;">' +
						// $("#name-input").val() + ' (' + now.toDateString().slice(4) + ')</div>: ' +
						// $("#prayer-input").val() + '</li>'
					// );
// 					
					// // Finalize
					// $("#add").show('slow');
					// $("#prayer-form").hide('slow');
            	// }
          	// });
          	$("#prayer-list").before(
				'<li><div style="color:#CC6600;display:inline;">' +
				$("#name-input").val() + ' (' + now.toDateString().slice(4) + ')</div>: ' +
				$("#prayer-input").val() + '</li>'
			);
          	$("#add").show('slow');
			$("#prayer-form").hide('slow');
			
            return false;
		}
	});
});
