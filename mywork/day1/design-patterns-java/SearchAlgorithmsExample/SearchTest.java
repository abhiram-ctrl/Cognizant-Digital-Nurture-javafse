public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {

            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Phone", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Book", "Education")
        };

        System.out.println("Linear Search Result");

        Product linearResult =
                linearSearch(products, 104);

        System.out.println(linearResult);

        System.out.println();

        System.out.println("Binary Search Result");

        Product binaryResult =
                binarySearch(products, 104);

        System.out.println(binaryResult);
    }

    public static Product linearSearch(
            Product[] products,
            int targetId) {

        for(Product product : products) {

            if(product.getProductId() == targetId) {

                return product;
            }
        }

        return null;
    }

    public static Product binarySearch(
            Product[] products,
            int targetId) {

        int left = 0;
        int right = products.length - 1;

        while(left <= right) {

            int mid =
                    left + (right - left) / 2;

            if(products[mid].getProductId() == targetId) {

                return products[mid];
            }

            if(products[mid].getProductId() < targetId) {

                left = mid + 1;
            } else {

                right = mid - 1;
            }
        }

        return null;
    }
}