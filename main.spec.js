describe ('main.js', function (){
    describe('calculate()', function() {
        it('Validates expression');
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