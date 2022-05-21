INSERT INTO departments (name)
VALUES  ("Marketing"),
        ("Sales"),
        ("Engineering"),
        ("Data Analysis"),
        ("Security"),
        ("Production"),
        ("UX Design"),
        ("Research"),
        ("Human Resources");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Marketing Manager", 150000.00, 1),
        ("Head of Sales", 130000.00, 2),
        ("Senior Software Engineer", 120000.00, 3),
        ("Junior Software Engineer", 70000.00, 3),
        ("Data Analyst", 83000.00, 4),
        ("Cyber Security Manager", 140000.00, 5),
        ("Head of Production", 160000.00, 6),
        ("Senior Editor", 30000, 6),
        ("UX Designer", 80000.00, 7),
        ("Head of Research", 85000.00, 8),
        ("Researcher", 25000.00, 8),
        ("Head of Human Resources", 69000.00, 9);

INSERT INTO employees (first_name, last_name, role_id)
VALUES  ("Michael", "Jacobs", 1),
        ("Aaron", "Smith", 2),
        ("Jason", "Howe", 3),
        ("Pharah", "Roket", 4),
        ("Ana", "Dart", 5),
        ("Cole", "Cassidy", 6),
        ("Jamal", "Comer", 7),
        ("Caleb", "Day", 8),
        ("Thom", "Behrens", 9),
        ("Sam", "Casique", 10),
        ("Jasmine", "Cole", 11),
        ("Ali", "Stam", 12);