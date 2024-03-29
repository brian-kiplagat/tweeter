"use client"
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";


export function SideNav() {

    const session = useSession()
    const user = session.data?.user
    return <nav className="sticky top-0 px-2 py-4">
        <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
            <li>
                <Link href="#">Home</Link>
            </li>
            {user != null && (<li>
                <Link href={`profile/${user.id}`}>Profile</Link>
            </li>)}
            {user == null ? (<li>
                <button onClick={()=>void signIn()}>login</button>
            </li>) : (          <button onClick={()=>void signOut()}>logout</button>
            )}



        </ul>


    </nav>

}