#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

int minOperations(int n) {
    int operations = 0;
    int power = 0;

    while (n > 0) {
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n -= 1;
        }
        power++;
        operations++;
    }

    return operations;
}

vector<int> solve(vector<int> ar) {
    vector<int> result;

    for (int i = 0; i < ar.size(); i++) {
        int num = ar[i];
        result.push_back(minOperations(num));
    }

    return result;
}

int main() {
    int t;
    cin >> t;

    vector<int> ar(t);
    for (int i = 0; i < t; i++) {
        cin >> ar[i];
    }

    vector<int> result = solve(ar);

    for (int i = 0; i < result.size(); i++) {
        cout << result[i] << endl;
    }

    return 0;
}
