import { useParams } from "react-router-dom"
import { DetalleCard } from "../componentes/DetalleCard"


export const PaginaDetalle = () => {
    const params = useParams();
    const pais = params.pais || ""; 

  return (
    <DetalleCard nombrePais={pais}></DetalleCard>
  )
}
