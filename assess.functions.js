QUnit.module( "Functions" );

QUnit.test("funcFeelGood",
    function(assert) {
        assert.ok(
            true,
            "This test always passes - it shows that tests which return true, pass :-)."
        );
    }
);


QUnit.test("funcAddAll",
    function(assert) {
        assert.ok(
            addAll([1]) == 1,
            "Create a function addAll that accepts an array as a single parameter.  Assuming an array of numbers is passed, return the result of adding all those numbers."
        );
        assert.ok( addAll([1,1]) == 2 );
        assert.ok( addAll([1,1, 1]) == 3 );
        assert.ok( addAll([1, 2, 3, 4, 5]) == 15 );
        assert.ok( addAll([1.1, 1.2, 1.3, 1.5]) == 5.1 );
        assert.ok( addAll([-100,-200,-300]) == -600 );
        assert.ok( addAll([-200,400]) == 200 );

    }
);


QUnit.test("funcLarger",
    function(assert) {
        assert.ok(
            larger(1,2) == 2,
            "Create a function called larger that accepts two numbers and returns the larger."
        );
        assert.ok( larger(1,2) == 2 );
        assert.ok( larger(1,3) == 3 );
        assert.ok( larger(2,2) == 2 );
        assert.ok( larger(3,-5) == 3 );
        assert.ok( larger(-3,5) == 5 );
    }
);


QUnit.test("funcLargest",
    function(assert) {
        assert.ok(
            largest([1,2]) == 2,
            "Create a function called largest that accepts an array of numbers and returns the largest number."
        );
        assert.ok( largest([0,1,2]) == 2 );
        assert.ok( largest([1,1,3]) == 3 );
        assert.ok( largest([2,2,2]) == 2 );
        assert.ok( largest([1,2,3,4,5,6,7,8,3,-5]) == 8 );
        assert.ok( largest([1]) == 1 );
    }
);


QUnit.test("funcCompareArrays",
    function(assert) {
        assert.ok(
            largest([1,2]) == 2,
            "Create a function called compare that accepts two arrays of numbers and compares the contents.  It should return true if the arrays are identical and false otherwise."
        );
        assert.ok( compare([1],[1]), "two arrays with 1, should pass" );
        assert.ok( compare([1,2,3],[1,2,3]), "two more identical arrays, should pass" );
        assert.ok( compare([4,7,11,17],[4,7,11,17]), "two arrays, for idential elements each, should pass");
        assert.notOk( compare([1,2],[2,1]), "expect to return false because 1!=2 and 2!=1" );
        assert.notOk( compare([4,7,11,17],[109]), "totally false" );
    }
);


QUnit.test("funcAddToAll",
    function(assert) {
        assert.ok(
          compare( [2,2], addToAll( [1,1], 1 ) ),
          "Create a function addToAll that accepts an array and a number as parameters.  Assuming an array of numbers is passed, return the same array with the second parameter added to each number within the array - such that ([1,2,3], 1) should return [2,3,4]."
        );
        assert.ok(
          compare( [55,66,77], addToAll( [11,22,33], 44 ) )
        );
    }
);


QUnit.test("funcSideEffect",
    function(assert) {
        rememberThis("Apple");
        assert.ok(
          remembered == "Apple",
          "Create a function rememberThis that accepts any variable and stores it in a 'global' variable called 'remembered' (which you need to declare).  Each subsequent call to rememberThis should overwrite the value of 'remembered'."
        );

        rememberThis("Banana");
        assert.ok( remembered == "Banana" );

        rememberThis(1337);
        assert.ok(remembered == 1337);
    }
);
