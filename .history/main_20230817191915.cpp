#include <iostream>
#include <sstream>
#include <vector>
#include <string>

int calculate(std::string input) {
    std::string operation;
    std::vector<int> numbers;

    // Split input into operation and numbers
    size_t commaPos = input.find(',');
    if (commaPos != std::string::npos) {
        operation = input.substr(0, commaPos);
        std::string numbersStr = input.substr(commaPos + 1);

        std::stringstream ss(numbersStr);
        int num;
        while (ss >> num) {
            numbers.push_back(num);
        }
    }

    int result = 0;
std::cout<<operation;

for(auto i : nums){}
    if (operation == "Sum") {
        for (int num : numbers) {
            result += num;
        }
    } else if (operation == "Subtract") {
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
    std::string input;
    std::getline(std::cin, input);

    int result = calculate(input);
    std::cout << result << std::endl;

    return 0;
}
