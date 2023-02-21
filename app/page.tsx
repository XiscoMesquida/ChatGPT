import {SunIcon, BoltIcon,ExclamationTriangleIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex flex-col justify-center h-screen items-center px-2 text-black">
        <h1 className="text-5xl font-evasta font-bold  mb-20"> EVA-モデル</h1>
        
    <div>
        <div className="flex space-x-2 text-center">
      <div>
          <div className="flex flex-col items-center justify-center mb-5">
            
            <SunIcon className="h-8 w-8" />
           <h2 className="font-evasta">Examples</h2>
          </div>

          <div className="space-y-2 font-evasta">
           <p className="infoText">"Explain Something to me"</p>
           <p className="infoText">
            "What is the difference between you and me?"
           </p>
           <p className="infoText">"What is the color of the sun?"</p>
          </div>
      </div> 
      <div>
          <div className="flex flex-col items-center justify-center mb-5">
            
            <BoltIcon className="h-8 w-8" />
           <h2 className="font-evasta">Capabilities</h2>
          </div>

          <div className="space-y-2 font-evasta">
           <p className="infoText">"Change The MODEL to use"</p>
           <p className="infoText">
            "メッセージはMINDに保存されます"
           </p>
           <p className="infoText">"Hot Toast notifications when Model is thinking"</p>
          </div>
      </div>      
      <div>
          <div className="flex flex-col items-center justify-center mb-5">
            
            <ExclamationTriangleIcon className="h-8 w-8" />
           <h2 className="font-evasta">Limitations</h2>
          </div>

          <div className="space-y-2 font-evasta">
           <p className="infoText">"May occasionally generate incorret information"</p>
           <p className="infoText">
           「時折、有害な指示や偏った内容を生成することがありますか?」
           </p>
           <p className="infoText">"Knowledge of world?"</p>
          </div>
      </div>  
      </div>         
     </div>
    </div>
  )
}

export default HomePage