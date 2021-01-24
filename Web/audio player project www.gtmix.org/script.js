
myplayer = {
	audio: document.getElementById('audio_palyer'),
	playlist: playlist,
	
	
	play:function(){
		var play_but = document.getElementById('play');
		
		if(this.audio.paused == true){
			this.audio.play();
			play_but.innerHTML = "pause";
			play_but.title = "playing now";
		
		}else{
			this.audio.pause();
			play_but.innerHTML = "play";
			play_but.title = "pausing now";
		}
		
	},
	
	
	
	stop:function(){
		this.audio.load();
	},
	
	set_time:function(dir,sec){
		
		if(dir == 'forward'){
		   this.audio.currentTime += sec;	
			
		}else{
			 this.audio.currentTime -= sec;
		}
		
	},
	
	
	load_list:function(){
		
		var get_select = document.getElementById("playlist");
	    var option;
		var list =this.playlist; 
		
		for(l=0;l<=(list.length -1);l++){
			option = document.createElement('option');
			option.innerHTML = list[l].title;
			option.value = list[l].file;
			
			get_select.appendChild(option);
		}
		
		
		
	},
	
	load_track:function(){
		
		var get_select = document.getElementById("playlist");
		 this.audio.src = this.playlist[get_select.selectedIndex].file;
		 
		  document.getElementById('photo').src = this.playlist[get_select.selectedIndex].poster;
		
		  document.getElementById('track_name').innerHTML = 'playing now: '+this.playlist[get_select.selectedIndex].title;
		  document.getElementById('vol').innerHTML = 'volume: '+Math.round(this.audio.volume*100)+'%' ;
		this.play();
		
		
	},
	
	set_volume:function(dir){
		
		if(dir == "up" && this.audio.volume < 1){
			this.audio.volume += 0.10;
			
		}else if(dir == "down" && this.audio.volume > 0){
			
			this.audio.volume -= 0.10;
			
				 
				 }
		 document.getElementById('vol').innerHTML = 'volume: '+Math.round(this.audio.volume*100)+'%' ;
	}
	
	
}
// myplayer End




window.onload = function(){
	
	myplayer.load_list();
	
	
	document.getElementById("playlist").onchange = function(){
		myplayer.load_track();
	}
	
	document.getElementById('play').onclick = function(){
		
		myplayer.play();
		
	}
	
	
	document.getElementById('stop').onclick = function(){
		var play_but = document.getElementById('play');
		myplayer.stop();
		
		play_but.innerHTML = "play";
		play_but.title = "start play";
	}
	
	document.getElementById('forward').onclick = function(){
		
		myplayer.set_time('forward',10);
	}
	
	document.getElementById('backward').onclick = function(){
		
		myplayer.set_time('backward',10);
	}
	
	document.getElementById('vup').onclick = function(){
		myplayer.set_volume('up');
		
	}
	
	document.getElementById('vdown').onclick = function(){
		myplayer.set_volume('down');
		
	}
	
}