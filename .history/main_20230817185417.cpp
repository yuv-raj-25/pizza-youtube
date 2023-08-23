#include <iostream>
#include <sstream>

int calculate(std::string S) {
    std::string numbersStr;
    std::getline(std::cin, numbersStr);
    std::stringstream ss(numbersStr);
    
    int num, result = 0;
    while (ss >> num) {
        if (S == "Sum") {
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
