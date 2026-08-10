#include <iostream>
#include <string>

std::string paragraph = "";

std::string breaksyntax = "<";

int averageposition = 0;
int totalpositions = 0;
int ammountofpositions = 0;


int main()
{
    //getting the paragraph input
    std::cout << "Enter the paragraph to parse: ";
    std::cin.ignore();
    std::getline(std::cin, paragraph);
    std::cout << "\n";

    int counter = 0;

    for (int i = 0; i < paragraph.length(); i++) {
        if (paragraph[i] == breaksyntax[0]) {
            totalpositions += counter;
            counter = 0;
            ammountofpositions++;
        }
        counter++;
    }

    if (ammountofpositions == 0) {
        averageposition = 0;
    }
    else {
        averageposition = totalpositions / ammountofpositions;
    }
    std::cout << "The average position is: " << averageposition;

}

