({
  parseValues: function (values) {
    return values.split(',').reduce(function (container, v) {
      var val = v.split(':'),
        value = val[1],
        name = val[0],
        namespace = 'c';

      if (name.indexOf('.') > 0) {
        name = name.split('.');
        namespace = name[0];
        name = name[1];
      }

      container[namespace + '.' + name] = value;
      return container;
    }, {});
  }
});