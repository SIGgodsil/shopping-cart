// Task 1
class product {
	constructor(name, price, quantity, description, category) {
	  this.name = iphone;
	  this.price = 1000;
	  this.quantity = 10;
      this.description = Apple;
      this.category;
	}
   
	introduce()  
	{
	  console.log${this.name}, ${this.price}, ${this.quantity}, ${this.description}, ${this.category}.
	}
   
	price.changePrice("2000");
    console.log("Updated price:");
    
    description.changeDescription("now Apple");
    console.log("Updated description:");

    price.changeCategory("now phone");
    console.log("Updated category:");
   }
   
   
// Task 2
class Student {
    constructor(studentID, studentName, studentAge, studentGPA)
    {
        this.studentID = ID;
        this.studentName = Name;
        this.studentAge = Age;
        this.studentGPA = GPA;
    }
    showInfo()
    {
        console.log('ID:' ${this.studentID}.);
        console.log('Name:' ${this.studentName}.);
        console.log('Age: '${this.studentAge}.);
        console.log('GPA: '${this.studentGPA}.);
    }
    checkScholarship(if ${this.studentGPA} >= 3.5)
    {
        console.log('Chúc mừng! Sinh viên' ${this.studentName} 'đã đạt học bổng.');
    }
    checkScholarship(if ${this.studentGPA} < 3.5)
    {
        console.log(${this.studentName} 'không đủ điều kiện để nhận học bổng.');
    }
    const students = [
        new Student("S001", "Jonh Smith", 20, "3.8"),
        new Student("S002", "Jane Doe", 19, "3.2"),
        new Student("S003", "Michael Johnson", 21, "3.6")
        new Student("S004", "Emily Williams", 18, "3.9")
       ];
}
// Task 3
class Book {
    constructor(title, author, publicationYear, genre)
    {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
    }
    showInfo()
    {
        console.log(${this.title}, ${this.author}, ${this.publicationYear}, ${this.genre})
    }
    checkNewBook(if ${this.publicationYear} <= 2)
    {
        console.log('sach' ${this.title} 'la sach moi')
    }
    checkNewBook(else)
    {
        console.log('sach' ${this.title} 'khong phai la sach moi')
    }
    checkClassic(if ${publicationYear} < 1900)
    {
        console.log('sach' ${this.title} 'la mot sach co dien')
    }
    checkClassic(else)
    {
        console.log('sach' ${this.title} 'khong phai la mot sach co dien')
    }
    const books = 
       new book1("To Kill a Mockingbird",  "Harper Lee", 1960, "Fiction")
       new book2("1984", "George Orwell", 1949, "Dystopian")
       new book3("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Classic")
       new book4("Pride and Prejudice", "Jane Austen", 1813, "Romance")
}
