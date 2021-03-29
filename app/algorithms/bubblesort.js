

function bubble(){
    c_delay =0;
    for(i=0;i<array_size - 1;i++){
        for(j=0;j<array_size -i -1;j++){
            updatediv(bars[j],bar_size[j],"yellow");

            if(bar_size[j]> bar_size[j+1]){
                updatediv(bars[j],bar_size[j],"red");
                updatediv(bars[j +1],bar_size[j +1],"red");

                var kova = bar_size[j];
                bar_size[j] = bar_size[j+1];
                bar_size[j+1] = kova;

                updatediv(bars[j],bar_size[j],"red");
                updatediv(bars[j +1],bar_size[j +1],"red");
            }
            updatediv(bars[j],bar_size[j],"rgb(221, 144, 28)");
        }
        updatediv(bars[j],bar_size[j],"green");
    }
    updatediv(bars[0],bar_size[0],"red");
}