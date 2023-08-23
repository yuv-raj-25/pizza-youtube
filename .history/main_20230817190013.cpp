#include <iostream>
#include <vector>

using namespace std;

int minOperations(long long n) {
    int operations = 0;

    while (n > 0) {
        if (n % 2 == 0) {
            n /= 2;
        } else {
            n -= 1;
        }
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
        cout << minOperations(ar[i]) << endl;
    }

    return 0;
}
