function insertion() {
    c_delay=0;
    let n = array_size;
        for (let i = 1; i < n; i++) {
            updatediv(bars[i],bar_size[i],"yellow");
            let current = bar_size[i];
            let j = i-1; 
            while ((j > -1) && (current < bar_size[j])) {
                updatediv(bars[j],bar_size[j],"red");
                updatediv(bars[j+1],bar_size[j+1],"red");
                bar_size[j+1] = bar_size[j];
                updatediv(bars[j],bar_size[j],"red");
                updatediv(bars[j+1],bar_size[j+1],"red");

                updatediv(bars[j],bar_size[j],"yellow");
                j--;
                for(var t=0;t<i;t++)
                {
                    updatediv(bars[t],bar_size[t],"green");//Color update
                }
            }
            bar_size[j+1] = current;
             updatediv(bars[i-1],bar_size[i-1],"green");
        }
       
}