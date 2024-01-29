import './Display.css';

const Display = (props) => {

    // getting input and output values from props
    const {input,output} = props;

    return(
        <>  
            {/* display container */}
            <div className="display">

                {/* section to show the input entered by the user */}
                <div className="inputSection">
                    {/* if input is '0' show nothing */}
                    {input !== '0' ? input : null}
                </div>

                {/* section to show the output of user's input */}
                <div className=
                "outputSection">

                    {/* if input is not '0' then show answer otherwise show '0' */}
                    {input !== '0' ?`=${output}` : output}
                </div>

            </div>
        </>
    );
}

// export the display
export default Display;