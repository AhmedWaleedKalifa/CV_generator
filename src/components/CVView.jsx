import OutputSection from "./OutputSection";
import "../styles/cvView.css"

export default function CVView({left=[],leftColor="white",right=[],rightColor="#008"}){
    return(
        <>
         <aside>
                <div className='left' style={{color:leftColor}}>
                    {
                    left.map(e=>(
                        <OutputSection title={e.title} array={e.array} color={e.color} key={e.title}/>
                    ))
                    }
                </div>

                <div className='right' style={{color:rightColor}}>
                {
                    right.map(e=>(
                        <OutputSection title={e.title} array={e.array} color={e.color} key={e.title}/>
                    ))
                    }
                </div>
            </aside>
        
           
        </>
    )
}