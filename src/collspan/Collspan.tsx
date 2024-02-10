import IonIcon from "@reacticons/ionicons";
import { useState } from "react"

const Collspan = () => {
  const [collspanOpen, SetCollspan] = useState(false);
  const [collspanOpentow, SetCollspanTwo] = useState(false);

  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="container mx-auto px-40 py-12">
        <div className="bg-white text-xl px-12 py-8 rounded">
          <div className="flex justify-between w-full font-semibold" onClick={() => SetCollspan(!collspanOpen)}>
            <p className="">This is title 1</p>
            <p className="pt-[3px]">
              <IonIcon name={collspanOpen ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
            </p>

          </div>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              collspanOpen ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
            }`}>          
              <div className="overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo soluta eum iste itaque iusto, natus odio incidunt quibusdam ratione deleniti consequuntur, omnis non, delectus enim vitae velit magni maiores.
                Aspernatur in omnis aut rem accusamus quibusdam repellat excepturi beatae id minima, incidunt, voluptates eaque nesciunt, nulla vel ducimus modi? Iste rem sint dignissimos praesentium provident modi veritatis, pariatur perferendis?
                Hic ipsam voluptatum ullam molestias. Doloremque cumque, nisi, id unde temporibus odio sed minus, molestiae quasi aperiam dicta. Magni reiciendis vero soluta, blanditiis tenetur ipsam facilis quidem commodi eum deleniti?
                Modi tempore alias sunt nam, assumenda saepe numquam minus, repellendus culpa provident ab exercitationem fuga, quo at maiores. Reprehenderit beatae repudiandae autem voluptatibus maxime aperiam quae totam corrupti eos praesentium.
                Sunt necessitatibus omnis, provident dolorum molestiae, non cum laudantium officia adipisci tempora, natus eum? Culpa optio est aspernatur sed, corrupti quo corporis blanditiis odit, voluptas, esse aut voluptate adipisci perspiciatis!
                Eaque vitae exercitationem tempore a quas totam quaerat enim dicta nostrum soluta beatae repellendus, nulla, commodi rerum? Quibusdam consectetur cupiditate officiis, soluta odit exercitationem accusamus modi facilis asperiores nostrum fugiat?  
              </div>    
            </div>
        </div>

        <div className="bg-white text-xl px-12 py-8 rounded mt-4">
          <div className="flex justify-between w-full font-semibold" onClick={() => SetCollspanTwo(!collspanOpentow)}>
            <p className="">This is title 2</p>
            <p className="pt-[3px]">
              <IonIcon name={collspanOpentow ? "chevron-up-circle-outline" : "chevron-down-circle-outline"} />
            </p>

          </div>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
              collspanOpentow ? 'grid-rows-[1fr] opacity-100 pt-4' : 'grid-rows-[0fr] opacity-0'
            }`}>          
              <div className="overflow-hidden">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint similique exercitationem quos, animi minus cum odit laboriosam velit! Placeat commodi asperiores temporibus rem distinctio, unde iste. Modi eius dignissimos alias?
               Deleniti, tempore quo velit provident eos ipsam. Tempore quas dicta, magnam, quisquam dolores veniam deleniti amet doloremque vitae quod laboriosam porro ipsa labore consectetur dolorum sit aspernatur. Distinctio, ab accusamus!
               Dolorem deserunt dicta quos eos ducimus officiis ut itaque voluptatem illo, numquam corrupti repellendus corporis consequatur asperiores, eum quisquam adipisci necessitatibus aspernatur cumque cupiditate porro consequuntur a? Porro, dolor facilis?
               Similique corrupti odit ducimus quidem ipsum, est quibusdam perspiciatis. Corporis cumque perspiciatis magnam a dolorem voluptates recusandae vel ipsam eaque, consectetur sit molestias quos nemo assumenda quis saepe quidem laudantium!
               Tempore animi eum culpa. Iure ratione iste quaerat voluptas, consequuntur illum dolorem! Hic libero accusantium amet id maiores rerum soluta voluptates ipsa possimus magnam. Nam vel architecto ad officiis amet.
               Nesciunt qui voluptatem magnam, doloremque aspernatur itaque explicabo odio eos molestias hic, dolore, ducimus quas nam. Nulla ipsam, eum porro laborum provident et repellat enim eaque, totam minima nesciunt quibusdam.
               Molestias culpa ipsam enim similique quam assumenda dolorum ut at autem repudiandae, aut modi quia quos eum quo rerum magni dolorem fugiat esse cum dolor minima? Assumenda porro facilis possimus!
               Est at perspiciatis totam cupiditate officia libero accusamus dolore molestias culpa dolorem quibusdam, ipsam asperiores amet tempore, possimus quisquam molestiae commodi necessitatibus dolor laborum voluptatem! Doloribus consectetur quaerat iusto soluta.
               Tempore, fugit error suscipit placeat totam temporibus voluptates iusto obcaecati maiores quod laborum est esse necessitatibus autem, iste neque? Molestias ut at nesciunt expedita velit, deleniti suscipit dicta quos error?
               Illo nulla delectus aut eaque alias dignissimos voluptatem rem laboriosam ipsa, quod doloribus. Laboriosam soluta facere, dolores deleniti ipsum molestiae? Recusandae, voluptatibus fuga minima nostrum molestias placeat laboriosam laudantium expedita!
              </div>    
            </div>
        </div>
      </div>
    </div>
  )
}

export default Collspan