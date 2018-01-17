({
  onInit: function (component, event, helper) {
    var providerLabel = component.get('v.name'),
      type = component.get('v.type'),
      values = component.get('v.values');

    var valuesContainer = helper.parseValues(values);
    function getValue(key) {
      if (key.indexOf('.') < 0) {
        key = 'c.' + key;
      }

      var value = valuesContainer[key];

      if ($A.util.isUndefinedOrNull(value)) {
        console.error('The ' + type + ' "' + key + '" wasn\'t found in the application namespace!');
        value = type + ':' + key;
      }

      return value;
    }

    if ($A.util.isUndefinedOrNull(window[providerLabel])) {
      window[providerLabel] = {};
    }

    window[providerLabel][type] = {
      get: getValue
    };
  }
});