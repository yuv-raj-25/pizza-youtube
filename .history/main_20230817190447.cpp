#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

int minOperations(long long n) {
    int operations = 0;

    while (n > 0) {
        int highest_power = log2(n);
        n -= pow(2, highest_power);
        operations++;
    }

    return operations;
}

int main() {
    int t;
    cin >> t;

    vector<long long> ar(t);
    for (int i = 0; i < t; i++) {
        cin >> ar[i];
    }

    for (int i = 0; i < t; i++) {
        cout << minOperations(ar[i]) << " ";
    }

    return 0;
}
