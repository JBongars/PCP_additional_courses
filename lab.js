/**
 * Set timemout for AJAX Polling
 */

var setAjaxPolling = () => {
    var seconds = 0;
    var id = setInterval(() => {
        seconds++;
        console.log("seconds: ", seconds);
    }, 1)
    
    /*
    while(true){
        var q = prompt("close the interval?");
        if(q) clearInterval(id);
    }
    */
}

setAjaxPolling();

//ws//22
//text/event-stream
//sse event