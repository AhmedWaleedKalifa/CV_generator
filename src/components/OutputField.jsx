
export default function OutputField({name,value,color="white"}){
    return(
       <>
        {
        value && (
            <p className="output-field" style={{color:color}}><b>{name}:</b> {value}</p>
        )
        }
       </>
        
    )
}