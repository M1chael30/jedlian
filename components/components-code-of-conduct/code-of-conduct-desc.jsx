import React from 'react'
import COCReadHere from './code-of-conduct-read-here'

export default function CodeOfConductDesc() {
    return (
        <div className="flex flex-wrap w-160 gap-10 justify-end">
            <p className='text-right text-xl text-yellow-100'>
            Our Code of Conduct outlines the ethical standards and professional behavior
             expected of everyone in the organization. It promotes integrity, respect, accountability, and compliance
              with laws and company  policies in all work-related activities.
            </p>
            <COCReadHere/>
        </div>

    )
}
