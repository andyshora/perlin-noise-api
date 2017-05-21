/**
 * Check for request success
 * @param  {Object} t   AVA test instance
 * @param  {Object} res Response
 * @return {void}
 */
const checkSuccess = (t, res) => {
  if (res.status !== 200) {
    t.fail(`Expected HTTP status 200, but got ${res.status}`);
  }
  t.truthy(res.body);
};

/**
 * Check for an array in the response with a certain length
 * @param  {Object} t   AVA test instance
 * @param  {Object} res Response
 * @param  {number} length Array length to check for
 * @return {void}
 */
const checkArrayLength = (t, res, length) => {
  if (res.status !== 200) {
    t.fail(`Expected HTTP status 200, but got ${res.status}`);
  }
  t.truthy(res.body.length === length);
};

/**
 * Check for a failure status code
 * @param  {Object} t   AVA test instance
 * @param  {Object} res Response
 * @param  {Object} code Status code to check for
 * @return {void}
 */
const checkFail = (t, res, code) => {
  if (res.status !== code) {
    t.fail(`Expected HTTP status 200, but got ${res.status}`);
  }
  t.truthy(res.body);
};

export { checkArrayLength, checkSuccess, checkFail };
