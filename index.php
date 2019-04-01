<?php
/*
        ____   _  _                _
       |  _ \ | |(_)              | |
       | |_) || | _  _ __    __ _ | |
       |  _ < | || || '_ \  / _` || |
       | |_) || || || | | || (_| ||_|
       |____/ |_||_||_| |_| \__, |(_)
                             __/ |
                            |___/
Jumbotron 2.0:
Add content to .starshine and maybe de-twee the background ?
https://codepen.io/kucsatax/pen/vyWevX
https://codepen.io/anon/pen/daWwGq#anon-login
 */

//error_reporting(E_ALL);
ini_set('display_errors', 1);
$_SERVER['DOCUMENT_ROOT'] = '/home/wilpol10/billpollock.com/';

require_once ($_SERVER['DOCUMENT_ROOT'] . "/Phplib/PageGen/Bootstrap4/Superhero.php");
require_once ("bling-macros.php");


$page = new Superhero(array(
    'title' => "Pollock's Bling",
    //favicon => file_get_contents('Favicon/favicon.include'),
    'css' => array(
        'bling.css'
    ),
    'js' => array(
        'js/bling.js',
        'js/sparkle.js',
        'js/transform-characters.js'
    ),
//    additional_head => '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">',
 //   additional_footer => '<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min.js"></script>'
));
?>

<div class="container bling">
  <div class="jumbotron">
    <h1>Bling!</h1>
  </div>

  <div class="card">
    <form name="bling-controls" class="bling-controls">
      <div class="form-group">
        <label for="input_src">Text to convert:</label>
        <textarea id="input_src" name="input_text" class="form-control">Enter some text to enter, fiddle values</textarea>
      </div>
      <div class="form-group">
        <label for="output_dest">Text out:</label>
        <textarea id="output_dest" name="input_text" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <h2>Cursed text</h2>
        <?php 
            cursed_scale("above");
            // Alltho really/mid-above and mid-below :[
            cursed_scale("midline", "Link values<input type='checkbox' name='link-cursedvals' checked='checked'>");
            cursed_scale("below");
            preset_scales();
        ?>
      </div>
        <h2>Other devolutions</h2>
        <div class="row">
          <div class="col-4">Flip text</div>
          <div class="col-8"><input type='checkbox' name='flip-text'></div>
        </div>

        <div class="form-group">
            <?php 
            range_control("Clapping Hands", "clapping-hands");
            preset_scales();
            ?>
            </div>
 
       <div class="form-group">
            <?php 
 
            range_control("Thumb's up", "thumbs-up");
            preset_scales();
            ?></div>
            <div class="form-group">
            <!--php
            // Protip -- siphon this off ;)9999
            range_control("Provide Char", "provide-char");
            preset_scales();
            ?>
            -->

         
        <!-- 
        Things to add:
        * Currency
         -->
   </form>
  </div>
</div>

<div class="footer container">
  <div class="copyright">2019 - wmpollock@gmail.com</div>
  <div class="citations">
  <!-- 
  
  Cursed text ranges from ZALGO text script by tchouky (eeemo.net)
  -->
  </div>
  <div class="todo">
  </div>
</div>

<!-- Magic stars :] -->
<div id="starshine"><div class="template shine"></div></div>




