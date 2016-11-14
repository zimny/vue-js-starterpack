var testsContext = require.context(".", true, /_test$/);
testsContext.keys().forEach(function(path) {
  try {
    testsContext(path);
  } catch(err) {
    console.error('[ERROR] WITH SPEC FILE: ', path);
    console.error(err);
  }
});
