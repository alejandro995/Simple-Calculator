describe ('main.js', function (){
    describe('calculate()', function() {
        it('Validates expression when the first number is invalid', function(){
            spyOn(window, 'updateResult').and.stub();
            calculate('a+3');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not Recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('Validates expression when the second number is invalid', function(){
            spyOn(window, 'updateResult'); // and.stub() is the default behaviour and can be omitted
            calculate('3+a');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not Recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('Validates expression when operation is invalid', function(){
            spyOn(window, 'updateResult');
            calculate('3_4');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Operation not Recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });
        it('calls add', function(){
           const spy = spyOn(Calculator.prototype, 'add');

            calculate('3+4');

            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(4);

        });
        it('calls substract', function(){
            const spy = spyOn(Calculator.prototype, 'substract');
            calculate('4-2');
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(2);
        });
        it('calls multiply', function (){
            const spy = spyOn(Calculator.prototype, 'multiply');
            calculate('3*4');
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(4);
        });
        it('calls divide', function(){
            const spy = spyOn(Calculator.prototype, 'divide');
            calculate('6/2');
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(2);    
        });
        it('validates operation');
        it('calls updateResult (example using and .callThrough)', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callThrough();

            calculate('5*5');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(25);
        });

        it('calls updateResult (example using and .callFake)', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callFake(function(number){
                return 'it Works'
            });

            calculate('5*5');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('it Works');
        });

        it('calls updateResult (example using and .returnValue)', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.returnValue('whatever [multiply] return');

            calculate('5*5');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever [multiply] return');
        });

        it('calls updateResult (example using and .returnValues)', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'add').and.returnValues(null, 'Whatever [add] returns');

            calculate('5+5');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Whatever [add] returns');
        });

        it('does not handle errors', function() {
            spyOn(Calculator.prototype, 'multiply').and.throwError('some error');

            expect(function() {calculate('5*5')}).toThrowError('some error');
        })

        


    });

    describe('updateResult()', function() {
        beforeAll(function() {
            const element = document.createElement('div');
            element.setAttribute('id', 'result');

            document.body.appendChild(element);

            this.element = element; //remembers the encloucer that can afect the context if we use arrow function instead in the call back function above. 
        });

        afterAll(function() {
            document.body.removeChild(this.element);
        })

        it('adds result to DOM element', function(){
            updateResult('5');

            expect(this.element.innerText).toBe('5');
        });

    })

    describe('showVersion()', function(){
        it('calls calculator.version', function(){
            spyOn( document, 'getElementById').and.returnValue({
                innerText: null
            });
            const spy = spyOnProperty(Calculator.prototype, 'version', 'get').and.returnValue(
                Promise.resolve()
            )

            showVersion();

            expect(spy).toHaveBeenCalled();
        })
    } )

})
