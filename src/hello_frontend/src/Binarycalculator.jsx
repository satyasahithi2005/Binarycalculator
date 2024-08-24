import React, { useState } from 'react';

const BinaryCalculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');

    // Function to handle input changes and ensure only binary digits are entered
    const handleInputChange = (e, setter) => {
        const value = e.target.value;
        if (/^[01]*$/.test(value)) { // Regex to allow only 0 and 1
            setter(value);
        }
    };

    // Function to perform the binary calculation
    const calculate = () => {
        const decimal1 = parseInt(num1, 2); // Convert binary to decimal
        const decimal2 = parseInt(num2, 2); // Convert binary to decimal
        let decimalResult;

        switch (operator) {
            case '+':
                decimalResult = decimal1 + decimal2;
                break;
            case '-':
                decimalResult = decimal1 - decimal2;
                break;
            case '*':
                decimalResult = decimal1 * decimal2;
                break;
            case '/':
                if (decimal2 !== 0) {
                    decimalResult = Math.floor(decimal1 / decimal2);
                } else {
                    setResult('Error: Division by 0');
                    return;
                }
                break;
            default:
                setResult('Error: Invalid Operation');
                return;
        }

        setResult(decimalResult.toString(2)); // Convert the result back to binary
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Binary Calculator</h2>
            <div style={{ margin: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter first binary number"
                    value={num1}
                    onChange={(e) => handleInputChange(e, setNum1)}
                    style={{ padding: '10px', fontSize: '16px', width: '300px' }}
                />
            </div>
            <div style={{ margin: '20px' }}>
                <select 
                    onChange={(e) => setOperator(e.target.value)} 
                    value={operator}
                    style={{ padding: '10px', fontSize: '16px', width: '320px' }}
                >
                    <option value="">Select Operation</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value=""></option>
                    <option value="/">/</option>
                </select>
            </div>
            <div style={{ margin: '20px' }}>
                <input
                    type="text"
                    placeholder="Enter second binary number"
                    value={num2}
                    onChange={(e) => handleInputChange(e, setNum2)}
                    style={{ padding: '10px', fontSize: '16px', width: '300px' }}
                />
            </div>
            <div>
                <button 
                    onClick={calculate}
                    style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '20px' }}
                >
                    Calculate
                </button>
            </div>
            <div>
                <h3 style={{ marginTop: '20px', fontSize: '24px' }}>Result: {result}</h3>
            </div>
        </div>
    );
};

export default BinaryCalculator;