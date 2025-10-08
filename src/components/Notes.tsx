import React from "react";

export default function Notes() {
  return (
    <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-lg p-6 mt-10">
      <h2 className="text-yellow-400 text-xl font-bold mb-3">
        CS 255 Study Notes - Jay Neill
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
        <li>Encapsulation – binds data and methods together to protect internal state.</li>
        <li>Abstraction – hides complexity and exposes simple interfaces.</li>
        <li>Inheritance – allows derived classes to reuse or extend base class behavior.</li>
        <li>Polymorphism – same interface, different behaviors (like operator overloading).</li>
        <li>Structs vs Classes – structs are public by default, classes are private by default.</li>
        <li>Arrays & Structs – organize and store related data for projects efficiently.</li>
        <li>Operator Overloading – allows intuitive operations like +, -, ++, -- on custom types.</li>
        <li>Friend Functions – grant access to private data between related classes.</li>
        <li>File I/O Streams – read and write structured data from text files.</li>
        <li>Example: Fraction class with overloaded ++ and -- operators.</li>
      </ul>

      <pre className="bg-gray-800 text-gray-200 text-xs p-3 rounded-md overflow-x-auto mt-4">
        <code>{`class Fraction {
  int num, den;
public:
  Fraction(int n=0, int d=1): num(n), den(d) {}
  friend Fraction operator--(Fraction& f, int);
  friend Fraction& operator--(Fraction& f);
  void Print(ostream& os) const { os << num << "/" << den; }
};`}</code>
      </pre>
    </div>
  );
}
