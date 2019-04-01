<?php 

function range_control ($label, $name, $add = "") {
    echo <<<EOT
            <div class="row">
              <div class="col-4">$label</div>
              <div class="col-8"><input type='number' name='scale-$name'>$add</div>
            </div>
EOT
    ;
    
    
}

function cursed_scale($range, $add = ''){
    $ucRange = ucfirst($range);
    range_control($ucRange, "cursed-$range", $add);
}
            
function preset_scales() {
    echo <<<EOT
           <div class="presets"> 
            Presets: 
             <button class="btn btn-sm btn-secondary" data-setvals="1">a little</button>
             <button class="btn btn-sm btn-secondary" data-setvals="4">a bit more</button>
             <button class="btn btn-sm btn-secondary" data-setvals="9">tons</button>
             <button class="btn btn-sm btn-secondary" data-setvals="159">gradual</button> 
             <button class="btn btn-sm btn-secondary" data-setvals="0000000000000159">long gradual</button>
             <button class="btn btn-sm btn-secondary" data-setvals="">clear</button> 
            </div>
EOT
;
}




?>
