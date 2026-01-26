#include <iostream>
#include <string>

std::string examplepara = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam voluptates quaerat officiis autem et. Facilis numquam totam aperiam delectus, id ducimus aspernatur fugit consectetur temporibus nihil at aut. Accusamus, a.";
std::string paragraph;
int breakpoint = 0;
std::string breaksyntax;
std::string space = " ";
int main()
{
    std::cout << "Example paragraph: " << examplepara << "\n";
    std::cout << "Enter the paragraph: ";
    std::cin.ignore();
    std::getline(std::cin, paragraph);
    std::cout << "\n Enter the break length in characters: ";
    std::cin >> breakpoint;
    std::cout << "\nEnter the break syntax: ";
    std::cin >> breaksyntax;
    std::cout << "\n";
    int iterator = 0;
    for (int i = 0; i < paragraph.length(); i++) {

        if (iterator > breakpoint) {
            std::cout << "iterator is greater than breakpoint. Iterator: " << iterator << "Breakpoint: " << breakpoint << "\n";
            
            int breakposition = i;
            while (paragraph[breakposition] != space[0] or breakposition > 0) {
                breakposition--;
            }
            
            if(breakposition > 0){
                paragraph.insert(i, breaksyntax);
            }
            else if (paragraph[breakposition == space[0]]) {
                paragraph.insert(breakposition, breaksyntax);
            }
            iterator = 0;
        }
        else {
            iterator++;
        }
        
    }
    std::cout << "New paragraph: " << paragraph;
}
