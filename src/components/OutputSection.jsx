import OutputField from "./OutputField"
import "../styles/outputSection.css"

export default function OutputSection({title="",array,color}){
    return(
        <>
            {title!="" &&<h3 className="output-section">{title}</h3>}
            <ul style={{listStyle:"none"}}>
                { 
                    array
                    .filter((e) => e.name === "image") 
                    .map((e, index) => (
                      <img 
                        key={index} 
                        className="image-container" 
                        src={e.value} 
                        alt="" 
                      />
                    ))
            } 
            { 
                array.filter(e=>e.name !="image").map(e=>(
                    <li key={e.name} >
                        <OutputField name={e.name} value={e.value} fontSize={e.fontSize} color={color} key={e.name}/>
                    </li>
                ))
            }
            </ul>
            
        </>
    )
}