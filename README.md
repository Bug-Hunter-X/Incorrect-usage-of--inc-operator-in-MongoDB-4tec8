# Incorrect usage of $inc operator in MongoDB
This example demonstrates an incorrect usage of the `$inc` operator in MongoDB.  The `$inc` operator is used to increment a numerical field by a specified value.  However, attempting to increment with a string value results in an error.

## Bug
The provided JavaScript code attempts to increment the `counter` field with a string value of '1' rather than a numerical 1. This leads to a MongoDB error.

## Solution
The corrected code uses a numerical value for the increment operation, resulting in the successful update of the `counter` field.
