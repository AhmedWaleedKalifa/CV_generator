
export default function OutputField({name,value,fontSize=16+"px",color="white"}){
    return(
       <>
        {
        value && (
            <p className="output-field" style={{fontSize:fontSize,color:color,padding:fontSize+" 0"}}><b>{name}:</b> {value}</p>
        )
        }
       </>
        
    )
}