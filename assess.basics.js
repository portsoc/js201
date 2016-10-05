QUnit.module("Basics");

QUnit.test("Change the id method in index.js to return your student ID.",
    function(assert) {
        assert.notOk(
            id() == "Replace This With Your Student ID",
            "This test will pass as soon as the id function returns anything other than the default value.  You should make sure it returns your student ID!"
        );
    }
);


QUnit.test("Change the fn method in index.js to return your first name.",
    function(assert) {
        assert.notOk(
            fn() == "Replace This With Your First Name",
            "This test will pass as soon as the fn function returns anything other than the default value.  You should make sure it returns your student first name!"
        );
    }
);

QUnit.test("Change the sn method in index.js to return your surname (family name).",
    function(assert) {
        assert.notOk(
            sn() == "Replace This With Your Surname",
            "This test will pass as soon as the sn function returns anything other than the default value.  You should make sure it returns your surname!"
        );
    }
);
