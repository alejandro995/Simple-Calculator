const customMatchers = {
    toBeCalculator: function () {
        return {
            compare: function( actual) {
                const result = {
                    pass: actual instanceof Calculator , 
                    message: ''

                }

                if(result.pass){
                    result.message = 'Expected' +actual + "not to be instace of calculator"
                }else {
                    result.message = 'Expected' +actual + "to be instace of calculator"
                }

                return result;
            }
        }
    }

}