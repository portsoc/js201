QUnit.module("Data");

QUnit.test("dataAdd",
    function(assert) {
        assert.ok(
            typeof add === "function",
            "Create an add function that accepts two parameters and returns their sum."
        );
        assert.strictEqual(
            add(7, 17), 24
        );
        assert.ok(
            add(.1, .2) > .299999
        );
    }
);

QUnit.test("dataSubtract",
    function(assert) {
        assert.ok(
            typeof subtract === "function",
            "Create a subtract function that accepts two parameters and takes the second parameter from the first."
        );
        assert.strictEqual(
            subtract(10, 5), 5
        );
        assert.ok(
            subtract(5, 10) == -5
        );
        assert.ok(
            subtract(Infinity, 32) == Infinity
        );
    }
);


QUnit.test("dataCheckObject",
    function(assert) {
        var x;
        assert.ok(
            typeof checkObject === "function",
            "Create a checkObject function that accepts an object as a parameter and sets the object's property `checked` to `true`."
        );

        x = {};
        checkObject(x);
        assert.strictEqual(
            x.checked, true
        )

        x = {
            a: 4,
            b: 5,
            c: [1, 3, 5]
        };
        checkObject(x);
        assert.deepEqual(
            x, {
                a: 4,
                b: 5,
                c: [1, 3, 5],
                checked: true
            }
        )
    }
);

QUnit.test("dataCheckObjectInside",
    function(assert) {
        var x;
        assert.ok(
            typeof checkObjectInside === "function",
            "Create a checkObjectInside function that accepts an object as a parameter and if that object has an object value in its `data` property, it sets that inner object's property `checked` to `true`."
        );

        x = {};
        checkObjectInside(x);
        assert.deepEqual(
            x, {}
        )

        x = {
            time: 12345,
            data: {
                name: "Jack"
            }
        };
        checkObjectInside(x);
        assert.deepEqual(
            x, {
                time: 12345,
                data: {
                    name: "Jack",
                    checked: true
                }
            }
        )
    }
);

QUnit.test("dataArraySet",
    function(assert) {
        var x;
        assert.ok(
            typeof arraySet === "function",
            "Create an arraySet function that accepts three parameters, where the first one is an array and the second one a number, and puts the value of the third parameter into the array at an index specified by the second parameter, if such an index is already in the array."
        );

        x = [1, 2, 3];
        arraySet(x, 2, 'a');
        assert.deepEqual(
            x, [1, 2, 'a']
        )

        x = [1, 2, 3];
        arraySet(x, 0, 'a');
        assert.deepEqual(
            x, ['a', 2, 3]
        )
    }
);

QUnit.test("dataArraySet2",
    function(assert) {
        var x;

        x = [1, 2, 3];
        arraySet(x, 3, 'a');
        assert.deepEqual(
            x, [1, 2, 3],
            "arraySet should do nothing if the index is outside the array"
        )

        x = [1, 2, 3];
        arraySet(x, -1, 'a');
        assert.deepEqual(
            x, [1, 2, 3],
            "arraySet should do nothing if the index is outside the array"
        )

        x = [1, 2, 3];
        arraySet(x, 'not a number', 'a');
        assert.deepEqual(
            x, [1, 2, 3],
            "arraySet should do nothing if the index is not a number"
        )

        x = [1, 2, 3];
        arraySet(x, 1.3, 'a');
        assert.deepEqual(
            [x, x[1.3]], [
                [1, 2, 3], undefined
            ],
            "arraySet should do nothing if the index is not an integer number"
        )
    }
);
