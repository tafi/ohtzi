var nameInputId = '#id_author';
var prayerInputId = '#id_prayer';
var dateInputId = '#id_date';
var defaultNameText = "Your name";
var defaultPrayerText = "Your prayer";

function getVal(inputName) {
	return $.trim($(inputName).val());
}

function isEmptyInput(inputName, defaultValue) {
	var inputVal = getVal(inputName);
	return (inputVal == defaultValue) || (inputVal == '');
}

function getTimeStr(now) {
	var month = now.getMonth() + 1; // Returned month is 0-11
	var day = now.getDate(); // Returns actual day of month
	var ret = now.getFullYear() + '-' + month + '-' + day + ' ' + now.getHours() + ':' + now.getMinutes();
	return ret
}

function initInput(inputName, defaultValue){
	
	// Preliminaries
	$(inputName).val(defaultValue);
	$(dateInputId).hide();
	$('label').hide();
	$(nameInputId).addClass("prayer-form-element");
	$(prayerInputId).addClass("prayer-form-element");
	$(prayerInputId).css("height", "120px");
	
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
		setTimeout(function(){$("#prayer-form").show('slow');}, 500);
	});
	
	$("#prayer-cancel").click(function(){
		$("#prayer-form").hide('slow');
		$("#add").show('slow');
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
			// Update date
			var now = new Date();
			$(dateInputId).val(getTimeStr(now));
			
			// Send form
			var prayerSel = "#prayer-form";
			$.ajax({
                data: $(prayerSel).serialize(),
                type: $(prayerSel).attr('method'),
                url: "/eshrine/pray/",
                error: function(response) {
                	alert("An error has occured. The Tzi might not be available for prayers at this moment.");
                },
                success: function(response) {
                    // Update form
					$("#prayer-list").before(
						'<li><div class="prayer-title">' +
						$(nameInputId).val() + ' (' + now.toDateString().slice(4) + ')</div>: ' +
						$(prayerInputId).val() + '</li>'
					);
					
            	}
          	});
			// Finalize
			$("#add").show('slow');
			$("#prayer-form").hide('slow');
			
            return false;
		}
	});
});
