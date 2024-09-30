import React from 'react'

function Commonform({formcontrol,formData,setformdata,onsubmit,buttonText}) {

function renderInputsbycomponentType (getcontrolitem){
    let element=null;
    const value= FormData[getcontrolitem.name] || ''
    switch (getcontrolitem.componenttype){
        case "input":
            element=(<input 
            name={getcontrolitem.name} 
            placeholder={getcontrolitem.placeholder}
            id={getcontrolitem.name}
            type={getcontrolitem.type}
            value={value}
            
            />)
            break;
            case "select":
                element=(
                    <select value={value}>
                        <selectTrigger>
                            <SelectValue placeholder={getcontrolitem.placeholder}>

                            </SelectValue>
                            <SelectContent>
                                {
                                    getcontrolitem.options &&
                                    getcontrolitem.options.length >0 ?
                                    getcontrolitem.options.map(optionitem=><Selectitem key={optionitem.id} value={optionitem.label}></Selectitem>):null

                                }
                            </SelectContent>
                        </selectTrigger>

                    </select>


                )
                break;
                case "textarea":
                    element=(
                        <textarea name={getcontrolitem.name} placeholder={getcontrolitem.placeholder} id={getcontrolitem.id}
                        value={value}/>
                    );
                    break;
            default:
                element=(<input 
            name={getcontrolitem.name} 
            placeholder={getcontrolitem.placeholder}
            id={getcontrolitem.name}
            type={getcontrolitem.type}
            
            />)



    }
    return element

}






  return (
    <>
   <form action="" onsubmit={onsubmit}>
    <div className="formlay">
        {formcontrol.map(controlitem=><div>
            <Label >{controlitem.label}</Label>
            {renderInputsbycomponentType(controlitem)}
        </div>)}
    </div>
    <button type='submit'>{buttonText || 'submit'}</button>



   </form>







  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Commonform