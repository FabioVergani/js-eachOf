function eachOf(a,b){
 let i='length';
 const m=a,l=(m&&(i in m))?m.length:0,f=b;
 i=0;
 while(i<l){f(m[i],i,m);++i;};
}
