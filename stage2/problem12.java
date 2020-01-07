import java.util.LinkedList;
import java.util.List;

public class problem12 {
    
    private static List<Integer> primes;
    
    private static int divisibleTriangleNumber(int n) {
        int triangleNr = 1;
        int tr = 1;
        while (findFactors(tr) <= n) {
            System.out.println(tr+ " "+findFactors(tr));
            triangleNr++;
            tr = (triangleNr)*(triangleNr+1)/2;
        }
        return tr;
    }
    
    private static int findFactors(int number) {
        int pointer = 0;
        int factors = 1;
        int currentExp = 0;
        while (number > 1) {
            currentExp = 0;
            while (number%primes.get(pointer) == 0) {
                number /= primes.get(pointer);
                currentExp++;
            }
            if (isPrime(number)) {
                primes.add(number);
            }
            factors *= (currentExp+1);
            pointer++; // no need to search for the next prime
        } 
        return factors; 
    }
    
    private static Boolean isPrime(int x) {
        if (x == 1) {
            return false;
        }
        int i = 0; 
        while (i < primes.size()) {
            if (x%primes.get(i) == 0) {
                return false;
            }
            i++;
        }
        return true;
    }
    
    public static void main(String[] args) {
        primes = new LinkedList<Integer>();
        primes.add(2);
        System.out.println(divisibleTriangleNumber(500));
    }
}
