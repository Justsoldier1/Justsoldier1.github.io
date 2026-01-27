#include <iostream>
#include <string>

std::string examplepara = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam voluptates quaerat officiis autem et. Facilis numquam totam aperiam delectus, id ducimus aspernatur fugit consectetur temporibus nihil at aut. Accusamus, a.";
std::string paragraph = "";
int allowedspaces = 0;
std::string space = " ";
int main()
{
    std::cout << "Example paragraph: " << examplepara << "\n";
    std::cout << "Enter the paragraph: ";
    std::cin.ignore();
    std::getline(std::cin, paragraph);
    std::cout << "\nEnter the number of sequential spaces allowed: ";
    std::cin >> allowedspaces;
    std::cout << "\n";

    int spaces = 0;
    int firstspace = 0;
    for (int i = 0; i < paragraph.length(); i++) {
        if (paragraph[i] == space[0]) {
            //saves the first space position
            if (spaces == 0) {
                firstspace = i;
            }
            else {
                firstspace = 0;
            }
            spaces++;
        }
        else {
            spaces = 0;
        }
        if (spaces > allowedspaces) {
            for (int x = i; x >= firstspace; x--) {
                paragraph[x] = NULL;
            }
        }
    }
    std::cout << "New paragraph: " << paragraph;
}

