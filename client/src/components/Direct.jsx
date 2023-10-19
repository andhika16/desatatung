import React from 'react'
import { Link } from "react-router-dom";

const Direct = ({link}) => {
  return (
    <div>
        <Link to={link}>
            <p className="p-2  text-black hover:bg-slate-200 ">{link.replace(/[/]/g, "")}</p>
        </Link>
    </div>
  )
}

export default Direct