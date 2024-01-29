import { useState } from "react";
import Controls from "./Controls";
import Display from "./Display";
import "./Calculator.css";

const Calculator = () => {
    const [output,setOutput] = useState(0);
    const [input, setInput] = useState('0');

    return(
        <div className="calculatorLayout">
            <Display input = {input}
                output={output} />
                <hr />
                <Controls input={input}
                    output={output} 
                    setInput={setInput} 
                    setOutput={setOutput} />
        </div>
    );
}

export default Calculator;