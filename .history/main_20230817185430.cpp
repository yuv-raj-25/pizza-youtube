#include <iostream>
#include <sstream>
using name

int calculate(string S) {
    string numbersStr;
    getline(cin, numbersStr);
    stringstream ss(numbersStr);
    
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
    string S;
    cin >> S;

    int result = calculate(S);
    cout << result << endl;

    return 0;
}
