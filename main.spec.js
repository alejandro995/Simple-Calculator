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
        it('calls add');
        it('calls substract');
        it('calls multiply');
        it('calls divide');
        it('validates operation');
        it('calls updateResult');

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

})