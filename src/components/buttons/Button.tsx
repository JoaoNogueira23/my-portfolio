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
        pathname.replace('/', '') == buttonName.toLocaleLowerCase() ? setActivePath(true) : setActivePath(false)
    }, [pathname])

    return(
        <button
        onClick={() => router.push(buttonName.toLowerCase())}
        >
            {buttonName}
            <div className={activePath ? `line-decorator-active` : `line-decorator-block`}></div>
           
        </button>
    )
}