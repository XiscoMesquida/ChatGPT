'use client'

import { useSession, signOut } from "next-auth/react"
import { collection, orderBy, query } from "firebase/firestore"
import {useCollection} from "react-firebase-hooks/firestore"
import NewChat from "./NewChat"
import {db} from "../firebase"
import ChatRow from "./ChatRow"
import ModelSelection from "./ModelSelection"
import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/solid"


function SideBar() {
  const { data: session} = useSession();

  const[chat, loading, error] = useCollection(
    session && query(
      collection(db, 'users', session.user?.email!, 'chats'),
      orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
            <div className='flex justify-between my-2 mx-2'>
                <Link
                  className='text-2xl font-evasta text-gray-400'  
                  href='/'>
                  <HomeIcon className='h-10 w-10 text-gray-400 hover:text-blue-100 hover:animate-pulse' />
                </Link>
                <a className='text-xl font-evasta hover hover:animate-pulse text-gray-400 border outline-3 border-white rounded-full p-0' href='https://github.com/XiscoMesquida'
                  target='_blank'><p className='p-2 hover hover:animate-pulse'>Github</p></a>
              </div>
                
                {/* NewChat */}
                <NewChat />
                <div className="hidden sm:inline">
                   <ModelSelection />
                </div>


                <div className="flex flex-col space-y-2 my-2">

                  {loading && (
                    <div className="animate-pulse text-center text-white">
                      <p>
                      Cargando
                      </p>
                    </div>
                  )}
                {/* Map through the CharTows */}
                {chat?.docs.map((chat) => (
                  <ChatRow key={chat.id} id={chat.id} />
                ))}

                </div>

            </div>
        </div>

        {session && (
          <img 
          onClick={() => signOut()}
          src={session.user?.image!} alt="Profile pic " 
          className="h-12 w-12 rounded-full cursor-pointer mx-auto 
          mb-2 hover:opacity-50"
          />
        )}
    </div>
  )
}

export default SideBar