$(document).ready(function() {

    $('.table td input').click(function(){
        var id = $(this).attr('id');

        var arrayIndex = id.substr(id.length - 1);
        arrayIndex = arrayIndex - 1;

        var quantity = $('#' + id).val();

        $.ajax({
            // url: location.origin + '/prossic/ajax/updateQuantity.php',
            url: location.origin + '/ajax/updateQuantity.php',
            type: 'post',
            data: { quantity, arrayIndex },
            dataType: 'json',
            success: function(response){
                var n1 = parseInt(response.arrayIndex);
                var key = (n1 + 1);

                $('#subtotal-' + key).html(response.subtotal + '€');
                $('#total-price').html('<strong>Total ' + response.currentTotal + '€</strong>');
            }
        });
    });

    $('.table tbody td button').click(function(){
        var id = $(this).attr('id');

        var arrayIndex = id.substr(id.length - 1);
        arrayIndex = arrayIndex - 1;

        $.ajax({
            url: location.origin + '/ajax/removeProduct.php',
            // url: location.origin + '/prossic/ajax/removeProduct.php',
            type: 'post',
            data: { arrayIndex },
            dataType: 'json',
            success: function(response){
               if (true === response) {
                   location.reload();
               }
            }
        });
    });


    $('#add-to-cart').submit(function(e) {
        e.preventDefault();

        var markText = $('input[name="mark_order_hidden"]').val();
        var modelText = $('input[name="model_order_hidden"]').val();

        var main = $('input[name="main_order_hidden"]').val();
        var mainPrice = $('input[name="main_order_price_hidden"]').val();

        var sideColor = $('input[name="side_order_color_hidden"]').val();
        var sidePattern = $('input[name="side_order_pattern_hidden"]').val();
        var sidePrice = $('input[name="side_order_price_hidden"]').val();

        var display = $('input[name="display_order_hidden_"]').val();
        var displayPrice = $('input[name="display_order_price_hidden"]').val();

        var keysHalfColor = $('input[name="keys_half_color_order_hidden"]').val();
        var keysHalfPattern = $('input[name="keys_half_pattern_order_hidden"]').val();
        var keysHalfPrice = $('input[name="keys_half_price_order_hidden"]').val();

        var keysWholeColor = $('input[name="keys_whole_color_order_hidden"]').val();
        var keysWholePattern = $('input[name="keys_whole_pattern_order_hidden"]').val();
        var keysWholePrice = $('input[name="keys_whole_price_order_hidden"]').val();

        $.ajax({
            // url: location.origin + '/prossic/ajax/addToCart.php',
            url: location.origin + '/ajax/addToCart.php',
            type: 'post',
            data: {
                markText, modelText,
                main, mainPrice,
                sideColor, sidePattern, sidePrice,
                display, displayPrice,
                keysHalfColor, keysHalfPattern, keysHalfPrice,
                keysWholeColor, keysWholePattern, keysWholePrice
            },
            // dataType: 'json',
            success: function(response){

                if (mainPrice || sidePrice || displayPrice || keysHalfPrice || keysWholePrice) {
                    $('#cartInformationSuccessModal').modal('show');
                } else {
                    $('#cartInformationFailModal').modal('show');
                }

            }
        });
    });

	//get all marks of selected type
	$("#type_dropdown").change(function(){
        var typeId = $(this).val();

        $.ajax({
            url: location.origin + '/ajax/getMarks.php',
            type: 'post',
            data: {typeId},
            dataType: 'json',
            success:function(response){

                var len = response.length;

                $("#mark_dropdown").empty();
                $("#mark_dropdown").append('<option value="" disabled selected>- Pick type -</option>');
                $("#model_dropdown").empty();
                $("#model_dropdown").append('<option value="" disabled selected>- Pick model -</option>');
                $("#mask_dropdown").empty();
                $("#mask_dropdown").append('<option value="" disabled selected>- Pick mask -</option>');
                $("#color_dropdown").empty();
                $("#color_dropdown").append('<option value="" disabled selected>- Pick color -</option>');
                for( var i = 0; i<len; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];

                    $("#mark_dropdown").append("<option value='" + id + "'>" + name + "</option>");
                }
            }
        });

        $('#order_now').prop('disabled', true);
    });

	//get all models of selected mark
	$("#mark_dropdown").change(function(){
        var markId = $(this).val();
        var typeId = $("#type_dropdown").val();

        $.ajax({
            url: location.origin + '/ajax/getModels.php',
            type: 'post',
            data: {markId, typeId},
            dataType: 'json',
            success:function(response){

                var len = response.length;

                $("#model_dropdown").empty();
                $("#model_dropdown").append('<option value="" disabled selected>- Pick model -</option>');
                $("#mask_dropdown").empty();
                $("#mask_dropdown").append('<option value="" disabled selected>- Pick mask -</option>');
                $("#color_dropdown").empty();
                $("#color_dropdown").append('<option value="" disabled selected>- Pick color -</option>');
                for( var i = 0; i<len; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];

                    $("#model_dropdown").append("<option value='" + id + "'>" + name + "</option>");
                }
            }
        });

        $('#order_now').prop('disabled', true);
    });

	//get all masks of selected model
	$("#model_dropdown").change(function(){
        var modelId = $(this).val();

        $.ajax({
            url: location.origin + '/ajax/getMasks.php',
            type: 'post',
            data: {modelId},
            dataType: 'json',
            success:function(response){

                var len = response.length;

                $("#mask_dropdown").empty();
                $("#mask_dropdown").append('<option value="" disabled selected>- Pick mask -</option>');
                for( var i = 0; i<len; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];

                    $("#mask_dropdown").append("<option value='" + id + "'>" + name + "</option>");
                }
            }
        });

        $('#order_now').prop('disabled', true);
    });

	//get all colors of selected mask
	$("#mask_dropdown").change(function(){
        var maskId = $(this).val();

        $.ajax({
            url: location.origin + '/ajax/getColors.php',
            type: 'post',
            data: {maskId},
            dataType: 'json',
            success:function(response){

                var len = response.length;

                $("#color_dropdown").empty();
                $("#color_dropdown").append('<option value="" disabled selected>- Pick color -</option>');
                for( var i = 0; i<len; i++){
                    var id = response[i]['id'];
                    var name = response[i]['name'];
                    var price = response[i]['price'];

                    $("#color_dropdown").append("<option value='" + id + "'>" + name + " - " + price + " € " + "</option>");
                }
            }
        });

        $('#order_now').prop('disabled', true);
    });

    $('#color_dropdown').change(function() {
    	var colorId = $(this).val();
    	console.log(colorId);

        $('#order_now').prop('disabled', false);
    })

    $('#order_now').click(function() {
        var typeId = $('#type_dropdown').val();
        if (typeId != null) {
	        var typeText = $('#type_dropdown option:selected').text();
        	$('#type_order')[0].innerHTML = typeText;
	       	$('input[name="type_order_hidden"]').val(typeText);
	    }

        var markId = $('#mark_dropdown').val();
        if (markId != null) {
        	var markText = $('#mark_dropdown option:selected').text();
        	$('#mark_order')[0].innerHTML = markText;
	       	$('input[name="mark_order_hidden"]').val(typeText);
        }


        var modelId = $('#model_dropdown').val();
        if (modelId != null) {
	        var modelText = $('#model_dropdown option:selected').text();
	        $('#model_order')[0].innerHTML = modelText;
	       	$('input[name="model_order_hidden"]').val(typeText);
	    }

        var maskId = $('#mask_dropdown').val();
        if (maskId != null) {
	        var maskText = $('#mask_dropdown option:selected').text();
	        $('#mask_order')[0].innerHTML = maskText;
	       	$('input[name="mask_order_hidden"]').val(typeText);
	    }

        var colorId = $('#color_dropdown').val();
        if (colorId != null) {
	        var colorText = $('#color_dropdown option:selected').text();
	        $('#color_order')[0].innerHTML = colorText;
	       	$('input[name="color_order_hidden"]').val(typeText);
	    }


        console.log(colorId);
        console.log(colorText);
    })






});

