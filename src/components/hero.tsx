export const Hero = () => {
    return (
        <div className="bg-slate-400">
            <div className="lg:pt-16 lg:pb-16 flex justify-center flex-row flex-wrap pt-4 pb-4 items-center gap-2">
                <div>
                    <img className="hidden 2xl:block w-[17vw] min-w-[150px] mr-20" src={require("../icons/awsdeveloper.png")} alt=""/>
                </div>
                <div className="flex flex-row flex-wrap justify-center">
                    <img className="w-[320px] rounded-xl shadow-xl" src={require('../images/grandteton.JPEG')} alt="" />
                    <div className="w-[320px] lg:text-xl sm:ml-12">
                    <h1 className="pt-4 pb-4 lg:mb-8 lg:mt-4">Hi, I am Sam,</h1>
                    <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Aspernatur, minima pariatur dolores quas 
                        eos quisquam consequatur unde officia accusamus! Tempora nobis 
                        atque cum quas temporibus ea ipsa deserunt mollitia maxime.</p>
                    </div>
                </div>
                <div className="">
                    <img className="hidden 2xl:block w-[17vw] min-w-[150px] ml-20"src={require("../icons/awspractioner.png")} alt=""/>
                </div>                
            </div>
            <div className="2xl:hidden flex pb-8 pt-8 flex-row justify-evenly">
                <img className="w-[17vw] min-w-[150px]"src={require("../icons/awspractioner.png")} alt=""/>
                <img className="w-[17vw] min-w-[150px]" src={require("../icons/awsdeveloper.png")} alt=""/>
            </div>
        </div>
       
    );
};