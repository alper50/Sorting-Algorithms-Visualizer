
function merge (){
    c_delay =0;
    mergedivider(0,array_size-1);
    
}
function mergesort(start,mid,end){
    var p = start;
    var midd = mid+1;
    var arry =[];
    var k =0;

    for(i=start;i<=end;i++){
        if(p>mid){
            arry[k++] = bar_size[midd++];
            updatediv(bars[midd-1],bar_size[midd-1],"red");
        }
        else if(midd>end){
            arry[k++] = bar_size[p++];
            updatediv(bars[p-1],bar_size[p-1],"red");
        }
        else if(bar_size[p]<bar_size[midd]){
            arry[k++] = bar_size[p++];
            updatediv(bars[p-1],bar_size[p-1],"red");
        }
        else{
            arry[k++] = bar_size[midd++];
            updatediv(bars[midd-1],bar_size[midd-1],"red");
        }
    }
    for(t=0;t<k;t++){
        bar_size[start++]=arry[t];
        updatediv(bars[start-1],bar_size[start-1],"green");
    }
}

function mergedivider(start,end){

    if(end>start){
        orta = Math.floor((start + end) /2);
        updatediv(bars[orta],bar_size[orta],"yellow");
        mergedivider(start,orta);
        mergedivider(orta+1,end);

        mergesort(start,orta,end);
    }
}