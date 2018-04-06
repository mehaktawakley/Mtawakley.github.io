    
    var r_text = new Array ();
	r_text[0] = "Be Concise, Relevant and Brave!";
	r_text[1] = "Feeling a little uncomfortable with your skills is a sign of learning, and continuous learning is what the tech industry trives on!";
	r_text[2] = "Life is a series of building, testing, changing and iterating.";
	r_text[3] = "Even if you have don't succeed , at least you'll have learned a lot.";
	r_text[4] = "Recognize and enbrace your uniqueness.";
	r_text[5] = "Be the kind of woman that makes other women want to up their game.";
	
	var myVar = setInterval(function(){ quote() }, 7000);

	document.getElementById("you1").innerHTML = (r_text[5]) ;

	function quote(){
		var i = Math.floor(6*Math.random());
		document.getElementById("you1").innerHTML = (r_text[i]) ; 
    }

    
