import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function Newapp(props) {

    const Caping = ()=>{
        let newText = text.toUpperCase();
        useText(newText);
        props.Ailert("Text Has Been Capitalized","success")
    }

    const Lowering = ()=>{
        let newText = text.toLowerCase();
        useText(newText);
        props.Ailert("Text Has Been Lowercased","success")
    }

    const Handlehtmltojsx = ()=>{
        let newText = text.replaceAll("class","className");
        let newiText = newText.replaceAll("for","htmlFor");
        let nawaText = newiText.replaceAll("tabindex","tabIndex");
        useText(nawaText);
        props.Ailert("HTML Text Has Been Converted To JSX","success")

    }

    const ExcuteFunc = (event)=>{
        useText(event.target.value);
    }


   const [text, useText] = useState('');
    return (

        <>
        <div>
            <h1>{props.title}</h1>
            <div class="mb-3">
  <textarea class="form-control" value={text} style={{color : props.mode==='dark'?'white':props.mode==='danger'?'white':props.mode==='primary'?'white':'black',backgroundColor : props.mode==='dark'?'grey':props.mode==='danger'?'red':props.mode==='primary'?'blue':'white',caretColor: 'green'}} onChange={ExcuteFunc} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
        </div>
    <button className="btn btn-success my-2" style={{backgroundColor: props.mode==='danger'?'#dc3545':props.mode==='primary'?'#0d6efd':'green'}} onClick={Caping}>Press To Capitalize!</button>
    <button className="btn btn-success my-2 mx-1" style={{backgroundColor: props.mode==='danger'?'#dc3545':props.mode==='primary'?'#0d6efd':'green'}} onClick={Lowering}>Press To Apply Lowercase Effect!</button>
    <button className="btn btn-success my-2 mx-1" style={{backgroundColor: props.mode==='danger'?'#dc3545':props.mode==='primary'?'#0d6efd':'green'}} onClick={Handlehtmltojsx}>Convert HTML To JSX</button>
    <div className="container" style={{color: props.mode==='dark'?'white':props.mode==='danger'?'white':props.mode==='primary'?'white':'black'}}>
        <h3>Some Important Stats:</h3>
        <p>{text===""?0:text.split(" ").length} Words And {text.length} Letters</p>
        <p>{0.003*text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
    )
}
Newapp.propTypes = {
    title: PropTypes.string
}
