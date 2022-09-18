import React,{Component} from "react"
import UltimoProducto from "./UltimoProducto";


class UltimoProductoEnDb extends Component{
    constructor(){
        super();
        this.state = {
            product: null
        }
    }
    componentDidMount(){
        
        fetch("/api/ultimoProductoCreado")
        .then(res =>{
            console.log(res) 
            return  res.json()
        }) 
        .then(data => {
            this.setState({ product: data.data[0] })
        })
    .catch(error => console.log(error))
    }
    render(){
        return(
            <div className="product-list">
                <h2 className="text-center my-[5rem]">Ultimo producto creado</h2>
                {this.state.product?  
                     <UltimoProducto  {...this.state.product} />: <div>Cargando Productos</div>
                }
            </div>
        )
    }
}

export default UltimoProductoEnDb