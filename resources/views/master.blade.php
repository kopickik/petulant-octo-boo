<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Jeep Willikers</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/foundation.css">
        <link rel="stylesheet" href="css/app.css">
        <script src="//use.typekit.net/rpw0svh.js"></script>

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    </head>
    <body>
    <div class="container">
        @include('partials.topbar')

        @yield('content')
    </div>



    <script src="js/jquery.js"></script>
    <script src="js/foundation.js"></script>
    <script src="js/bundle.js"></script>
    <script>
    $(document).foundation();
    </script>
    <script>try{Typekit.load();}catch(e){}</script>

    </body>
</html>
