import Left from "./componets/Left";
import Navbar from "./componets/Navbar";
import Middle from "./componets/Middle";
import Search from "./componets/Search";
import Right from "./componets/Right";
import Sharing from "./componets/Sharing";


export default function Home() {
  return (
    <div className="mx-[50px]">
      <div className=''>
        <Navbar />
      </div>

      <div className="flex">

        <div className="left w-1/5 ">
          <Left />
        </div>

        <div className="middle my-[137px] w-[600px] ">
          <Sharing/>
          <Middle />
        </div>

        <div className="right w-[350px]  mx-8 ">
          <div className="w-full">
            <Search/>
          </div>
          
          <Right/>
        </div>
        
        
      </div>

    
      
    </div>

  )
}
