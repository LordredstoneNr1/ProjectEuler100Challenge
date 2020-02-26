import java.util.LinkedList;

public class Problem43 {
    
    public static void main(String[] args) {
        substringDivisibility();
    }
    
    public static void substringDivisibility() {
        final int start = 0; 
        final int finish = 9;
        final PandigitalNumber numbers = new PandigitalNumber(start, finish);
        final int[] divisors = {2, 3, 5, 7, 11, 13, 17};
        final int len = (finish - start - divisors.length + 1);
        for (String n : numbers.getIterator()) {
          boolean divisible = true;
          for (int i = 0; divisible && i < divisors.length; i++) {
            String part = n.substring(i+1, (i+1)+ len);
            if (Integer.parseInt(part) % divisors[i] != 0) {
              divisible = false;
            }
          }
          if (divisible) {
            System.out.println("Found: " + n);
          }
        }
    }
    
}

class PandigitalNumber {
    
    private final int start;
    private final int end;
    private final int possibleNumbers;
    
    PandigitalNumber(int start, int end) {
        if (start > end) {
            throw new IllegalArgumentException("Start > End");
        }
        this.start = start;
        this.end = end;
        this.possibleNumbers = end - start;
    }
    
    public Iterable<String> getIterator() {
        LinkedList<String> res = new LinkedList<String>();
        for (int i = 0; i < faculty(this.possibleNumbers + 1); i++) {
            res.add(this.get(i));
        }
        return res;
    }
    
    public String get(int index) {
        int n = index;
        StringBuilder result = new StringBuilder();
        LinkedList<Integer> available = new LinkedList<>();
        for (int i = this.start; i <= this.end; i++) {
            available.add(i);
        }
        int i = available.size() - 1; // I know there are better alternatives to this, but I'm transscribing the JS here
        while (i > 0) {
            int digit = n / faculty(i);
            n %= faculty(i);
            result.append(available.remove(digit));
            i--;
        }
        result.append(available.get(0));
        return result.toString();
    }
    
    public int faculty(int n) {
        if (n < 0) {
            throw new IllegalArgumentException("Faculty of a negative number"); 
        } 
        int result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
}