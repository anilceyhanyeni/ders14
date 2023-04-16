import useVericek from "./hooks/useVericek"

function IsBilgi({isNo}) {
    const [veri] = useVericek("https://jsonplaceholder.typicode.com/todos/"+isNo)
        
    return (
        <>
            { veri && <p>İş No: {veri.id}, İş Adı: {veri.title}, <input readOnly type="checkbox" checked={veri.completed} />  </p> }
        </>
    )
}

export default IsBilgi