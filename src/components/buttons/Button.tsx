import "./button.scss"
import { revalidatePath } from "next/cache"
import { redirect, usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


type ButtonProps = {
    buttonName: string;
}

export default function Button({buttonName} : ButtonProps) {
    const router = useRouter()
    const pathname = usePathname()
    const [activePath, setActivePath] = useState<boolean>(false)

    useEffect(() => {
        pathname.replace('/', '') == buttonName.toLowerCase().replace('home', '') ? setActivePath(true) : setActivePath(false)
    }, [pathname])

    const handlerRoutePath = (name: string) => {
        name.includes('home') ?  router.push('/') : router.push(`#${name}`)
    }

    return(
        <button
        onClick={() => handlerRoutePath(buttonName.toLowerCase())}
        >
            {buttonName}
        </button>
    )
}