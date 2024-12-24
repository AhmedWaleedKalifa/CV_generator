import { useState } from "react"
import FormInput from "./InputItem"
import "../styles/inputSectionComponent.css"
export default function InputSectionComponent({title,array}){
    const [display,setDisplay]=useState(false)
    const [expand,setExpand]=useState(true)
    // const [formValue,setFormValue]=useState({});
    function handelClick(){
        // let value=e.target.value;
        // let name=e.target.name
        // setFormValue(values=>({...values,[name]:value}))
        // console.log(formValue)
        if(display==true){
            setDisplay(false)
            setExpand(true)
        }else{
            setDisplay(true)
            setExpand(false)
        }
    }
    let buttonText;
    if(expand==true){
        buttonText="Expand";
    }else{
        buttonText="close";
    }
    function handelSubmit(e){
        e.preventDefault();
    }
    return(
        <>
        <section>
           <form onSubmit={e=>handelSubmit(e)}>
                <h3>{title}</h3>
                <button onClick={e=>handelClick(e)} type="button">{buttonText}</button>
                {display===true && array.map((e)=>(
                    <FormInput key={e.id} id={e.id} type={e.type} text={e.text} isInput={e.isInput} value={e.value} setValue={e.setValue}/>
                )) }

            {/* { display&&(
                    <div className="buttons-div">
                        <button type="submit">Submit</button>
                        <button>Edit</button>
                    </div>
                )} */}
           </form>
        </section>
        </>
    )
}