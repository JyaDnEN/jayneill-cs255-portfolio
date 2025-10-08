import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import Notes from "./components/Notes";


export default function CS255Portfolio() {
  const projects = [
    {
      title: "zyLab Project 1 - Parallel Arrays",
      date: "September 3, 2025",
      description:
        "Reads data from multiple files into parallel arrays for singers, hits, and sales. Prints the data forward, backward, and sorted by hits.",
      file: "zyLab Project 1 - Parallel Arrays.docx",
      languages: ["C++", "I/O Streams", "Parallel Arrays"],
      snippet: `int main() {\n  string singer[MAX];\n  int hits[MAX];\n  double sales[MAX];\n  int size = 0;\n  int fileNum;\n  cout << \"Enter file name count: \";\n  cin >> fileNum;\n  size = ReadDataFromFiles(fileNum, singer, hits, sales);\n  PrintArraysForward(singer, hits, sales, size);\n  SortArrays(singer, hits, sales, size);\n  PrintArraysForward(singer, hits, sales, size);\n  return 0;\n}`,
    },
    {
      title: "zyLab Project 2 - Arrays of Structs",
      date: "September 9, 2025",
      description:
        "Reads singer data from files (names, hits, sales) into an array of structs, prints forward/backward, sorts by hits, then reprints.",
      file: "zyLab Project 2 - Arrays of Structs.docx",
      languages: ["C++", "Structs", "Sorting"],
      snippet: `int main() {\n  Singer arr[MAX];\n  int size = 0;\n  int fileNum;\n  cout << \"Enter file name count: \";\n  cin >> fileNum;\n  size = ReadDataFromFiles(fileNum, arr);\n  PrintArrayForward(arr, size);\n  SortArray(arr, size);\n  PrintArrayForward(arr, size);\n  return 0;\n}`,
    },
    {
      title: "Build Your Own Class (Bank Class)",
      date: "September 23, 2025",
      description:
        "Simulates a banking system with a Bank class that includes encapsulation, validation, and overloaded deposit/withdraw operators.",
      file: "Build_Your_Own_Class.cpp",
      languages: ["C++", "OOP", "Encapsulation"],
      snippet: `class Bank {\n  string name;\n  double balance;\npublic:\n  Bank(const string& n, double b);\n  Bank& operator+=(double amount);\n  Bank& operator-=(double amount);\n  void Print(ostream& os) const;\n};\n\nint main() {\n  Bank account(\"Jay\", 100.0);\n  account += 50;\n  account -= 20;\n  account.Print(cout);\n}`,
    },
    {
      title: "Fraction Class Project",
      date: "October 2, 2025",
      description:
        "Implements a Fraction class with overloaded arithmetic and increment/decrement operators using friend functions.",
      file: "fraction.zip",
      languages: ["C++", "Friend Functions", "Operator Overloading"],
      snippet: `class Fraction {\n  int num, den;\npublic:\n  Fraction(int n=0, int d=1): num(n), den(d) {}\n  friend Fraction operator--(Fraction& f, int);\n  friend Fraction& operator--(Fraction& f);\n  void Print(ostream& os) const { os << num << "/" << den; }\n};\n\nint main() {\n  Fraction f(3,4);\n  f--;\n  f.Print(cout);\n}`,
    },
  ];

  const notes = [
    {
      topic: "CS 255 Notes: Object Oriented Programming (OOP)",
      keyPoints: [
        "Encapsulation – bundling data and functions together using private/public access.",
        "Abstraction – hiding unnecessary details through class interfaces.",
        "Inheritance – allowing classes to reuse and override base-class functionality.",
        "Polymorphism – enabling the same function/operator to behave differently (e.g., operator+, operator<<).",
        "Arrays – ordered lists of items accessed by index; constants can make arrays immutable.",
        "Structs – group different variable types under one name, public by default.",
        "Example: Bank class using encapsulation to manage balance safely.",
      ],
      snippet: `class Bank {\nprivate:\n  double balance;\npublic:\n  void Deposit(double amount) { balance += amount; }\n  double GetBalance() const { return balance; }\n};`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-2">Jay Neill - CS 255 Portfolio</h1>
        <p className="text-gray-400">
          University of North Alabama | Fall 2025 | Computer Science Major
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <Card className="bg-gray-900 border-gray-800 shadow-lg hover:shadow-blue-500/20 transition">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-blue-400">
                  {p.title}
                </CardTitle>
                <p className="text-xs text-gray-500">{p.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.languages.map((lang, j) => (
                    <span
                      key={j}
                      className="text-xs bg-blue-900/40 text-blue-300 px-2 py-1 rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                <pre className="bg-gray-800 text-gray-200 text-xs p-3 rounded-md overflow-x-auto mb-4">
                  <code>{p.snippet}</code>
                </pre>
                <Button variant="secondary" className="text-sm">
                  Download Project
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Notes />


      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>© 2025 Jay Neill | CS 255 | University of North Alabama</p>
      </footer>
    </div>
  );
}


