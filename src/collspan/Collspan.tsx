import { useState } from "react"

const Collspan = () => {
  const [collspanOpen, SetCollspan] = useState(false);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="container mx-auto px-40 py-12">
        <div className="bg-white text-xl px-12 py-8 rounded">
          <div className="flex justify-between w-full font-semibold" onClick={() => SetCollspan(!collspanOpen)}>
            <p className="">This is title</p>
            <p className="">+</p>
          </div>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              collspanOpen ? 'grid-row-[1fr] opacity-100' : 'grid-row-[0fr] opacity-0'
            }`}>          
            <div className="overflow-hidden pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo soluta eum iste itaque iusto, natus odio incidunt quibusdam ratione deleniti consequuntur, omnis non, delectus enim vitae velit magni maiores.
              Aspernatur in omnis aut rem accusamus quibusdam repellat excepturi beatae id minima, incidunt, voluptates eaque nesciunt, nulla vel ducimus modi? Iste rem sint dignissimos praesentium provident modi veritatis, pariatur perferendis?
              Hic ipsam voluptatum ullam molestias. Doloremque cumque, nisi, id unde temporibus odio sed minus, molestiae quasi aperiam dicta. Magni reiciendis vero soluta, blanditiis tenetur ipsam facilis quidem commodi eum deleniti?
              Modi tempore alias sunt nam, assumenda saepe numquam minus, repellendus culpa provident ab exercitationem fuga, quo at maiores. Reprehenderit beatae repudiandae autem voluptatibus maxime aperiam quae totam corrupti eos praesentium.
              Sunt necessitatibus omnis, provident dolorum molestiae, non cum laudantium officia adipisci tempora, natus eum? Culpa optio est aspernatur sed, corrupti quo corporis blanditiis odit, voluptas, esse aut voluptate adipisci perspiciatis!
              Eaque vitae exercitationem tempore a quas totam quaerat enim dicta nostrum soluta beatae repellendus, nulla, commodi rerum? Quibusdam consectetur cupiditate officiis, soluta odit exercitationem accusamus modi facilis asperiores nostrum fugiat?  
            </div>    
            </div>

        </div>
      </div>
    </div>
  )
}

export default Collspan