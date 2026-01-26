import React from 'react'
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from '../ui/card'
import Image from 'next/image'

export default function PersonWidgetMobile({image, name, position, content}) {
  return (
    <Card className={"py-0 w-full sm:w-100 md:hidden grid"}>
        <CardHeader className="justify-center py-5
        bg-[radial-gradient(circle_at_75%,#c89116,#c89116,#cfceaa)] rounded-t-xl">
                  <Image src={image} width="50" height="50"  alt={"boss"} className="shadow-xs rounded-full h-35 w-35 bg-red-100" />
        </CardHeader>
        <CardContent>
            <CardTitle className={"text-center text-xl"}>
                <h1>{name}</h1>
                <h1>{position}</h1>
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
