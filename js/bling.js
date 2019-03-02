$(document).ready(function() {
	
	
	$("#input_src").keyup(function() {
		enhance_text();
	}).trigger('keyup');
	
	// Sheya, maybe a bit broad?
	$("input").change(function() {
		enhance_text();
	});

	// Fire patterns into the stack
	$(".bling .presets button").click(function() {
		$(this).parents('.form-group').find('input[type=number]').val($(this).data('setvals')).trigger("change");
	});

	// Turn off the form
	$("form").submit(function(e) {
		e.preventDefault();
	});
});

// Wherein we've got an object that contains
// Character
// immediate follow-ons

// Upside-down transform
// replace characters with upside-down crap

// L33t

// 

// cursed transforms

// clapping transform:
// add spaces between characters

// General rules:
// * do not work on spaces
// function blingAddativeTransform(inputString, transformOptions, )
// function blingReplacementTransform()

function get_config(src) {
	var config = {};

	$("input[type=number]").each(function() {
		var val = $(this).val(), blocksize = val.length > 1 ? (src.length-1) / (val.length-1) : -1;
		
		if (!val) return;
		
		// console.log("src: " + src.length + " val: " + val.length);
		config[$(this).attr('name')] = {
			values : val,
			blocksize : blocksize
		}

	});
	
	$(":checkbox:checked").each(function() {
		config[$(this).attr('name')] = true;		
	});
	var $cursed_scales = $("input[name^='scale-cursed']");
	$cursed_scales.change(function() {
		console.log("SHIT IS CHANGED");
		$cursed_scales.val($(this).val());
	});

	

   return config;
	
}

function enhance_text() {
	var src = $("#input_src").val(), $out = $("#output_dest");

	if (!src) {
		console.log("No Source!!!");
		return;
		
	}
	
	config = get_config(src);
	
	var out = [], stack = {
		config : config,
		out : out,
	};

	if (stack.config['flip-text']) {
		console.log(stack.config['flip-text']);
		src = src.split("").reverse().join("");
		newStr = [];
		for (var i = 0; i <= src.length; i++) {
			newStr[i] = flip_char(src[i]);
		}
		src = newStr.join("");
	} else {
		
		
	}
	
	for (var i = 0; i <= src.length; i++) {
		stack.i = i;
		if (src[i] === " ") {
			var in_length = out.length;
			add_clapping_hands(stack);
			add_thumbs_up(stack);
			add_provided_char(stack);
			// Fail back to boring old spaces I guess. Sigh
			if (out.length == in_length) {
				out.push(src[i]);
			}
		} else {
			out.push(src[i]);
		}
		add_cursed_text(stack);
	}

	$out.val(out.join(''));

}

function rando(max) {
	return Math.random() * (max + 1);
}

// Get our threshold value (0-9) for random observations and other
// finery 
function find_targVal(stack, config) {
	if (!config) {
		console.log("Error: no config.")
		return;
	} else if (config.values === "") {
		return; // nope;
	} else if (config.values.length === 1) {
		// Only one value, LEZ GO!!
		return config.values;
	}
	

	var block = (stack.i / config.blocksize),
	// Figure out our values
	floor = Math.floor(block), ceil = Math.ceil(block);
	// console.log(stack.i + "} floor:" + floor + " ceil:" + ceil + " block:" + block + ":" + config.blocksize);
	if (floor === ceil) {
		return config.values[floor];
	} else {
		// Time for LINEAR ALGEBRAAAAA!
		var y1 = config.values[floor], 
			y2 = config.values[ceil], 
			slope = (y2 - y1) / (ceil - floor), 
			b = y2 - (slope * ceil); 
		return slope * block + b;
	}

}

// determine the target value and pull a random value
// to 
function fire_element(stack, config) {
	if (!config) return;
	
	var targVal = find_targVal(stack, config);
	// Whoops!
	if (!targVal) {
		return 0;
	}

	var r = rando(10);

	if (r <= targVal) {
		return 1;
	} else {
		return 0;
	}
}

function add_clapping_hands(stack) {
	if (fire_element(stack, stack.config['scale-clapping-hands'])) {
		stack.out.push("\uD83D\uDC4F");
	}
}

function add_thumbs_up(stack) {
	if (fire_element(stack, stack.config['scale-thumbs-up'])) {
		stack.out.push("\uD83D\uDC4D");
	}
}
function add_provided_char(stack) {

}
function add_cursed_text(stack) {
	// So for each range
	// * Determine amount

	add_cursed_text_section(stack, stack.config['scale-cursed-above'], cursed_chars[0]);
	add_cursed_text_section(stack, stack.config['scale-cursed-midline'], cursed_chars[1]);
	add_cursed_text_section(stack, stack.config['scale-cursed-below'], cursed_chars[2]);
}

function add_cursed_text_section(stack, config, chars) {
	if (!config)
		return;

	var
	    targVal = find_targVal(stack, config),
	    // Yikes, this ended up being a hot ton....
	    // charsToAdd = chars.length * (targVal + 1) / 10;
	    charsToAdd = targVal / 2;
	
	if (!targVal) {
		//console.log("Error fetching targVal for element " + stack.i);
		return;
	}
	
    for (var i = 0; i <= charsToAdd; i++) {
		var charIdx = Math.round(Math.random() * chars.length); // Yeahhhhh, I think this is wrong and needs like +1? and 
		stack.out.push(chars[charIdx]);
    }
    
	console.log(stack.i + "]  Adding " + charsToAdd + " chars for a " + targVal + " factor chunk of " + chars.length);
}

function flip_char(char) {
	if (flipped_chars[char]) {
		//console.log("Fliip " + char + " for " + flipped_chars[char]);
		return flipped_chars[char];
	} else {
		return char;
	}
}

function thefuck() {

}