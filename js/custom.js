$(document).ready(function () {

    //navbar change collor
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $("#nav").css('background-color', 'black');
            } else {
                $('#nav').css('background-color', 'transparent');
            }
        });
    }

    //smooth scroll + offset
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 40
        }, 500);
    });

    // stop youtube to continue playing when model is closed
    // on preview show iframe
    $('#myModal').on('show.bs.modal', function (e) {
        var idVideo = $(e.relatedTarget).data('id');
        $('#myModal .modal-body').html('<iframe width="100%" height="400px" src="https://www.youtube.com/embed/' + idVideo +
            '?autoplay=true" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
    //on close remove
    $('#myModal').on('hidden.bs.modal', function () {
        $('#myModal .modal-body').empty();
    });


    // Testemonials section
    $('#image-1').click(function (e) {
        $('.col-2-sm').removeClass('active');
        $(this).addClass('active');

        $('#bg').attr('src', "img/klavir1.png");
        $('#test-copy')[0].innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
        $('#test-writer')[0].innerHTML = 'Zoki Gasterbajter';
    });
    $('#image-2').click(function () {
        $('.col-2-sm').removeClass('active');
        $(this).addClass('active');

        $('#bg').attr('src', "img/problem-img.png");
        $('#test-copy')[0].innerHTML = 'Cursus turpis massa tincidunt dui ut ornare. Mattis pellentesque id nibh tortor id aliquet lectus proin. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Tempus egestas sed sed risus pretium quam vulputate dignissim.';
        $('#test-writer')[0].innerHTML = 'Miki Gasterbajter';
    });
    $('#image-3').click(function () {
        $('.col-2-sm').removeClass('active');
        $(this).addClass('active');

        $('#bg').attr('src', "img/solution-img.png");
        $('#test-copy')[0].innerHTML = 'Aenean sed adipiscing diam donec adipiscing tristique risus nec. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Et magnis dis parturient montes nascetur ridiculus mus mauris.';
        $('#test-writer')[0].innerHTML = 'Roki Gasterbajter';
    });
    $('#image-4').click(function () {
        $('.col-2-sm').removeClass('active');
        $(this).addClass('active');

        $('#bg').attr('src', "img/klavir1.png");
        $('#test-copy')[0].innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
        $('#test-writer')[0].innerHTML = 'Japi Gasterbajter';
    });
    $('#image-5').click(function () {
        $('.col-2-sm').removeClass('active');
        $(this).addClass('active');

        $('#bg').attr('src', "img/problem-img.png");
        $('#test-copy')[0].innerHTML = 'Cursus turpis massa tincidunt dui ut ornare. Mattis pellentesque id nibh tortor id aliquet lectus proin. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Tempus egestas sed sed risus pretium quam vulputate dignissim.';
        $('#test-writer')[0].innerHTML = 'Marvin Gasterbajter';
    });
    $('#image-6').click(function () {
        $('.col-2-sm').removeClass('active');
        $(this).addClass('active');

        $('#bg').attr('src', "img/solution-img.png");
        $('#test-copy')[0].innerHTML = 'Aenean sed adipiscing diam donec adipiscing tristique risus nec. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Et magnis dis parturient montes nascetur ridiculus mus mauris.';
        $('#test-writer')[0].innerHTML = 'Boki Gasterbajter';
    });


    // Order section
    $('.order-content').on('mouseover', '.mark-opacity, .model-opacity', function () {
            $(this).css('opacity', '1');
        }
    );

    $('.order-content').on('mouseout', '.mark-opacity, .model-opacity', function () {
            $(this).css('opacity', '0.5');
        }
    );

    function getBrandsByInstrumentType(brands) {
        var result = '';

        for (var i = 0; i < brands.length; i++) {
            result += '<div class="row">';
            for (var j = 0; j < brands[i].length; j++) {
                result += '<div class="col-sm text-center mark-opacity">' + brands[i][j] + '</div>';
            }
            result += '</div>';
        }
        result += '<div class="row back">';
        result += '<div id="" class="col-sm text-center"> Back </div>';
        result += '</div>';

        return result;
    }

    $('.order-content').on('click', '.type-opacity', function () {
        var typeText = $(this).find('img').attr('id');
        console.log(typeText);

        $('input[name="type_order_hidden"]').val(typeText);

        if (typeText == 'order-keyboard') {
            $('#order-title').html('Chose Your Keyboard Brand');

            $('.order-content').html(
                getBrandsByInstrumentType([
                    ['Korg', 'Yamaha', 'Roland'],
                    ['Kurzweil', 'Dynacord', 'Behringer'],
                    ['Allan&heat', 'Presonus', 'Studiomaster'],
                    ['Midas', '', ''],
                ])
            );

        }

        if (typeText == 'order-mixing') {
            $('#order-title').html('Chose Your Mixing Console Brand');
        }
    });

    function getModelsByBrand(models) {
        var result = '';

        for (var i = 0; i < models.length; i++) {
            result += '<div class="row">';
            for (var j = 0; j < models[i].length; j++) {
                result += '<div class="col-sm text-center model-opacity">' + models[i][j] + '</div>';
            }
            result += '</div>';
        }
        result += '<div class="row back">';
        result += '<div id="back-to-keyboard-brand" class="col-sm text-center"> Back </div>';
        result += '</div>';

        return result;
    }


    //Prints content based on mark selected
    $('.order-content').on('click', '.mark-opacity', function () {
        var markText = $.trim($(this).text());
        console.log(markText);

        $('input[name="mark_order_hidden"]').val(markText);

        $('#order-title').html('Chose Your Model');

        if (markText == 'Korg') {
            $('.order-content').html(
                getModelsByBrand([
                    ['Pa4x, Mg1, Musicant / 61 keys', 'Pa4x, Mg2, Oriental / 61 keys', 'Pa4x, Mg1, Musicant / 76 keys'],
                    ['Pa4x, Mg2, Oriental / 76 keys', 'Pa3x, Mg1, Musicant / 61 keys', 'Pa3x, Mg2, Oriental / 61 keys'],
                    ['Pa3x, Mg1, Musicant / 76 keys', 'Pa3x, Mg2, Oriental / 76 keys', 'Pa3x LE / 76 keys'],
                    ['Pa2x PRO / 76 keys', 'Pa1x PRO / 76 keys', 'Pa1x / 61 keys'],
                    ['Kronos 2, SE / 61 keys', 'Kronos 2, SE / 73 keys', 'Kronos 2, SE, Platinum / 88 keys'],
                    ['Kronos LS / 88 keys', 'Kronos X, 1 / 61 keys', 'Kronos X, 1 / 73 keys'],
                    ['Pa 1000 / 61 keys', 'Pa 900 / 61 keys', 'Pa 800 / 61 keys'],
                    ['Pa 700 / 61 keys', 'Pa 600 / 61 keys', 'Pa 500 / 61 keys'],
                    ['Pa 80 / 61 keys', 'Pa 60 / 61 keys', 'Triton LE, TR / 61 keys'],
                    ['Triton CLASSIC / 61 keys', 'Triton EXTREME / 61 keys', 'Triton STUDIO / 61 keys']
                ])
            );
        }

        if (markText == 'Yamaha') {
            $('.order-content').html(
                getModelsByBrand([
                    ['Genos / 76 keys', 'Montage 6 / 61 keys', 'Montage 7 / 76 keys'],
                    ['Tyros 5 / 76 keys', 'Tyros 5 / 61 keys', 'Tyros 4 / 61 keys'],
                    ['Tyros 3 / 61 keys', 'XS, XF 6 / 61 keys', 'XS, XF 7 / 76 keys'],
                    ['PSR-OR 700 / 61 keys', 'PSR-S 700 / 61 keys', '']
                ])
            );
        }

        if (markText == 'Roland') {
            $('.order-content').html(
                getModelsByBrand([
                    ['FA 06 / 61 keys', 'JUNO-DS / 61 keys', 'EA 7 / 61 keys'],
                    ['Fantom X6 / 61 keys', 'Fantom G6 / 61 keys', 'Edirol PCR 800 / 61 keys']
                ])
            );
        }

        if (markText == 'Kurzweil') {
            $('.order-content').html(
                getModelsByBrand([
                    ['Pc3a6 / 61 keys', 'Pc3k6 / 61 keys', '']
                ])
            );
        }

        if (markText == 'Dynacord') {
            $('.order-content').html(
                getModelsByBrand([
                    ['CMS, PM 3 / 1000', 'CMS, PM 3 / 2200', 'PM 2 / 600'],
                    ['PM 2 / 1600', 'PM 1 / 1000', 'PM 1 / 1600'],
                ])
            );
        }

        if (markText == 'Behringer') {
            $('.order-content').html(
                getModelsByBrand([
                    ['X32', '', '']
                ])
            );
        }

        if (markText == 'Allan&heat') {
            $('.order-content').html(
                getModelsByBrand([
                    ['Q 16', 'Pa12 CP', '']
                ])
            );
        }

        if (markText == 'Presonus') {
            $('.order-content').html(
                getModelsByBrand([
                    ['16.0.2.', '16.4.2.', '24.4.2.']
                ])
            );
        }

        if (markText == 'Studiomaster') {
            $('.order-content').html(
                getModelsByBrand([
                    ['Digilive 16', '', '']
                ])
            );
        }

        if (markText == 'Midas') {
            $('.order-content').html(
                getModelsByBrand([
                    ['M32R', '', '']
                ])
            );
        }
    });

    //Back buton - prints content for keyboard brads
    $('.order-content').on('click', '#back-to-keyboard-brand', function () {
        $('#order-title').html('Chose Your Keyboard Brand');

        $('.order-content').html(
            getBrandsByInstrumentType([
                ['Korg', 'Yamaha', 'Roland'],
                ['Kurzweil', 'Dynacord', 'Behringer'],
                ['Allan&heat', 'Presonus', 'Studiomaster'],
                ['Midas', '', ''],
            ])
        );
    });

    //Back buton - prints content for keyboard models
    $('.order-content').on('click', '#back-to-keyboard-model', function () {
        $('#order-title').html('Chose Your Model');

        var markText = $('input[name="mark_order_hidden"]').val();

        if (markText == 'Korg') {
            $('.order-content').html(
                getModelsByBrand([
                    ['Pa4x, Mg1, Musicant / 61 keys', 'Pa4x, Mg2, Oriental / 61 keys', 'Pa4x, Mg1, Musicant / 76 keys'],
                    ['Pa4x, Mg2, Oriental / 76 keys', 'Pa3x, Mg1, Musicant / 61 keys', 'Pa3x, Mg2, Oriental / 61 keys'],
                    ['Pa3x, Mg1, Musicant / 76 keys', 'Pa3x, Mg2, Oriental / 76 keys', 'Pa3x LE / 76 keys'],
                    ['Pa2x PRO / 76 keys', 'Pa1x PRO / 76 keys', 'Pa1x / 61 keys'],
                    ['Kronos 2, SE / 61 keys', 'Kronos 2, SE / 73 keys', 'Kronos 2, SE, Platinum / 88 keys'],
                    ['Kronos LS / 88 keys', 'Kronos X, 1 / 61 keys', 'Kronos X, 1 / 73 keys'],
                    ['Pa 1000 / 61 keys', 'Pa 900 / 61 keys', 'Pa 800 / 61 keys'],
                    ['Pa 700 / 61 keys', 'Pa 600 / 61 keys', 'Pa 500 / 61 keys'],
                    ['Pa 80 / 61 keys', 'Pa 60 / 61 keys', 'Triton LE, TR / 61 keys'],
                    ['Triton CLASSIC / 61 keys', 'Triton EXTREME / 61 keys', 'Triton STUDIO / 61 keys']
                ])
            );
        }

        if (markText == 'Yamaha') {
            $('.order-content').html(
                getModelsByBrand([
                    ['Genos / 76 keys', 'Montage 6 / 61 keys', 'Montage 7 / 76 keys'],
                    ['Tyros 5 / 76 keys', 'Tyros 5 / 61 keys', 'Tyros 4 / 61 keys'],
                    ['Tyros 3 / 61 keys', 'XS, XF 6 / 61 keys', 'XS, XF 7 / 76 keys'],
                    ['PSR-OR 700 / 61 keys', 'PSR-S 700 / 61 keys', '']
                ])
            );
        }

        if (markText == 'Roland') {
            $('.order-content').html(
                getModelsByBrand([
                    ['FA 06 / 61 keys', 'JUNO-DS / 61 keys', 'EA 7 / 61 keys'],
                    ['Fantom X6 / 61 keys', 'Fantom G6 / 61 keys', 'Edirol PCR 800 / 61 keys']
                ])
            );
        }

        if (markText == 'Kurzweil') {
            $('.order-content').html(
                getModelsByBrand([
                    ['Pc3a6 / 61 keys', 'Pc3k6 / 61 keys', '']
                ])
            );
        }

        if (markText == 'Dynacord') {
            $('.order-content').html(
                getModelsByBrand([
                    ['CMS, PM 3 / 1000', 'CMS, PM 3 / 2200', 'PM 2 / 600'],
                    ['PM 2 / 1600', 'PM 1 / 1000', 'PM 1 / 1600'],
                ])
            );
        }

        if (markText == 'Behringer') {
            $('.order-content').html(
                getModelsByBrand([
                    ['X32', '', '']
                ])
            );
        }

        if (markText == 'Allan&heat') {
            $('.order-content').html(
                getModelsByBrand([
                    ['Q 16', 'Pa12 CP', '']
                ])
            );
        }

        if (markText == 'Presonus') {
            $('.order-content').html(
                getModelsByBrand([
                    ['16.0.2.', '16.4.2.', '24.4.2.']
                ])
            );
        }

        if (markText == 'Studiomaster') {
            $('.order-content').html(
                getModelsByBrand([
                    ['Digilive 16', '', '']
                ])
            );
        }

        if (markText == 'Midas') {
            $('.order-content').html(
                getModelsByBrand([
                    ['M32R', '', '']
                ])
            );
        }
    });

    //FINAL STEP BEFORE ADD TO CART - ADD PRICES TO HIDDEN VALUES
    $('.order-content').on('click', '#mainCheck', function () {
        var mainText = $(this).val();
        var mainPrice = $('#mainPrice').text();

        if ($(this).is(":checked")) {
            $('input[name="main_order_hidden"]').val(mainText);
            $('input[name="main_order_price_hidden"]').val(mainPrice);
        } else if ($(this).is(":not(:checked)")) {
            $('input[name="main_order_hidden"]').val('');
            $('input[name="main_order_price_hidden"]').val('');
        }
    });

    $('.order-content').on('click', '#displayCheck', function () {
        var displayText = $(this).val();
        var displayPrice = $('#displayPrice').text();

        if ($(this).is(":checked")) {
            $('input[name="display_order_hidden_"]').val(displayText);
            $('input[name="display_order_price_hidden"]').val(displayPrice);
        } else if ($(this).is(":not(:checked)")) {
            $('input[name="display_order_hidden_"]').val('');
            $('input[name="display_order_price_hidden"]').val('');
        }
    });
    //FINAL STEP BEFORE ADD TO CART - ADD PRICES TO HIDDEN VALUES


    $('.order-content').on('click', '.model-opacity', function () {
        var modelText = $.trim($(this).text());
        console.log('test:' + modelText);

        $('input[name="model_order_hidden"]').val(modelText);

        $('#order-title').html('What Do You Need To Protect');

        if (modelText == 'Pa4x, Mg1, Musicant / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa4x, Mg2, Oriental / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa4x, Mg1, Musicant / 76 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa4x, Mg2, Oriental / 76 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa3x, Mg1, Musicant / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa3x, Mg2, Oriental / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa3x, Mg1, Musicant / 76 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa3x, Mg2, Oriental / 76 keys\n') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa3x LE / 76 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa2x PRO / 76 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa1x PRO / 76 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa1x / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Kronos 2, SE / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Kronos 2, SE / 73 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Kronos 2, SE, Platinum / 88 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Kronos LS / 88 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Kronos X, 1 / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Kronos X, 1 / 73 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa 1000 / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa 900 / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa 800 / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa 700 / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa 600 / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa 500 / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa 80 / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Pa 60 / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Triton LE, TR / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Triton CLASSIC / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Triton EXTREME / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
        if (modelText == 'Triton STUDIO / 61 keys') {
            $('.order-content').html(
                getHtmlForWhatDoYouNeedToProtect({
                    'mainPrice': 65,
                    'sidePrice1': 30,
                    'sidePrice2': 30,
                    'sidePattern': ['carbon fiber'],
                    'sideColor': ['black'],
                    'displayPrice': 10,
                    'keysHalfPrice1': 20,
                    'keysHalfPrice2': 30,
                    'keysHalfPattern': ['classic matt'],
                    'keysHalfColor': ['grey', 'red', 'silver', 'red'],
                    'keysWholePrice1': 20,
                    'keysWholePrice2': 30,
                    'keysWholePattern': ['classic matt', 'carbon fiber'],
                    'keysWholeColor': ['grey', 'red', 'silver', 'red'],
                })
            );
        }
    });

    function getHtmlForWhatDoYouNeedToProtect(data) {
        var result = '';

        // MAIN - proslediti cenu
        result += '<div class="row">';
        result += '<div class="col">';
        result += '<div class="form-check mb-2">';
        result += '<input class="form-check-input" type="checkbox" value="Main" id="mainCheck">';
        result += '<label class="form-check-label" for="mainCheck">Main</label>';
        result += '</div>';
        result += '</div>';
        result += '<div class="col"></div>';
        result += '<div class="col"></div>';
        result += '<div class="col"><span id="mainPrice" style="opacity: 0.7;">' + data.mainPrice + '&euro;</span></div>';
        result += '</div>';

        // SIDE - proslediti patterns i colors i cenu
        result += '<div class="row">';
        result += '<div class="col">';
        result += '<div class="form-check mb-2">';
        result += '<input class="form-check-input" type="checkbox" value="Side" id="sideCheck">';
        result += '<label class="form-check-label" for="sideCheck">Side</label>';
        result += '</div>';
        result += '</div>';
        result += '<div class="col">';
        result += '<select class="browser-default" name="type" id="side_dropdown" style="opacity: 0.7;" disabled>';
        result += '<option value="" disabled selected>- Select pattern -</option>';
        result += '<option value="fiber">carbon fiber</option>';
        result += '</select>';
        result += '</div>';
        result += '<div class="col">';
        result += '<select class="browser-default ml-5" name="type" id="side_dropdown_2" style="opacity: 0.7;" disabled>';
        result += '<option value="" disabled selected>- Select color -</option>';
        result += '<option value="fiber">black</option>';
        result += '</select>';
        result += '</div>';
        result += '<div class="col"><span id="sidePrice" style="opacity: 0.7;">' + data.sidePrice1 + '/' + data.sidePrice2 + '&euro;</span></div>';
        result += '<input type="hidden" id="sidePriceHidden" value="' + data.sidePrice1 + '/' + data.sidePrice2 + '&euro;' + '">';
        result += '</div>';

        // DISPLAY - proslediti cenu
        result += '<div class="row">';
        result += '<div class="col">';
        result += '<div class="form-check mb-2">';
        result += '<input class="form-check-input" type="checkbox" value="Display" id="displayCheck">';
        result += '<label class="form-check-label" for="displayCheck">Display</label>';
        result += '</div>';
        result += '</div>';
        result += '<div class="col"></div>';
        result += '<div class="col"></div>';
        result += '<div class="col"><span id="displayPrice" style="opacity: 0.7;">' + data.displayPrice + '&euro;</span></div>';
        result += '</div>';

        // KEYS HALF proslediti patterns i colors i cene
        result += '<div class="row">';
        result += '<div class="col">';
        result += '<div class="form-check mb-2">';
        result += '<input class="form-check-input" type="checkbox" value="KeysHalf" id="keysHalfCheck">';
        result += '<label class="form-check-label" for="keysHalfCheck">Keys-half</label>';
        result += '</div>';
        result += '</div>';
        result += '<div class="col">';
        result += '<select class="browser-default" name="type" id="keys_half_dropdown" style="opacity: 0.7;" disabled>';
        result += '<option value="" disabled selected>- Select pattern -</option>';
        result += '<option value="matt">classic matt</option>';
        result += '</select>';
        result += '</div>';
        result += '<div class="col">';
        result += '<select class="browser-default ml-5" name="type" id="keys_half_dropdown_2" style="opacity: 0.7;" disabled>';
        result += '<option value="" disabled selected>- Select color -</option>';
        result += '<option value="grey">grey</option>';
        result += '<option value="red">red</option>';
        result += '<option value="silver">silver</option>';
        result += '<option value="gold">gold</option>';
        result += '</select>';
        result += '</div>';
        result += '<div class="col"><span id="keysHalfPrice" style="opacity: 0.7;">' + data.keysHalfPrice1 + '/' + data.keysHalfPrice2 + '&euro;</span></div>';
        result += '<input type="hidden" id="keysHalfPriceHidden" value="' + data.keysHalfPrice1 + '/' + data.keysHalfPrice2 + '&euro;' + '">';
        result += '</div>';

        // KEYS WHOLE proslediti patterns i colors i cene
        result += '<div class="row">';
        result += '<div class="col">';
        result += '<div class="form-check mb-2">';
        result += '<input class="form-check-input" type="checkbox" value="KeysWhole" id="keysWholeCheck">';
        result += '<label class="form-check-label" for="keysWholeCheck">Keys-whole</label>';
        result += '</div>';
        result += '</div>';
        result += '<div class="col">';
        result += '<select class="browser-default" name="type" id="keys_whole_dropdown" style="opacity: 0.7;" disabled>';
        result += '<option value="" disabled selected>- Select pattern -</option>';
        result += '<option value="matt">classic matt</option>';
        result += '<option value="fiber">carbon fiber</option>';
        result += '</select>';
        result += '</div>';
        result += '<div class="col">';
        result += '<select class="browser-default ml-5" name="type" id="keys_whole_dropdown_2" style="opacity: 0.7;" disabled>';
        result += '<option value="" disabled selected>- Select color -</option>';
        result += '<option value="grey">grey</option>';
        result += '<option value="red">red</option>';
        result += '<option value="silver">silver</option>';
        result += '<option value="gold">gold</option>';
        result += '</select>';
        result += '</div>';
        result += '<div class="col"><span id="keysWholePrice" style="opacity: 0.7;">' + data.keysWholePrice1 + '/' + data.keysWholePrice2 + '&euro;</span></div>';
        result += '<input type="hidden" id="keysWholePriceHidden" value="' + data.keysWholePrice1 + '/' + data.keysWholePrice2 + '&euro;' + '">';
        result += '</div>';
        result += '<div class="row back">';
        result += '<div id="back-to-keyboard-model" class="col-sm text-center"> Back </div>';
        result += '</div>';

        // BUTTON
        result += '<div class="row">';
        result += '<button type="submit" class="btn btn-dark m-auto">Add to cart</button>';
        result += '</div>';

        return result;
    }


    // TESTING IDEAS FOR SHOPPING

    //Main
    $(".order-content").on('click', '#mainCheck', function () {
        if ($(this).prop('checked')) {
            $('#mainPrice').css('opacity', 1);

        } else if ($(this).prop("checked") == false) {
            $('#mainPrice').css('opacity', 0.7);
        }
    });

    // Side panels
    $(".order-content").on('click', '#sideCheck', function () {
        let doublePrice = $('#sidePriceHidden').val();

        if ($(this).prop('checked')) {
            $('#side_dropdown').css('opacity', 1);
            $('#side_dropdown').removeAttr("disabled");

        } else if ($(this).prop("checked") == false) {
            $('#side_dropdown').css('opacity', 0.7);
            $('#side_dropdown').prop("disabled", true);
            $('#side_dropdown').prop('selectedIndex', 0);

            $('#side_dropdown_2').css('opacity', 0.7);
            $('#side_dropdown_2').prop("disabled", true);
            $('#side_dropdown_2').prop('selectedIndex', 0);

            $('#sidePrice').html(doublePrice);
            $('#sidePrice').css('opacity', 0.7);
        }
    });

    $(".order-content").on('change', '#side_dropdown', function () {
        let doublePrice = $('#sidePriceHidden').val();
        let price1 = doublePrice.split('/')[0];
        let price2 = doublePrice.split('/')[1].slice(0, -1);

        $('#side_dropdown_2').css('opacity', '1');
        $('#side_dropdown_2').removeAttr("disabled");

        if ($(this).val() == 'fiber') {
            $('#sidePrice').html(price1 + '&euro;');
        } else if ($(this).val() == 'matt') {
            $('#sidePrice').html(price2 + '&euro;');
        }

        var sidePatternText = $('#side_dropdown :selected').text();
        var sidePrice = $('#sidePrice').text();

        $('input[name="side_order_pattern_hidden"]').val(sidePatternText);
        $('input[name="side_order_price_hidden"]').val(sidePrice);
    });

    $(".order-content").on('change', '#side_dropdown_2', function () {
        $('#sidePrice').css('opacity', '1');

        var sideColorText = $('#side_dropdown_2 :selected').text();
        $('input[name="side_order_color_hidden"]').val(sideColorText);
    });

    //Display
    $(".order-content").on('change', '#displayCheck', function () {
        if ($(this).prop('checked')) {
            $('#displayPrice').css('opacity', 1);

        } else if ($(this).prop("checked") == false) {
            $('#displayPrice').css('opacity', 0.7);
        }
    });

    // Keys-half
    $(".order-content").on('click', "#keysHalfCheck", function () {
        let doublePrice = $('#keysHalfPriceHidden').val();

        if ($(this).prop('checked')) {
            $('#keys_half_dropdown').css('opacity', '1');
            $('#keys_half_dropdown').removeAttr("disabled");

        } else if ($(this).prop("checked") == false) {
            $('#keys_half_dropdown').css('opacity', '0.7');
            $('#keys_half_dropdown').prop("disabled", true);
            $('#keys_half_dropdown').prop('selectedIndex', 0);

            $('#keys_half_dropdown_2').css('opacity', '0.7');
            $('#keys_half_dropdown_2').prop("disabled", true);
            $('#keys_half_dropdown_2').prop('selectedIndex', 0);

            $('#keysHalfPrice').css('opacity', 0.7);
            $('#keysHalfPrice').html(doublePrice);
        }
    });
    $(".order-content").on('change', "#keys_half_dropdown", function () {
        let doublePrice = $('#keysHalfPriceHidden').val();
        let price1 = doublePrice.split('/')[0];
        let price2 = doublePrice.split('/')[1].slice(0, -1);

        $('#keys_half_dropdown_2').css('opacity', '1');
        $('#keys_half_dropdown_2').removeAttr("disabled");

        if ($(this).val() == 'fiber') {
            $('#keysHalfPrice').html(price1 + '&euro;');
        } else if ($(this).val() == 'matt') {
            $('#keysHalfPrice').html(price2 + '&euro;');
        }

        var keysHalfPatternText = $('#keys_half_dropdown :selected').text();
        var keysHalfPrice = $('#keysHalfPrice').text();

        $('input[name="keys_half_pattern_order_hidden"]').val(keysHalfPatternText);
        $('input[name="keys_half_price_order_hidden"]').val(keysHalfPrice);

    });

    $(".order-content").on('change', '#keys_half_dropdown_2', function () {
        $('#keysHalfPrice').css('opacity', '1');

        var keysHalfColorText = $('#keys_half_dropdown_2 :selected').text();
        $('input[name="keys_half_color_order_hidden"]').val(keysHalfColorText);
    });

    // Keys-whole
    $(".order-content").on('click', "#keysWholeCheck", function () {
        var doublePrice = $('#keysWholePriceHidden').val();

        if ($(this).prop('checked')) {
            $('#keys_whole_dropdown').css('opacity', '1');
            $('#keys_whole_dropdown').removeAttr("disabled");

        } else if ($(this).prop("checked") == false) {
            $('#keys_whole_dropdown').css('opacity', '0.7');
            $('#keys_whole_dropdown').prop("disabled", true);
            $('#keys_whole_dropdown').prop('selectedIndex', 0);

            $('#keys_whole_dropdown_2').css('opacity', '0.7');
            $('#keys_whole_dropdown_2').prop("disabled", true);
            $('#keys_whole_dropdown_2').prop('selectedIndex', 0);

            $('#keysWholePrice').html(doublePrice);
            $('#keysWholePrice').css('opacity', 0.7);
        }
    });
    $(".order-content").on('change', "#keys_whole_dropdown", function () {
        var doublePrice = $('#keysWholePriceHidden').val();
        var price1 = doublePrice.split('/')[0];
        var price2 = doublePrice.split('/')[1].slice(0, -1);

        $('#keys_whole_dropdown_2').css('opacity', '1');
        $('#keys_whole_dropdown_2').removeAttr("disabled");

        if ($(this).val() == 'fiber') {
            $('#keysWholePrice').html(price1 + '&euro;');
        } else if ($(this).val() == 'matt') {
            $('#keysWholePrice').html(price2 + '&euro;');
        }

        var keysWholePatternText = $('#keys_whole_dropdown :selected').text();
        var keysWholePrice = $('#keysWholePrice').text();

        $('input[name="keys_whole_pattern_order_hidden"]').val(keysWholePatternText);
        $('input[name="keys_whole_price_order_hidden"]').val(keysWholePrice);
    });
    $(".order-content").on('change', "#keys_whole_dropdown_2", function () {
        $('#keysWholePrice').css('opacity', '1');

        var keysWholeColorText = $('#keys_whole_dropdown_2 :selected').text();
        $('input[name="keys_whole_color_order_hidden"]').val(keysWholeColorText);
    });

});
