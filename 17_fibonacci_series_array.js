function fibonacci(n){
    const series =[];
    if(n === 0){
    series.push(0);
    
    }else{
    series.push(0,1);
    }
    
    for(let i =2; i < n; i++){
    series.push(series[i-1]+series[i-2])
    }
    return series;
    }
    
    console.log(fibonacci(4))

    // TC - o(n)  linear  