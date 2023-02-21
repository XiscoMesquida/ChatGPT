import SideBar from '../components/SideBar'
import '../styles/globals.css'
import { SessionProvider } from '../components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import Login from '../components/Login'
import ClientProvider from '../components/ClienProvider'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
           <Login/>
          ):(
            
            <div className="flex">
            {/* SIDEBAR */}
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] ">
            <SideBar/>
            </div>
            {/* ClientProvider */}
            <ClientProvider />

            <div className="bg-[#f9fdff] flex-1">{children}</div>
            </div>
              )}
        </SessionProvider>
        </body>
    </html>
  )
}
