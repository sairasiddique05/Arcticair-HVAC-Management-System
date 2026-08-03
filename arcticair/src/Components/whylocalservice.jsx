import React from 'react'
import {
FaClock,
FaUserShield,
FaBolt,
FaHome
} from "react-icons/fa";

const WhyLocalService = () => {
    const features=[
{
icon:<FaClock/>,
title:"Fast Response",
text:"Local technicians can reach your location quickly."
},
{
icon:<FaUserShield/>,
title:"Certified Experts",
text:"Licensed HVAC professionals with years of experience."
},
{
icon:<FaBolt/>,
title:"24/7 Emergency",
text:"Emergency heating and cooling services whenever needed."
},
{
icon:<FaHome/>,
title:"Residential & Commercial",
text:"Complete HVAC solutions for homes and businesses."
}
]

  return (
  <section className="py-20 bg-slate-100">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-12">

<h2 className="text-4xl font-bold text-[#0F4C81]">
Why Choose Local HVAC Experts?
</h2>

<p className="mt-4 text-gray-600">
Local service means faster response, better support and personalized customer care.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{features.map((item,index)=>(

<div
key={index}
className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
>

<div className="text-4xl text-orange-500 mb-5">
{item.icon}
</div>

<h3 className="text-2xl font-bold text-[#0F4C81]">
{item.title}
</h3>

<p className="mt-4 text-gray-600">
{item.text}
</p>

</div>

))}

</div>

</div>

</section>
  )
}

export default WhyLocalService