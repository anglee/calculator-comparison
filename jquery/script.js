var OPERATIONS = {
  '+': {
    name: 'Sum',
    fn: function(a, b) {
      return a + b;
    }
  },
  '-': {
    name: 'Difference',
    fn: function(a, b) {
      return a - b;
    }
  },
  '%': {
    name: 'Modulo',
    fn: function(a, b) {
      return a % b;
    }
  },
  'foo': {
    name: 'Foo',
    fn: function(a, b) {
      return a + b;
    }
  }
};

var Calculator = function(){
  var _$self = $(this);
  var _$e = $(
      "<div class='Calculator'>" +
      "<input type='text' class='txt1'>" +
      "<select class='select'>" +
      Object.keys(OPERATIONS).map(function(key) {
        return '<option>' + key + '</option>';
      }).join('') +
      "</select>" +
      "<input type='text' class='txt2'>" +
      "<div class='ctnr-result'></div>" +
      "</div>"
  );
  var _$txt_1 = _$e.find('.txt1');
  var _$txt_2 = _$e.find('.txt2');
  var _$select = _$e.find('.select');
  var _$ctnr_result = _$e.find('.ctnr-result');

  var _init = function(){
    _$txt_1.val(1);
    _$txt_2.val(1);
    _updateResult();
  };
  var _updateResult = function(){
    var val1 = parseFloat(_$txt_1.val());
    var val2 = parseFloat(_$txt_2.val());
    var op = _$select.val();
    var opObj = OPERATIONS[op];
    var result = opObj.fn(val1, val2);

    var str = opObj.name + " of " + val1 + " and " + val2 + " is: " + result;

    _$ctnr_result.text(str);

    _$self.trigger('update', { value: result });
  };


  _$txt_1.bind("keyup", function(){
    _updateResult();
  });
  _$txt_2.bind("keyup", function(){
    _updateResult();
  });
  _$select.bind('change', function() {
    _updateResult();
  });

  this.getDomElement = function(){
    return _$e;
  };

  this.listen = function(eventName, callback) {
    _$self.on(eventName, function(e, data) {
      callback(data.value);
    });
  };

  this.setOperandA = function(val) {
    _$txt_1.val(val);
    _updateResult();
  };

  this.setOperandB = function(val) {
    _$txt_2.val(val);
    _updateResult();
  };

  _init();
};

$(function(){
  var calc1 = new Calculator();
  var calc2 = new Calculator();
  var calc3 = new Calculator();

  calc1.listen('update', calc3.setOperandA);
  calc2.listen('update', calc3.setOperandB);

  $("body").append(calc1.getDomElement());
  $("body").append(calc2.getDomElement());
  $("body").append(calc3.getDomElement());
});