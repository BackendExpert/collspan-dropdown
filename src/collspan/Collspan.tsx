import { useState } from "react"

const Collspan = () => {
  const [collspanOpen, SetCollspan] = useState(false);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="container mx-auto px-40 py-12">
        <div className="bg-white text-xl px-12 py-8 rounded">
          <div className="flex justify-between w-full font-semibold">
            <p className="">This is title</p>
            <p className="">+</p>
          </div>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm`}>
              <div className="pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ab, quod ipsam aliquid laboriosam maxime, earum ad numquam dicta doloribus vero doloremque culpa error quas aperiam illum velit, possimus dolorum!
              Consectetur, eum ipsum laudantium architecto laborum officiis dicta enim omnis consequuntur fugit quae exercitationem nulla veritatis velit hic adipisci. Omnis hic aspernatur nesciunt? Eos voluptatum repellendus omnis sapiente? Numquam, unde.</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Collspan