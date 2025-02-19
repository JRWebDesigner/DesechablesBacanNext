export default function ImagesMarks(props){
    return(
        <>
            
                <img className="opacity-35 translate-y-14 scale-50 duration-[300ms]" width="150px" src={`/marcas/${props.name}.png`} alt={`logo ${props.name}`} />
        </>
    )
}