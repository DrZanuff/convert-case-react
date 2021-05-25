import './TextAreaOutput.css';

function TextAreaOutput(props){

    return(
        <div className='text-area-output'>
            <textarea value={props.value}></textarea>
        </div>
    );
}

export default TextAreaOutput;