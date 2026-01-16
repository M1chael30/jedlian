import React from 'react'
import COCReadHere from './code-of-conduct-read-here'

export default function CodeOfConductDesc() {
    return (
        <div className="md:flex flex-col items-end justify-end p-5 gap-5">
            <p className='md:text-right text-sm text-yellow-100 text-center md:text-xl p-5'>
            Our Code of Conduct outlines the ethical standards and professional behavior
             expected of everyone in the organization. It promotes integrity, respect, accountability, and compliance
              with laws and company  policies in all work-related activities.
            </p>
            <COCReadHere/>
        </div>

    )
}
