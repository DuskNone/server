const config_charset = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.!?":;'\`,#$%&@*+-=~><^_|()[]{}/\\ `

var func = {};

func.toBase = function (a,b,tobase_i){
    // let i = a % b;
    let i = config_charset[a%b]
    // return 7;
    if ((a-i)/b == 0){
        tobase_i +=i;
        // console.log(tobase_i);
    }else{
        func.toBase((a-a%b)/b,b,tobase_i)
    }
    // console.log(i);
}

func.encode = function(str){
    var cloud_code = "";
    for (var i = 0; i < str.length; i++) {
        let todec = func.convertBase(str[i],95,10)
        if (todec.toString().length<2) todec = "0"+todec; 
        cloud_code+=todec;
    }
    // console.log(cloud_code);
    return cloud_code;
}
func.decode = function(num){
    var cloud_code = "";
    var cloud_char = 0;
    while (cloud_char<num.toString().length) {
        let tobase = func.convertBase(`${num.toString()[cloud_char]}${num.toString()[cloud_char+1]}`,10,95)
        cloud_char+=2;
        cloud_code+=tobase;
    }
    return cloud_code;
}

func.convertBase = function(value, from_base, to_base) {
    var range = config_charset.split('');
    var from_range = range.slice(0, from_base);
    var to_range = range.slice(0, to_base);
    
    var dec_value = value.split('').reverse().reduce(function (carry, digit, index) {
      if (from_range.indexOf(digit) === -1) throw new Error('Invalid digit `'+digit+'` for base '+from_base+'.');
      return carry += from_range.indexOf(digit) * (Math.pow(from_base, index));
    }, 0);
    
    var new_value = '';
    while (dec_value > 0) {
      new_value = to_range[dec_value % to_base] + new_value;
      dec_value = (dec_value - (dec_value % to_base)) / to_base;
    }
    return new_value || '0';
  }

module.exports = func;