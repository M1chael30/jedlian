import { motion } from 'motion/react'
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from '../ui/card'
import Image from 'next/image'

export default function PersonWidgetMobile({image, name, position, content}) {
  return (
    <Card className={"py-0 w-full sm:w-100 md:hidden grid border border-yellow-600"}>
        <CardHeader className="justify-center pt-5 rounded-t-xl ">
                  <Image src={image}  alt={"boss"} className="rounded-full shadow-xs w-50 h-50 border border-yellow-600" />
        </CardHeader>
        <CardContent>
            <CardTitle className={"text-center text-xl"}>
              <div className='bg-[radial-gradient(circle_at_75%,#c89116,#c89116,#cfceaa)]
           text-transparent bg-clip-text'>
                <h1>{name}</h1>
                <h1>{position}</h1>
              </div>
            </CardTitle>
            <CardDescription>
                 <p className="text-gray-300 p-5 h-auto text-xs text-center">
            {content}        
          </p>
            </CardDescription>
        </CardContent>
    </Card>
  )
}
