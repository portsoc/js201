QUnit.module( "Control Flow" );

function compare(array1, array2) {
	
		let is_same = array1.length == array2.length && array1.every(function(element, index) {
				return element === array2[index]; 
		});
		
		return is_same;
	
}


QUnit.test("nArray",
	function (assert) {
		assert.ok(
            typeof nArray === "function",
            "Write a function \"nArray\" that takes a parameter n"
        );
		
		var array1 = nArray(3);
		var array2 = [1,2,3];
		
		let is_same = compare(array1, array2);
		
		assert.ok(
			is_same,
			"Insert n numbers into an array.  The numbers inserted should increase from 1 to n."
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
            addAllOpt([3,2,1]), 6,
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
	function (assert) {
		assert.ok(
            typeof divisors === "function",
            "Write a function \"divisors\" that takes takes two parameters, an array of numbers and a divisor."
        );
		
		var array1 = divisors([1,2,3,4,5,6,7,8,9], 3);
		var array2 = [3,6,9];

		let is_same = compare(array1, array2);
		
		assert.ok(
			is_same,
			"Return a new array containing only the numbers in the first array that are exactly divisible by the second array."
		);
		
	}
);


QUnit.test("multiples", 
	function (assert) {
		assert.ok(
            typeof multiples === "function",
            "Write a function\"multiples\" that takes two parameters n,m"
        );
		
		var array1 = multiples(9, 3);
		var array2 = [3,6,9,12,15,18,21,24,27];


		let is_same = compare(array1, array2);
		
		assert.ok(
			is_same,
			"insert n numbers into an array.  The numbers inserted should increase from 1*m to n*m."
		);
		
	}
);  


