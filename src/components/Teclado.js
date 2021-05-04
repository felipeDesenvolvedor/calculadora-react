import React from "react"
import Button from "./Button"
import NumbersInput from "./NumbersInput"
import ResultFinal from "./ResultFinal"

class Teclado extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            numbersInput:"",
            resultFinal:0
        }

        this.numbersInput = this.numbersInput.bind(this)
    }

    numbersInput(event) {
        this.setState(state => {
            return {numbersInput:state.numbersInput + event.target.innerText}
        })
    }

    render() {
        return (
            <>
                <NumbersInput value={this.state.numbersInput}/>
                <ResultFinal/>

                <div className="teclado">
                    <Button onClick={this.numbersInput}>9</Button>
                    <Button onClick={this.numbersInput}>8</Button>
                    <Button onClick={this.numbersInput}>7</Button>
                    <Button onClick={this.numbersInput}>6</Button>
                    <Button onClick={this.numbersInput}>5</Button>
                    <Button onClick={this.numbersInput}>4</Button>
                    <Button onClick={this.numbersInput}>3</Button>
                    <Button onClick={this.numbersInput}>2</Button>
                    <Button onClick={this.numbersInput}>1</Button>
                    <Button onClick={this.numbersInput}>0</Button>

                    <Button onClick={this.numbersInput}>C</Button>
                    <Button onClick={this.numbersInput}>%</Button>
                    <Button onClick={this.numbersInput}>/</Button>
                    <Button onClick={this.numbersInput}>X</Button>
                    <Button onClick={this.numbersInput}>-</Button>
                    <Button onClick={this.numbersInput}>+</Button>
                    <Button onClick={this.numbersInput}>=</Button>
                    <Button onClick={this.numbersInput}>Apagar</Button>
                    <Button onClick={this.numbersInput}>,</Button>
                </div>
            </>
         )
    }
}

export default Teclado