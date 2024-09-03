import "./button.scss"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


type ButtonProps = {
    buttonName: string;
    handleMenu: () => void;
}

export default function Button({buttonName, handleMenu} : ButtonProps) {
    const router = useRouter()
    const pathname = usePathname()
    const [activePath, setActivePath] = useState<boolean>(false)

    useEffect(() => {
        pathname.replace('/', '') == buttonName.toLowerCase().replace('home', '') ? setActivePath(true) : setActivePath(false)
    }, [pathname])

    const handlerRoutePath = (name: string) => {
        name.includes('home') ?  router.push('/') : router.push(`#${name}`)
        handleMenu();
    }

    return(
        <button
        onClick={() => handlerRoutePath(buttonName.toLowerCase())}
        >
            {buttonName}
        </button>
    )
}