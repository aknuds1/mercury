'use strict';

var test = require('tape');

var mercury = require('../index');

// FFFfffff--- phantomJS.
if (!Function.prototype.bind) {
    /*eslint no-extend-native: 0*/
    Function.prototype.bind = require('function-bind');
}

test('mercury is a object', function t(assert) {
    assert.equal(typeof mercury, 'object');
    assert.end();
});

// jscs:disable disallowKeywords
test('missing element prevents app init', function t(assert) {
    assert.throws(mercury);

    try {
        mercury.app(null);
    } catch (exception) {
        assert.equal(exception.name, 'ReferenceError');
        assert.end();
    }
});
// jscs:enable disallowKeywords

require('./synthetic-events.js');
require('./count.js');
require('./shared-state.js');
require('./bmi-counter.js');
require('./time-travel.js');
