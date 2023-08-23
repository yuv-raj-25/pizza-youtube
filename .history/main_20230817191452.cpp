#include <iostream>
#include <sstream>
#include <vector>

int calculate(std::string S) {
    std::string numbersStr;
    std::getline(std::cin >> std::ws, numbersStr); // Read the entire line after the operation

    std::vector<int> numbers;
    std::stringstream ss(numbersStr);
    int num;
    while (ss >> num) {
        numbers.push_back(num);
    }

    int result = 0;

    if (S == "Sum") {
        for (int num : numbers) {
            result += num;
        }
    } else if (S == "Subtract") {
        result = numbers[0];
        for (size_t i = 1; i < numbers.size(); ++i) {
            result -= numbers[i];
        }
    } else {
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
