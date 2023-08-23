#include <iostream>
#include <sstream>
using namespace std;

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
