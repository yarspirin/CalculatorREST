# CalculatorREST

Simple Calculator REST API powered by NodeJS. Navigate to http://yar-calculator.herokuapp.com and specify the expression after `/`
sign. (e.g. <a href="http://yar-calculator.herokuapp.com/123+32">yar-calculator.herokuapp.com/123+32</a> yields a JSON with a `result`
field mapping to number 155)

## Operations

* Sum (+)
* Subtraction (-)
* Multiplication (*)
* Division (:)
* Power (**)
* Brackets (())

## Example

http://yar-calculator.herokuapp.com/23:32*23+(23-32)**2 yields { "result":97.53125 }
