module.exports = function repeater(str, options) {
    var shortstr = "" + str;
    var longstr = "";
    var add = "";


    if(typeof(options.addition)!="undefined") {
        shortstr += options.addition;
    }

    if (typeof(options.additionRepeatTimes)!="undefined"){    

        if(options.additionSeparator == undefined) options.additionSeparator = "|";

        for (let i=1; i<options.additionRepeatTimes; i++){
            shortstr += options.additionSeparator + options.addition; 
        }
    }

    longstr = shortstr;
    if (options.repeatTimes!=undefined){
        
        if(options.separator==undefined) options.separator = "+";
        
        for(let i=1; i<options.repeatTimes; i++){
            longstr += options.separator + shortstr;
        }
    }

    return longstr;
}
  