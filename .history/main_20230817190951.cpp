#include <iostream>
#include <sstream>

int calculate(std::string S) {
    std::string numbersStr;
    std::getline(std::cin >> std::ws, numbersStr); // Read the entire line after the operation
    
    std::stringstream ss(numbersStr);
    
    int num, result = 0;
    bool isFirstNumber = true;
    
    while (ss >> num) {
        if (isFirstNumber) {
            result = num;
            isFirstNumber = false;
        } else if (S == "Sum") {
            result += num;
        } else if (S == "Subtract") {
            result -= num;
        }
        // For other operations, do nothing (Empty operation)
    }

    return result;
}

int main() {
    std::string S;
    std::cin >> S;

    int result = calculate(S);
    std::cout << result << std::endl;

    return 0;
}
