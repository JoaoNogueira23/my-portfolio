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
        console.log(pathname)
        if(buttonName.toLowerCase() == 'home'){
            setActivePath((prev) => !prev)
        }else{
            pathname.replace('/', '') == buttonName.toLowerCase() ? setActivePath(true) : setActivePath(false)
        }
        
    }, [pathname])

    const handlerRoutePath = (name: string) => {
        name.includes('home') ?  router.push('/') : router.push(name)
    }

    return(
        <button
        onClick={() => handlerRoutePath(buttonName.toLowerCase())}
        >
            {buttonName}
            <div className={activePath ? `line-decorator-active` : `line-decorator-block`}></div>
           
        </button>
    )
}