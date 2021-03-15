
function selection (){
    c_delay = 0;

    for(i = 0 ;i<array_size-1;i++){
        updatediv(bars[i],bar_size[i],"red");
        min_index = i;
        for(j =i+1;j<array_size;j++){
            updatediv(bars[j],bar_size[j],"yellow");

            if(bar_size[j]< bar_size[min_index]){
                if(min_index!=i){
                    updatediv(bars[min_index],bar_size[min_index],"rgb(221, 144, 28)");
                }
                min_index=j;
                updatediv(bars[min_index],bar_size[min_index],"red");
            }
            else{
                updatediv(bars[j],bar_size[j],"rgb(221, 144, 28)");
            }
        }
        if(min_index!=i){
            var kova = bar_size[min_index];
            bar_size[min_index] = bar_size[i];
            bar_size[i] = kova;

            updatediv(bars[min_index],bar_size[min_index],"red");
            updatediv(bars[i],bar_size[i],"red");
            updatediv(bars[min_index],bar_size[min_index],"rgb(221, 144, 28)");
        }
        updatediv(bars[i],bar_size[i],"green");
    }
    updatediv(bars[i],bar_size[i],"green");
}