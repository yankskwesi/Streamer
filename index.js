function startStreamFunction() {
	var audio = new Audio(resp);
	var playPromise = document.querySelector('audio').play();
	if (playPromise !== undefined) {
             playPromise.then(() => {
                console.log("Audio has started")
		}).catch( (error) => {
                console.log(error) });
               }
	// This is going to play sister cities so damn loud
}
