function debounce(func, delay) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      func();
    }, delay);
  }