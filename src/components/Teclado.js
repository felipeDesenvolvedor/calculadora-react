import React from "react"
import Button from "./Button"
import NumbersInput from "./NumbersInput"
import ResultFinal from "./ResultFinal"

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
        this.apagar          = this.apagar.bind(this)
        this.equal           = this.equal.bind(this)
    }

    numbersInput(event) {
        let value = event.target.innerText
        document.querySelector("#NumbersInput").classList.remove('esconder')

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

        setTimeout(() => {

            if(this.state.factorOne && this.state.operation && this.state.factorTwo) {
                this.equal()
            }
        }, 2000)
    }

    handleOperation(event) {
        let filterOperation = this.filterOperation()

        if(!filterOperation) {
            let value = event.target.innerText

            this.setState(state => {
                return {numbersInput:state.numbersInput + value}
            })

            this.setState({operation:value})
        }  
    }
    
    apagar() {
        this.setState({factorOne:""})
        this.setState({factorTwo:""})
        this.setState({operation:""})        
        this.setState({numbersInput:""})
    }

    equal(event) {
        
        if (this.state.operation == "+") {
            let result = parseFloat(this.state.factorOne) + parseFloat(this.state.factorTwo)
            this.setState({resultFinal:result})
        }

        if (this.state.operation == "-") {
            let result = parseFloat(this.state.factorOne) - parseFloat(this.state.factorTwo)
            this.setState({resultFinal:result})
        }

        if (this.state.operation == "*") {
            let result = parseFloat(this.state.factorOne) * parseFloat(this.state.factorTwo)
            this.setState({resultFinal:result})
        }

        if (this.state.operation == "/") {
            let result = parseFloat(this.state.factorOne) / parseFloat(this.state.factorTwo)
            this.setState({resultFinal:result})
        }

        if(!event) {
            return
        }

        this.apagar()

        let value = event.target.innerText
        
        if(value == "=") {
            document.querySelector("#NumbersInput").classList.add('esconder')
        }else {
            document.querySelector("#NumbersInput").classList.remove('esconder')
        }
    }

    filterOperation() {
        if(this.state.operation) {
            return true
        }
    }

    render() {
        return (
            <>
                <NumbersInput onChange={this.numbersInput} value={this.state.numbersInput}/>
                <ResultFinal>{this.state.resultFinal}</ResultFinal>

                <div className="teclado">
                    <Button onClick={this.numbersInput} value="9">9</Button>
                    <Button onClick={this.numbersInput}>8</Button>
                    <Button onClick={this.numbersInput}>7</Button>
                    <Button onClick={this.numbersInput}>6</Button>
                    <Button onClick={this.numbersInput}>5</Button>
                    <Button onClick={this.numbersInput}>4</Button>
                    <Button onClick={this.numbersInput}>3</Button>
                    <Button onClick={this.numbersInput}>2</Button>
                    <Button onClick={this.numbersInput}>1</Button>
                    <Button onClick={this.numbersInput}>0</Button>

                    <Button onClick={this.apagar}>C</Button>
                    <Button onClick={this.porcentagem}>%</Button>
                    <Button onClick={this.handleOperation}>/</Button>
                    <Button onClick={this.handleOperation}>*</Button>
                    <Button onClick={this.handleOperation}>-</Button>
                    <Button onClick={this.handleOperation}>+</Button>
                    <Button onClick={this.equal}>=</Button>
                    <Button onClick={this.numbersInput}>,</Button>
                </div>
            </>
         )
    }
}

export default Teclado