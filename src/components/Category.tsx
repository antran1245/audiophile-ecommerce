import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Category() {
    const [typeOfCategory, getType] = useState<string | undefined>('')
    const params = useParams()
    useEffect(() => {
        getType(params.type)
    }, [])
    return(
        <main>
            <p className="heading2 pt-[195px] pb-[97px] text-center bg-101010 text-FFFFFF uppercase">{typeOfCategory}</p>
        </main>
    )
}