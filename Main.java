
import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Как вас зовут?");
    String name = scanner.nextLine();
    System.out.println("опыт работы?");
    String opitrab = scanner.nextLine();
    System.out.println("Какую кухню предпочитаете?");
    String cook = scanner.nextLine();
    System.out.println(name +" "+ opitrab +" "+ cook);
    System.out.println("Анкета заполнена" + " "+ name +" " + "сохранено. Мы свяжемся с вами, если будем нуждаться в услугах повара кто готовит" + " "+ cook +" " + "блюда и имеет" + " "+ opitrab +" " + "(года) лет опыта");
  }
}