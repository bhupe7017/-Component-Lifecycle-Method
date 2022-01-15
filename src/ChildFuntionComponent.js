import React, { useEffect } from 'react'

const ChildFuntionComponent = () => {

    useEffect(()=> {
        console.log('Child Component Loaded')

        return()=>{
            console.log('Child Component UnLoaded')
        }

    })

    return (
        <div>
           <h1>Child Componenet</h1> 
        </div>
    )
}

export default ChildFuntionComponent
