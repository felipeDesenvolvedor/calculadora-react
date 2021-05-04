import React from "react"
import Button from "./Button"
import NumbersInput from "./NumbersInput"
import ResultFinal from "./ResultFinal"
import Container from "./Container"

class Teclado extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            numbersInput:"",
            resultFinal:"",
            factorOne:"",
            factorTwo:"",
            operation:""
        }

        this.filterOperation = this.filterOperation.bind(this)
        this.handleOperation = this.handleOperation.bind(this)
        this.numbersInput    = this.numbersInput.bind(this)
        this.delete          = this.delete.bind(this)
        this.clear           = this.clear.bind(this)
        this.equal           = this.equal.bind(this)
    }

    numbersInput(event) {
        let value = event.target.innerText

        this.setState(state => {
            return {numbersInput:state.numbersInput + value}
        })

        if(!this.state.operation) {
            this.setState(state => {
                return {factorOne:state.factorOne + value}
            })
        }else {
            this.setState(state => {
                return {factorTwo:state.factorTwo + value}
            })
        }
    }

    handleOperation(event) {

        if(!this.state.factorOne) {
            return
        }

        let filterOperation = this.filterOperation()

        if(!filterOperation) {
            let value = event.target.innerText

            this.setState(state => {
                return {numbersInput:state.numbersInput + value}
            })

            this.setState({operation:value})
        }  
    }
    
    clear() {
        this.setState({factorOne:""})
        this.setState({factorTwo:""})
        this.setState({operation:""})        
        this.setState({numbersInput:""})
        this.setState({resultFinal:""})
    }

    delete() {
        this.setState(state => {
            let stringLentgh = state.numbersInput.length
            return {numbersInput:state.numbersInput.slice(0, stringLentgh - 1)}
        })

        if(this.state.factorTwo) {
            this.setState(state => {
                let stringLentgh = state.factorTwo.length
                return {factorTwo:state.factorTwo.slice(0, stringLentgh - 1)}
            })
        }else if(this.state.operation) {
            this.setState(state => {
                let stringLentgh = state.operation.length
                return {operation:state.operation.slice(0, stringLentgh - 1)}
            })
        }else if(this.state.factorOne) {
            this.setState(state => {
                let stringLentgh = state.factorOne.length
                return {factorOne:state.factorOne.slice(0, stringLentgh - 1)}
            })
        }
    }

    equal(event) {
        
        if (this.state.operation == "+") {
            let result = parseFloat(this.state.factorOne) + parseFloat(this.state.factorTwo)
            this.setState({resultFinal:result.toFixed(2)})
        }

        if (this.state.operation == "-") {
            let result = parseFloat(this.state.factorOne) - parseFloat(this.state.factorTwo)
            this.setState({resultFinal:result.toFixed(2)})
        }

        if (this.state.operation == "*") {
            let result = parseFloat(this.state.factorOne) * parseFloat(this.state.factorTwo)
            this.setState({resultFinal:result.toFixed(2)})
        }

        if (this.state.operation == "/") {
            let result = parseFloat(this.state.factorOne) / parseFloat(this.state.factorTwo)
            this.setState({resultFinal:result.toFixed(2)})
        }
    }

    filterOperation() {
        if(this.state.operation) {
            return true
        }
    }

    render() {
        return (
            <Container>
                <NumbersInput onChange={this.numbersInput} value={this.state.numbersInput}/>
                <ResultFinal>{this.state.resultFinal}</ResultFinal>

                <div className="teclado">
                    
                    <Button onClick={this.clear} className="button__c">C</Button>
                    <Button onClick={this.porcentagem} className="button__porcent">%</Button>
                    <Button onClick={this.handleOperation} className="button__divisao">/</Button>
                    <Button onClick={this.handleOperation} className="button__multip">*</Button>
                    
                    <Button onClick={this.numbersInput} className="button__sete">7</Button>
                    <Button onClick={this.numbersInput} className="button__oito">8</Button>
                    <Button onClick={this.numbersInput} className="button__nove">9</Button>
                    <Button onClick={this.handleOperation} className="button__subtr">-</Button>

                    <Button onClick={this.numbersInput} className="button__quatro">4</Button>
                    <Button onClick={this.numbersInput} className="button__cinco">5</Button>
                    <Button onClick={this.numbersInput} className="button__seis">6</Button>
                    <Button onClick={this.handleOperation} className="button__soma">+</Button>

                    <Button onClick={this.numbersInput} className="button__um">1</Button>
                    <Button onClick={this.numbersInput} className="button__dois">2</Button>
                    <Button onClick={this.numbersInput} className="button__tres">3</Button>
                    <Button onClick={this.numbersInput} className="equal">=</Button>
                    
                    <Button onClick={this.numbersInput} className="button__zero">0</Button>
                    <Button onClick={this.numbersInput} className="button__virgula">.</Button>
                    <Button onClick={this.delete} className="button__apagar"><i class="fas fa-backspace"></i></Button>
                    <Button onClick={this.equal} className="equal">=</Button>
                </div>
            </Container>
         )
    }
}

export default Teclado