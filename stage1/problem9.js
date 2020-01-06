function specialPythagoreanTriplet(n) {
 var a = 1;
 var b = 1; 
 var c = 1;
 while (c < n) {
     b = 1;
     while (b < c) {
         a = n - b - c;
         if (a*a + b*b == c*c) {
            console.log(a,b,c);
            return a*b*c;
         }
         b++;
     }
     c++;
}
}

specialPythagoreanTriplet(1000);
