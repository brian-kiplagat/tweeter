import Image from "next/image";
import {AdjustmentsVerticalIcon, ArrowPathRoundedSquareIcon, HeartIcon} from "@heroicons/react/24/solid";
import {
    ArrowUpIcon,
    ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";


type Card2Props = {
    id: number,
    name: string,
    age: number,
    city: string,
    gender: string,
    occupation: string,
    tweet: string,
    url: string
    callback?:never
}

export function Card2({callback, url = "", id = 1, name = "", age = 30, city = "New York", gender = "Female", occupation = "Engineer", tweet = ""}: Card2Props) {
    return <div className="m-1 rounded-lg bg-white border border-gray-100 shadow p-2 hover:bg-sky-50 hover:shadow-lg">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 mb-2 justify-start">
                <div className="relative">
                    <Image src={url} alt="Image" quality={100} width={50} height={50}
                           className="rounded-full ring-1 ring-blue-700"/>
                    <span
                        className="top-0 left-10 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
                <div className="font-medium text-black-500">
                    <p className="font-bold text-black-500">{name}</p>
                    <p> {gender}, {age}, {occupation}, {city}</p>
                </div>

            </div>
            <EllipsisHorizontalIcon className="h-4 w-4 cursor-pointer"/>

        </div>
        <p className="mb-1">{tweet}</p>
        <div className="flex justify-between">
            <ChatBubbleOvalLeftIcon className="h-4 w-4 cursor-pointer"/>
            <ArrowPathRoundedSquareIcon className="h-4 w-4 cursor-pointer"/>
            <HeartIcon className="h-4 w-4 fill-red-700 cursor-pointer"/>
            <AdjustmentsVerticalIcon className="h-4 w-4 cursor-pointer"/>
            <ArrowUpIcon className="h-4 w-4 cursor-pointer"/>
        </div>


    </div>
}