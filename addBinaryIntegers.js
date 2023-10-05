/**
 * Function to add two n-bit binary integers
 * @param {Array} A - First binary integer represented as an array of bits
 * @param {Array} B - Second binary integer represented as an array of bits
 * @returns {Array} - Resultant binary integer after addition
 */
function addBinaryIntegers(A, B) {
    // Length of the input binary integers
    const n = A.length;

    // Initialize a new array C with size (n+1) to store the result.
    // We have n+1 bits in the result to account for a possible carry 
    // from adding the most significant bits of A and B.
    const C = new Array(n + 1).fill(0);

    // The 'carry' variable will store the carry value from adding 
    // two bits. Initially, there's no carry so it's set to 0.
    let carry = 0;

    // Loop from the least significant bit (rightmost bit) to 
    // the most significant bit (leftmost bit) of A and B.
    for (let i = n - 1; i >= 0; i--) {
        // Calculate the sum of the bits at the current position i 
        // of A and B, as well as the carry from the previous position.
        let total = A[i] + B[i] + carry;

        // The sum can be 0, 1, 2, or 3. If it's 2 or 3, there's a carry.
        // We store the least significant bit of the sum in C[i + 1].
        // For total=2 or total=3, this bit is 0 or 1 respectively.
        C[i + 1] = total % 2;

        // Determine the carry for the next iteration. It's 1 if total 
        // is 2 or 3, and 0 otherwise.
        carry = Math.floor(total / 2);
    }

    // After processing all bits of A and B, if there's still a carry left,
    // it's stored in the most significant position of C.
    C[0] = carry;

    return C;  // Return the resulting binary integer
}

// Test the function
const A = [1, 0, 1, 1];
const B = [0, 1, 1, 1];
console.log(addBinaryIntegers(A, B));  // Expected: [1, 1, 1, 0, 0]