#include <iostream>
#include <sstream>
#include <vector>
#include <string>

int calculate(std::string S) {
    std::stringstream ss(input);
    std::string segment;
    std::vector<std::string> segments;
    while(std::getline(ss, segment, ',')) {
        segments.push_back(segment);
    }

    // Extracting variable string and number array
    std::string variable_string = segments[0];
    std::vector<int> number_array;
    for(size_t i = 1; i < segments.size(); ++i) {
        number_array.push_back(std::stoi(segments[i]));
    }

    int result = 0;

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
