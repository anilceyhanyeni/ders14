import useVericek from "./hooks/useVericek"

function Kisi({kisiNo}) {

    console.log(kisiNo)
    const [veri] = useVericek(`https://jsonplaceholder.typicode.com/users/${kisiNo}`)

    return (
        <>
        {veri && <p>Ad Soyad: {veri.name} Şehir: {veri.address.city}</p>}
        </>
    )
}

export default Kisi