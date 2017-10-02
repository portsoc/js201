// NB: The funcCompareArrays test MUST pass in
// order for any of these tests to pass - because
// the tests use your compare method (!)

QUnit.module("Control Flow");

QUnit.test("nArray",
    function(assert) {
        assert.ok(
            typeof nArray === "function",
            "Write a function \"nArray\" that takes a parameter n and returns an array with n numbers. The numbers in the array should increase from 1 to n."
        );

        let array1 = nArray(3);
        let array2 = [1, 2, 3];

        assert.ok(
            compare(array1, array2)
        );

    }

);

QUnit.test("addAllOpt",
    function(assert) {
        assert.ok(
            typeof addAllOpt === "function",
            "Create a function \"addAllOpt\" that sums an array. If the array is not present or empty, return 0"
        );

        assert.strictEqual(
            addAllOpt([3, 2, 1]), 6,
            "Function should return the sum of the array if it is present"
        );


        assert.ok(
            addAllOpt() == 0,
            "Function should return 0 if it is not present"
        );


        assert.ok(
            addAllOpt([]) == 0,
            "Function should return 0 if the array is empty"
        );
    }
);


QUnit.test("divisors",
    function(assert) {
        assert.ok(
            typeof divisors === "function",
            "Write a function \"divisors\" that takes takes two parameters, an array of numbers and a divisor."
        );

        let array1 = divisors([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
        let array2 = [3, 6, 9];

        let is_same = compare(array1, array2);

        assert.ok(
            is_same,
            "Return a new array containing only the numbers in the first array that are exactly divisible by the second parameter."
        );

    }
);


QUnit.test("multiples",
    function(assert) {
        assert.ok(
            typeof multiples === "function",
            "Write a function\"multiples\" that takes two parameters n,m"
        );

        let array1 = multiples(9, 3);
        let array2 = [3, 6, 9, 12, 15, 18, 21, 24, 27];


        let is_same = compare(array1, array2);

        assert.ok(
            is_same,
            "insert n numbers into an array.  The numbers inserted should increase from 1*m to n*m."
        );

    }
);
