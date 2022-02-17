describe('calculator.js', function () {

    describe ('calculator', function () {
        let calculator;
        let calculator2;
        beforeEach(function (){
            calculator = new Calculator();
            calculator2 = new Calculator();

        })

        afterEach(function () {

        })

        
        it('should initialize the total', function() {

            expect(calculator.total).toBe(0); //Tobe is a ===
            expect(calculator.total).toBeFalsy();
        });
    
        it('has constructor', function() {

            expect(calculator).toEqual(calculator2); //ToEqual is a deep key and value comparitions 
        });
    
        it('can be instantiated', function() {

            expect(calculator).toBeTruthy();
            expect(calculator2).toBeTruthy();
        });
    
        it(' instantiates  unique object', function() {

            expect(calculator).not.toBe(calculator2);
        });
    
        it(' can overwrite total', function() {
            calculator.total = null;
            expect(calculator.total).toBeNull();
        });
    
        it(' constructor name is calculator', function() {
            expect(calculator.constructor.name).toContain("Calc");
        });
    
        it(' returns total', function() {
            calculator.total = 50;
            expect(calculator.add(20)).toBe(70);
            expect(calculator.total).toMatch(/-?\d+/);
            expect(typeof calculator.total).toMatch('number');
            expect(calculator.total).toEqual(jasmine.anything());
        });
    
        it(' should use the custom matchers', function() {
            jasmine.addMatchers(customMatchers);
            calculator.total = 50;
            expect(calculator).toBeCalculator();
    
        });

        describe('add()', function () {

            it('should add numbers to total', function() {
                calculator.add(5);
                expect(calculator.total).toBe(5);
            });

            it(' has common operations', function() {
                expect(calculator.add).toBeDefined();
                expect(calculator.multiply).toBeDefined();
                expect(calculator.divide).toBeDefined();
                expect(calculator.substract).toBeDefined();
            });
        })

        describe('substract()', function() {

            it('should substract numbers to total', function() {
                calculator.total = 5;
                calculator.substract(5);
                expect(calculator.total).toBe(0);
            });
        })

        describe('multiply()', function() {

            it('should multiply numbers to total', function() {
                calculator.total = 1;
                calculator.multiply(5);
                expect(calculator.total).toBe(5);
            });

            it(' does not handle NaN', function() {
                calculator.total = 20;
                calculator.multiply('a');
                expect(calculator.total).toBeNaN();
            });
            
        })

        describe('divide()', function() {

            it('should divide numbers to total', function() {
                calculator.total = 4;
                calculator.divide(2);
                expect(calculator.total).toBe(2);
            });

            it(' handles divide by  zero', function() {
                expect(function () {calculator.divide(0)}).toThrow();
                expect(function () {calculator.divide(0)}).toThrowError(Error);
                expect(function () {calculator.divide(0)}).toThrowError(Error, 'Cannot divide by 0');
            });
        })

        describe('get version', function(){
            it('feches version from external srouce', async function(done){
                spyOn(window, 'fetch').and.returnValue(Promise.resolve(
                    new Response('{ "version": "0.1"}')
                ));
                const version = await calculator.version
                    expect(version).toBe('0.1');

                    done();
            })
        })
    })
});