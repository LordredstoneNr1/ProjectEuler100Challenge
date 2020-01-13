import java.util.HashSet;
import java.util.Iterator;
import java.util.stream.Collectors;

public class problem23 {
    
    public static void main(String[] args) {
        System.out.println(sumOfNonAbundantNumbers(10000));
        System.out.println(sumOfNonAbundantNumbers(15000));
        System.out.println(sumOfNonAbundantNumbers(20000));
        System.out.println(sumOfNonAbundantNumbers(28123));
    }
    
    private static int sumOfNonAbundantNumbers(int n) {
        HashSet<Integer> abundants = new HashSet<Integer>(n/4);
        int sum = n*(n+1)/2;
        for (var i = 1; i <= n; i++) { // start with 12 because why not
            if (isAbundant(i)) {
                abundants.add(i);
            } 
        }
        for (var i = 1; i <= n; i++) {
            boolean found = false;
            Iterator<Integer> it = abundants.iterator();
            while (it.hasNext() && !found) {
              int abundant = it.next();  
              if (abundants.contains(i - abundant)) {
                  found = true;
                  sum -= i;
              }
            }
          }
        
        return sum;
    }
    
    private static int findDivisors(int n) {
        HashSet<Integer> divisors = new HashSet<Integer>(n/2);
        divisors.add(1);
        int remainder = n;
        for (int i = 2; i < n; i++) {
            final int copyOfI = i;
            while (remainder%i == 0) {
                divisors.addAll(divisors.stream().map(a -> a*copyOfI).collect(Collectors.toSet()));
                remainder /= i;
            }
        } // unfortunately this generates all divisors, with 1 and n. (Not even a problem in this one)
        return divisors.stream().mapToInt(i -> i).sum(); 
    }
    
    private static boolean isAbundant(int n) {
        return (2*n < findDivisors(n));
    }
    
}
