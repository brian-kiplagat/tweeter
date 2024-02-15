import Image from "next/image";

type CardProps = {
    name?: string,
    age: number,
    city: string,

}

export function Card({name = "", age = 0, city=""}: CardProps) {


    return <div
        className="relative m-1 overflow-hidden flex items-center justify-center bg-white p-4 rounded-lg w-[300px] h-[200px] ">
        <p className="relative flex z-10 text-white font-bold font-sans">{name}, {age}, {city}</p>
        <div className="absolute inset-0 overflow-hidden">
            <Image className="w-full h-full object-cover" width={30} height={30} quality={100}
                   src="https://firebasestorage.googleapis.com/v0/b/chatapp-3b35b.appspot.com/o/project%2Fcicd.png?alt=media&token=35b552f2-fd49-48dc-9040-9c60abbf8026"
                   alt="Image"/>
        </div>

    </div>
}