import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            display: '0',
            currentInput: '0',
            previousInput: null,
            operator: null,
            isOperatorClicked: false,
        };
    }

    handleNumberClick = (value) => {
        const { currentInput, isOperatorClicked } = this.state;
        if (currentInput === '0' || isOperatorClicked) {
            this.setState({
                currentInput: value,
                isOperatorClicked: false,
            });
        } else {
            this.setState({
                currentInput: currentInput + value,
            });
        }
    };

    handleOperatorClick = (operator) => {
        const { currentInput, previousInput } = this.state;
        if (this.state.operator && previousInput !== null) {
            this.calculateResult();
        } else {
            this.setState({
                previousInput: currentInput,
            });
        }
        this.setState({
            operator,
            isOperatorClicked: true,
        });
    }

    calculateResult = () => {
        const { currentInput, operator, previousInput } = this.state;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        let result = 0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                break;
        }
        this.setState({
            currentInput: result.toString(),
            previousInput: null,
        });
    };

    handleEqualClick = () => {
        const { operator, previousInput, currentInput } = this.state;
        if (operator && previousInput !== null) {
            this.calculateResult();
            this.setState({ operator: null });
        }
    };

    handleClearClick = () => {
        this.setState({
            display: '0',
            currentInput: '0',
            previousInput: null,
            operator: null,
        });
    };





    render() {
        const calculatorStyle = {
            width: '300px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        };

        const displayStyle = {
            fontSize: '24px',
            marginBottom: '10px',
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f5f5f5',
            textAlign: 'right',
        };

        const buttonRowStyle = {
            display: 'flex',
        };

        const buttonStyle = {
            flex: '1',
            padding: '10px',
            margin: '5px',
            fontSize: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer',
        };

        return (
            <div className="calculator" style={calculatorStyle}>
                <div className="display" style={displayStyle}>
                    {this.state.currentInput}
                </div>
                <div className="buttons">
                    <div className="row" style={buttonRowStyle}>
                        <button onClick={() => this.handleNumberClick('7')} style={buttonStyle}>7</button>
                        <button onClick={() => this.handleNumberClick('8')} style={buttonStyle}>8</button>
                        <button onClick={() => this.handleNumberClick('9')} style={buttonStyle}>9</button>
                        <button onClick={() => this.handleOperatorClick('+')} style={buttonStyle}>+</button>
                    </div>
                    <div className="row" style={buttonRowStyle}>
                        <button onClick={() => this.handleNumberClick('4')} style={buttonStyle}>4</button>
                        <button onClick={() => this.handleNumberClick('5')} style={buttonStyle}>5</button>
                        <button onClick={() => this.handleNumberClick('6')} style={buttonStyle}>6</button>
                        <button onClick={() => this.handleOperatorClick('-')} style={buttonStyle}>-</button>
                    </div>
                    <div className="row" style={buttonRowStyle}>
                        <button onClick={() => this.handleNumberClick('1')} style={buttonStyle}>1</button>
                        <button onClick={() => this.handleNumberClick('2')} style={buttonStyle}>2</button>
                        <button onClick={() => this.handleNumberClick('3')} style={buttonStyle}>3</button>
                        <button onClick={() => this.handleOperatorClick('*')} style={buttonStyle}>*</button>
                    </div>
                    <div className="row" style={buttonRowStyle}>
                        <button onClick={() => this.handleClearClick()} style={buttonStyle}>C</button>
                        <button onClick={() => this.handleNumberClick('0')} style={buttonStyle}>0</button>
                        <button onClick={() => this.handleEqualClick()} style={buttonStyle}>=</button>
                        <button onClick={() => this.handleOperatorClick('/')} style={buttonStyle}>/</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;                