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

        this.multiplicacao = this.multiplicacao.bind(this)
        this.numbersInput  = this.numbersInput.bind(this)
        this.subtracao     = this.subtracao.bind(this)
        this.divisao       = this.divisao.bind(this)
        this.apagar        = this.apagar.bind(this)
        this.equal         = this.equal.bind(this)
        this.soma          = this.soma.bind(this)
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

    soma(event) {
        let value = event.target.innerText

        this.setState(state => {
            return {numbersInput:state.numbersInput + value}
        })

        this.setState({operation:value})
    }

    multiplicacao(event) {
        let value = event.target.innerText

        this.setState(state => {
            return {numbersInput:state.numbersInput + value}
        })

        this.setState({operation:value})
    }

    divisao(event) {
        let value = event.target.innerText

        this.setState(state => {
            return {numbersInput:state.numbersInput + value}
        })

        this.setState({operation:value})
    }

    subtracao(event) {
        let value = event.target.innerText

        this.setState(state => {
            return {numbersInput:state.numbersInput + value}
        })

        this.setState({operation:value})
    }

    porcentagem() {

    }
    
    apagar() {
        this.setState({numbersInput:""})
    }

    equal() {

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
                    <Button onClick={this.divisao}>/</Button>
                    <Button onClick={this.multiplicacao}>*</Button>
                    <Button onClick={this.subtracao}>-</Button>
                    <Button onClick={this.soma}>+</Button>
                    <Button onClick={this.equal}>=</Button>
                    <Button onClick={this.numbersInput}>,</Button>
                </div>
            </>
         )
    }
}

export default Teclado