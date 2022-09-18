export default function UltimoProducto({name,image,brands,colors,price, description, materials}){
    return(
        <div className="bg-gray-100 w-[25rem] p-[1rem] m-[2rem] rounded-lg">
            <img src={image.url} alt="card_img" className="rounded-lg" />
            <p className="text-xl font-semibold text-gray-800 my-3">{name}</p>
            <p className="text-sm font-semibold text-gray-700 mb-3">{brands.name} - {colors.name} - {materials.name}</p>
            <p className="font-semibold text-gray-700 mb-3">{description}</p>
            <div className="flex">
                <p className="text-lg font-semibold text-gray-700 mb-3 flex-1">Price </p><p className="text-lg">U$S: {price}</p>
            </div>
        </div>
    )
    }