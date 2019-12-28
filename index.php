<?php

include 'config/config.php';

$n = 10;
function getName($n)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';

    for ($i = 0; $i < $n; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $randomString .= $characters[$index];
    }

    return $randomString;
}

if (!isset($_SESSION['userId'])) {
    $_SESSION['userId'] = getName($n);
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Prossic</title>
    <link rel="stylesheet" type="text/css" href="css/normalize.css">
    <link rel="stylesheet" type="text/css" href="css/grid.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" href="css/style-100.css">
</head>
<body>

<nav>
    <div class="container" id="nav">
        <div class="row">
            <div class="col-1-sm mobile-hide">
            </div>

            <div class="col-lg-3 col-sm-2 col-xs-1">
                <a href="#home"><img src="img/logo.svg"></a>
            </div>

            <div class="col-lg-7 col-sm-7 col-xs-7" id="navigation">
                <ul class="white-content">
                    <li class="mobile-hide"><a href="#problem">Problem</a></li>
                    <li class="mobile-hide"><a href="#solution">Solution</a></li>
                    <li class="mobile-hide"><a href="#testimonials">Testimonials</a></li>
                    <li class="mobile-hide"><a href="gallery.html">Gallery</a></li>
                    <li class="mobile-hide"><a href="video.html">Video</a></li>
                    <li class="mobile-hide"><a href="cart.php">Cart</a></li>
<!--                    <li class="mobile-hide"><a href="cart.php"><i class="fas fa-shopping-cart"></i></a></li>-->
                    <!-- <li id="languages">
                        <a id="lang-trigger">Languages</a>
                        <ul id="lang-dropdown">
                            <li><a href="#">English</a></li>
                            <li><a href="#">Serbian</a></li>
                            <li><a href="#">Turkish</a></li>
                            <div id="lang-overlay"></div>
                        </ul>
                    </li> -->
                </ul>
            </div>

        </div>
    </div>
</nav>

<div class="container hero white-content" id="home">
    <div class="hero-inner">
        <div class="row">
            <div class="col-1 mobile-hide">

            </div>

            <div class="col-lg-5 col-md-5 col-xs-5">
                <h1>Protect Your Instruments<br>With Our Masks</h1>
                <p>If you want to protect your valuable instrument and prevent it’s new look to wear out over time.
                    Prossic Masks will save the day while you effortlessly play.</p>
                <button type="button" class="btn btn-lg" data-toggle="modal" data-id="A1c9ZQSJvHU"
                        data-target="#myModal" style="color: white">
                    <img src="img/play.svg">&nbsp;Watch The Video
                </button>
            </div>

            <div class="col-lg-4 col-md-4 col-xs-4 m-auto">
                <a style="text-decoration: none" href="#order"><h1>Order Now</h1></a>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog" data-id="A1c9ZQSJvHU">
        <div class="modal-dialog modal-lg">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-body" id="yt-player">
                    <div class="embed-responsive embed-responsive-16by9">

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="container pb-3" id="startchange">
    <section dir="rtl" class="half-col" id="problem">
        <div dir="ltr" class="text-table">
            <h1>Before Prossic</h1>
            <p>Frequent use of an instrument causes scratches, color fading and stains from liquid spills.
                <br><br>
                This in turn lowers the value of the instrument, and aesthetically looks very unpleasing. Lorem ipsum
                filling up this place with random text so I can see how it looks in the production.
            </p>
        </div>
        <div class="table-left">
            <img src="img/problem-img.png">
        </div>
    </section>

    <section class="half-col" id="solution">
        <div class="text-table">
            <h1>After Prossic</h1>
            <p>Our Masks are seamless products that discreetly stick on your instrument.
                <br><br>
                They permanently prevent color fading caused by frequent playing, and provide surface protection from:
                scratches, liquid spills and minor physical damage.
                <br><br>
                The Masks are quite easy to set up and they keep higher used value for reselling.
            </p>
        </div>
        <div class="table-right">
            <img src="img/solution-img.png">
        </div>
    </section>

</div>

<div class="container white-content black-bg" id="testimonials">
    <div class="row">
        <div class="col-12">
            <h1>Testimonials</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-6 text-center">
            <img src="img/klavir1.png" id="bg">
        </div>
        <div class="col-4">
            <p id="test-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</p>
            <p id="test-writer">Zoki Gasterbajter</p>
        </div>
    </div>

    <div class="row" id="test-images">
        <div class="col-2-sm active" id="image-1">
            <img src="img/klavir1.png" data-id="1">
        </div>
        <div class="col-2-sm" id="image-2">
            <img src="img/problem-img.png" data-id="2">
        </div>
        <div class="col-2-sm" id="image-3">
            <img src="img/solution-img.png" data-id="3">
        </div>
        <div class="col-2-sm" id="image-4">
            <img src="img/klavir1.png" data-id="4">
        </div>
        <div class="col-2-sm" id="image-5">
            <img src="img/problem-img.png" data-id="5">
        </div>
        <div class="col-2-sm" id="image-6">
            <img src="img/solution-img.png" data-id="6">
        </div>
    </div>
</div>

<div class="container" id="order">
    <div class="row">

        <!-- Modal -->
        <div id="myOrder" class="modal fade" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title text-center">Order details</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                </div>

            </div>
        </div>

    </div>

    <div class="order-section">
        <?php
        //        $_SESSION['service'] = $_POST['service'];
//        var_dump($_SESSION);

        ?>
        <form id="add-to-cart">
            <input type="hidden" name="type_order_hidden" value="">
            <input type="hidden" name="mark_order_hidden" value="">
            <input type="hidden" name="model_order_hidden" value="">

            <input type="hidden" name="main_order_hidden" value=""> <!-- Main -->
            <input type="hidden" name="main_order_price_hidden" value=""> <!-- Main -->
            <input type="hidden" name="side_order_pattern_hidden" value=""> <!-- Side -->
            <input type="hidden" name="side_order_color_hidden" value=""> <!-- Side -->
            <input type="hidden" name="side_order_price_hidden" value=""> <!-- Side -->
            <input type="hidden" name="display_order_hidden_" value=""> <!-- Display -->
            <input type="hidden" name="display_order_price_hidden" value=""> <!-- Display -->
            <input type="hidden" name="keys_half_pattern_order_hidden" value=""> <!-- Keys Half -->
            <input type="hidden" name="keys_half_color_order_hidden" value=""> <!-- Keys Half -->
            <input type="hidden" name="keys_half_price_order_hidden" value=""> <!-- Keys Half -->
            <input type="hidden" name="keys_whole_pattern_order_hidden" value=""> <!-- Keys Whole -->
            <input type="hidden" name="keys_whole_color_order_hidden" value=""> <!-- Keys Whole -->
            <input type="hidden" name="keys_whole_price_order_hidden" value=""> <!-- Keys Whole -->


        <div class="row">
            <div class="col-12 text-center">
                <h1 id="order-title">Chose Your Instrument Type</h1>
            </div>
        </div>

        <div class="order-content">

            <div class="row">
                <div class="col m-0 p-0 type-opacity">
                    <img id="order-keyboard" src="img/klavir1.png">
                    <div class="centered centDiv">
                        <h2> Keyboard </h2>
                    </div>
                </div>
                <div class="col m-0 p-0 type-opacity">
                    <img id="order-mixing" src="img/klavir1.png">
                    <div class="centered centDiv">
                        <h2> Mixing Console </h2>
                    </div>
                </div>
                <div class="col m-0 p-0 type-opacity">
                    <img id="order-guitar" src="img/klavir1.png">
                    <div class="centered centDiv">
                        <h2> Guitar Processors </h2>
                    </div>
                </div>
            </div>
        </div>
        </form>
        <!--		<div class="row">-->
        <!--			<button type="submit" class="btn btn-dark m-auto">Add to cart</button>-->
        <!--		</div>-->
    </div>

    <!-- Success Modal -->
    <div id="cartInformationSuccessModal" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-body text-center">
                    <p class="mb-0">Added to cart.</p>
                </div>
            </div>

        </div>
    </div>

    <!-- Fail Modal -->
    <div id="cartInformationFailModal" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-body text-center">
                    <p class="mb-0">Please select products to add to cart.</p>
                </div>
            </div>

        </div>
    </div>


</div>

<!-- Footer -->
<footer class="page-footer font-small blue text-center mt-5">
    <!-- Trigger the modal with a button -->
    <a style="text-decoration: none" data-toggle="modal" data-target="#contactModal" href="#">Can't find your model? Contact us and we'll see what we
        can do.</a>

    <!-- Modal -->
    <div id="contactModal" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title m-auto">Contact Us</h4>
                </div>

                <form action="mailer/PHPMailer.php" method="post">
                    <div class="modal-body">
                        <label for="comment">Message:</label>
                        <textarea name="textarea" class="form-control mb-2" rows="4" id="comment"></textarea>
                        Name: <input class="mb-2" type="text" name="name"> <br>
                        Email: <input class="mb-2" type="email" name="email">
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-default m-auto">Send</button>
                    </div>
                </form>
            </div>

        </div>
    </div>

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2019 Copyright:
        <a href="#">Prossic.com</a>
    </div>
    <!-- Copyright -->

</footer>
<!-- Footer -->


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>

<script type="text/javascript" src="js/custom.js"></script>
<script type="text/javascript" src="js/ajax.js"></script>
</body>
</html>

