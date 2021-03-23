function heapify  (n,i){
  
    largest = i
    leftnode = 2*i +1 
    rightnode = 2*i +2
    
    if (leftnode < n && bar_size[largest] < bar_size[leftnode]){

        updatediv(bars[largest],bar_size[largest],"rgb(221, 144, 28)");
        largest = leftnode;
        updatediv(bars[largest],bar_size[largest],"red");

    }   
                                       
    if (rightnode <n && bar_size[largest]<bar_size[rightnode]) {

        updatediv(bars[largest],bar_size[largest],"rgb(221, 144, 28)");
        largest = rightnode;
        updatediv(bars[largest],bar_size[largest],"red");

    }
    if (largest!=i){

        var kovaa = bar_size[i];
        bar_size[i] = bar_size[largest];
        bar_size[largest] = kovaa;
        
        heapify(n,largest) 
    }
        
}

function heapSort(array){
    c_delay =0;

    for(var i=Math.floor(array_size/2)-1;i>=0;i--){
        heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--){
        var kovaa = bar_size[i];
        bar_size[i] = bar_size[0];
        bar_size[0] = kovaa;
        updatediv(bars[i],bar_size[i],"green");
        updatediv(bars[i],bar_size[i],"yellow");
        heapify(i,0);
        updatediv(bars[i],bar_size[i],"rgb(221, 144, 28)");
        updatediv(bars[i],bar_size[i],"green");
    }
    updatediv(bars[i],bar_size[i],"green");
}