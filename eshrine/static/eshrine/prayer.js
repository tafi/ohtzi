var nameInputId = '#name-input';
var prayerInputId = '#prayer-input';
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
		$("#add").hide('slow');
		initInput(nameInputId, defaultNameText);
		initInput(prayerInputId, defaultPrayerText);
		$("#prayer-form").show('slow');
	});
	
	$("#prayer-submit").click(function(){
		// debugger;
		if (isEmptyInput(nameInputId, defaultNameText)) {
			$(nameInputId).addClass("prayer-missing-req");
			setTimeout(function(){$(nameInputId).removeClass("prayer-missing-req")}, 3000);
		}
		if (isEmptyInput(prayerInputId, defaultPrayerText)) {
			$(prayerInputId).addClass("prayer-missing-req");
			setTimeout(function(){$(prayerInputId).removeClass("prayer-missing-req")}, 3000);
		}
		else {
			var now = new Date()
			$("#prayer-list").before(
				'<li><div style="color:#CC6600;display:inline;">' +
				$("#name-input").val() + ' (' + now.toDateString().slice(4) + ')</div>: ' +
				$("#prayer-input").val() + '</li>'
			);
			// Finalize
			$("#add").show('slow');
			$("#prayer-form").hide('slow');
		}
	});
});
