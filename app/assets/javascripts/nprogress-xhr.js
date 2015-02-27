//= require nprogress
// https://gist.github.com/jgatjens/a08126bbbadb2d6096cb
// Modified XMLHttpRequest to add a listener for start and stop the progress bar
//
// Save the real open
var oldOpen = XMLHttpRequest.prototype.open;

function onStateChange() {
  // fires on every readystatechange ever
  // use `this` to determine which XHR object fired the change event

  if (this.readyState === 1) {
    NProgress.start();
  }
  // use status == 200 to know if the request was successfully
  if (this.readyState === 4 && ( this.status === 200 || this.status === 201 || this.status === 202)) {
    NProgress.done(true);
  }

  // If request fail show progress bar in red
  if (this.readyState === 4 && ( this.status === 404 || this.status === 0 || this.status === 400 || this.status === 403 )) {
    NProgress.fail();
  }
}

NProgress.fail = function () {
  var NProgressDOM =  document.getElementById('nprogress');
  NProgressDOM.className = 'fail';

  NProgress.inc(60);

  setTimeout(function() {
    NProgress.done();
  }, 500);

  setTimeout(function() {
    NProgressDOM.className = '';
  }, 1000);
};

XMLHttpRequest.prototype.open = function() {
  // when an XHR object is opened, add a listener for its readystatechange events
  this.addEventListener('readystatechange', onStateChange);

  // run the real `open`
  oldOpen.apply(this, arguments);
};