 let count = 0; 

        function increment() {
            count++;
            document.getElementById("counter").value = count;
        }

        function decrement() {
            if(count>0){
            count--;
           document.getElementById("counter").value = count;
            }
            

    
}
        function clearCounter(){
            count = 0
            document.getElementById("counter").value = 0;
        }
        document.onKeyDown = function(e){
            if(e.key =='ArrowUp') increment();
            if(e.key =='ArrowDown') decrement();
            if(e.key =='space') increment();

    }