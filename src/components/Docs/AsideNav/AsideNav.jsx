const AsideNav =()=>{
    return(
     
            <div>
                
                <div className="flex flex-col gap-1 pb-1 ">
                <h3 className=" font-bold "> <span className="text-sky-500 font-bold ">Introducción</span></h3>
                <div className="flex flex-col pl-2  ">
                <a href="/docs/introducción">Instalación</a>
                <a href="#guia">Guía</a>
                </div>
                </div>

        
               

                <div className="flex flex-col gap-1 pt-3 pb-1" >
                <h3 className=" font-bold "> <span className="text-sky-500 font-bold ">componentes</span></h3>
                <div className="flex flex-col pl-2 text-sl  ">
                <a href="/docs/Button">Button</a>
                <a href="/docs/Badge">Badger</a>
                <a href="/docs/Input">Input</a>
                <a href="/docs/Card">Card</a>
        

                </div>
                </div>
                    
               
            </div>
        
    )
}

export default AsideNav