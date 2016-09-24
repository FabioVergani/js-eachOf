function eachOf(a,b){
 let i='length';
 const m=a,l=(m&&(i in m))?m[i]:0,f=b;
 i=0;
 while(i<l){f(m[i],i,m);++i;};
}


function eachOf(a,b){let i='length';const m=a,l=(m&&(i in m))?m[i]:0,f=b;i=0;while(i<l){f(m[i],i,m);++i;};}
