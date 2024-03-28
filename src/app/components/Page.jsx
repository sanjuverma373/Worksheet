"use client"
import { useState } from 'react';
import Image from 'next/image';

const Page = () => {
        const [first, setFirst] = useState("tab1")
        function tabchanges(tabs) {
                setFirst(tabs)
        }
        return (
                <div className=' bg-black'>
                        <div className=' container px-3 mx-auto'>
                                <div className=' grid grid-cols-8 '>
                                        <div className=' col-span-2'>
                                                <div className=' bg-slate-200 shadow-lg min-h-screen p-5'>
                                                        <div className=' flex items-center gap-1 pb-7'>
                                                                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                                                </svg></a>
                                                                <h2 className='font-bold text-2xl'>Sanju Verma_373</h2>
                                                        </div>
                                                        <h2 className='font-bold text-2xl text-black pb-8'>Months :--</h2>
                                                        <div className=' flex flex-col gap-9'>
                                                                <button onClick={() => tabchanges("tab1")} className={` ${first === "tab1"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>January</button>
                                                                <button onClick={() => tabchanges("tab2")} className={` ${first === "tab2"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>Febuary</button>
                                                                <button onClick={() => tabchanges("tab3")} className={` ${first === "tab3"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>March</button>
                                                                <button onClick={() => tabchanges("tab4")} className={` ${first === "tab4"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>April</button>
                                                                <button onClick={() => tabchanges("tab5")} className={` ${first === "tab5"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>May</button>
                                                                <button onClick={() => tabchanges("tab6")} className={` ${first === "tab6"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>June</button>
                                                                <button onClick={() => tabchanges("tab7")} className={` ${first === "tab7"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>July</button>
                                                                <button onClick={() => tabchanges("tab8")} className={` ${first === "tab8"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>August</button>
                                                                <button onClick={() => tabchanges("tab9")} className={` ${first === "tab9"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>September</button>
                                                                <button onClick={() => tabchanges("tab10")} className={` ${first === "tab10"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>October</button>
                                                                <button onClick={() => tabchanges("tab11")} className={` ${first === "tab11"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>November</button>
                                                                <button onClick={() => tabchanges("tab12")} className={` ${first === "tab12"} font-medium text-black px-5 py-3 hover:bg-slate-400 duration-300 rounded-lg border border-slate-400 `}>December</button>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='col-span-6 flex m-10'>
                                                {
                                                        first === "tab1" &&
                                                        <div className=' bg-slate-400 p-4 rounded-2xl shadow-xl w-full'>
                                                                <h2 className='font-bold text-2xl text-black pb-8'>January Topics :--</h2>
                                                                <div className=' bg-white flex gap-7 p-5 rounded-2xl '>
                                                                        <div className=' gap-2 flex'>
                                                                                <p className='font-bold text-xl'>1.</p>
                                                                            <Image className=' object-cover rounded-xl' src="/image/furniture.png" alt='img' height={300} width={300}/>
                                                                                
                                                                        </div>
                                                                        <div className=' flex gap-6'>
                                                                                <div>
                                                                                <p className=' font-bold pb-3 text-xl'>Furniture</p>
                                                                                        <div className=' flex items-center gap-2'>
                                                                                                <p className='font-bold'>Github-Link:-</p>
                                                                                                <a href="https://github.com/sanjuverma373/furniture2.git" target='_blank'>https://github.com/sanjuverma373/furniture2.git</a>
                                                                                        </div>
                                                                                        <div className=' flex items-center gap-2 pt-2'>
                                                                                                <p className='font-bold'>Vercel-Link:-</p>
                                                                                                <a href="https://furniture2-tau.vercel.app/" target='_blank'>https://furniture2-tau.vercel.app/</a>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className=' bg-white flex gap-7 p-5 rounded-2xl mt-7 '>
                                                                        <div className=' gap-2 flex '>
                                                                                <p className='font-bold text-xl'>2.</p>
                                                                            <Image className=' object-cover rounded-xl' src="/image/lemonwaris.png" alt='img' height={300} width={300}/>
                                                                                
                                                                        </div>
                                                                        <div className=' flex gap-6'>
                                                                                <div>
                                                                                <p className=' font-bold pb-3 text-xl'>Lemonwaris</p>
                                                                                        <div className=' flex items-center gap-2'>
                                                                                                <p className='font-bold'>Github-Link:-</p>
                                                                                                <a href="https://github.com/sanjuverma373/lemonwaris.git" target='_blank'>https://github.com/sanjuverma373/lemonwaris.git</a>
                                                                                        </div>
                                                                                        <div className=' flex items-center gap-2 pt-2'>
                                                                                                <p className='font-bold'>Vercel-Link:-</p>
                                                                                                <a href="https://lemonwaris.vercel.app/" target='_blank'>https://lemonwaris.vercel.app/</a>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className=' bg-white flex gap-7 p-5 rounded-2xl mt-7 '>
                                                                        <div className=' gap-2 flex '>
                                                                                <p className='font-bold text-xl'>3.</p>
                                                                            <Image className=' object-cover rounded-xl' src="/image/aviation.png" alt='img' height={300} width={300}/>
                                                                                
                                                                        </div>
                                                                        <div className=' flex gap-6'>
                                                                                <div>
                                                                                <p className=' font-bold pb-3 text-xl'>Aviation</p>
                                                                                        <div className=' flex items-center gap-2'>
                                                                                                <p className='font-bold'>Github-Link:-</p>
                                                                                                <a href="https://github.com/sanjuverma373/aviation.git" target='_blank'>https://github.com/sanjuverma373/aviation.git</a>
                                                                                        </div>
                                                                                        <div className=' flex items-center gap-2 pt-2'>
                                                                                                <p className='font-bold'>Vercel-Link:-</p>
                                                                                                <a href="https://aviation-one.vercel.app/" target='_blank'>https://aviation-one.vercel.app/</a>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                }
                                                {
                                                        first === "tab2" &&
                                                                <div className=' bg-slate-400 p-4 rounded-2xl w-full h-[1080px] overflow-hidden overflow-y-scroll flex flex-col'>
                                                                        <h2 className='font-bold text-2xl text-black pb-8'>Febuary Topics :--</h2>
                                                                        <div className=' bg-white flex gap-7 p-5 rounded-2xl '>
                                                                                <div className=' gap-2 flex '>
                                                                                        <p className='font-bold text-xl'>1.</p>
                                                                                    <Image className=' object-cover rounded-xl' src="/image/game.png" alt='img' height={300} width={300}/>
                                                                
                                                                                </div>
                                                                                <div className=' flex gap-6'>
                                                                                        <div>
                                                                                        <p className=' font-bold pb-3 text-xl'>Exclusive-Game</p>
                                                                                                <div className=' flex items-center gap-2'>
                                                                                                        <p className='font-bold'>Github-Link:-</p>
                                                                                                        <a href="https://github.com/sanjuverma373/exclusive-games.git" target='_blank'>https://github.com/sanjuverma373/exclusive-games.git</a>
                                                                                                </div>
                                                                                                <div className=' flex items-center gap-2 pt-2'>
                                                                                                        <p className='font-bold'>Vercel-Link:-</p>
                                                                                                        <a href="https://exclusive-games-orcin.vercel.app/" target='_blank'>https://exclusive-games-orcin.vercel.app/</a>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className=' bg-white flex gap-7 p-5 rounded-2xl mt-7 '>
                                                                                <div className=' gap-2 flex '>
                                                                                        <p className='font-bold text-xl'>2.</p>
                                                                                    <Image className=' object-cover rounded-xl' src="/image/dinolfg.png" alt='img' height={300} width={300}/>
                                                                
                                                                                </div>
                                                                                <div className=' flex gap-6'>
                                                                                        <div>
                                                                                        <p className=' font-bold pb-3 text-xl'>DinoLFG</p>
                                                                                                <div className=' flex items-center gap-2'>
                                                                                                        <p className='font-bold'>Github-Link:-</p>
                                                                                                        <a href="https://github.com/sanjuverma373/dinolfg.git" target='_blank'>https://github.com/sanjuverma373/dinolfg.git</a>
                                                                                                </div>
                                                                                                <div className=' flex items-center gap-2 pt-2'>
                                                                                                        <p className='font-bold'>Vercel-Link:-</p>
                                                                                                        <a href="https://dinolfg-three.vercel.app/" target='_blank'>https://dinolfg-three.vercel.app/</a>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className=' bg-white flex gap-7 p-5 rounded-2xl mt-7 '>
                                                                                <div className=' gap-2 flex '>
                                                                                        <p className='font-bold text-xl'>3.</p>
                                                                                    <Image className=' object-cover rounded-xl' src="/image/nexai.png" alt='img' height={300} width={300}/>
                                                                
                                                                                </div>
                                                                                <div className=' flex gap-6'>
                                                                                        <div>
                                                                                        <p className=' font-bold pb-3 text-xl'>NexAi</p>
                                                                                                <div className=' flex items-center gap-2'>
                                                                                                        <p className='font-bold'>Github-Link:-</p>
                                                                                                        <a href="https://github.com/sanjuverma373/Nexai.git" target='_blank'>https://github.com/sanjuverma373/Nexai.git</a>
                                                                                                </div>
                                                                                                <div className=' flex items-center gap-2 pt-2'>
                                                                                                        <p className='font-bold'>Vercel-Link:-</p>
                                                                                                        <a href="https://nexai-opal.vercel.app/" target='_blank'>https://nexai-opal.vercel.app/</a>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className=' bg-white flex gap-7 p-5 rounded-2xl mt-7 '>
                                                                                <div className=' gap-2 flex'>
                                                                                        <p className='font-bold text-xl'>4.</p>
                                                                                    <Image className=' object-cover rounded-xl' src="/image/calculator.png" alt='img' height={200} width={200}/>
                                                                
                                                                                </div>
                                                                                <div className=' flex gap-6'>
                                                                                        <div>
                                                                                        <p className=' font-bold pb-3 text-xl'>Calculator</p>
                                                                                                <div className=' flex items-center gap-2'>
                                                                                                        <p className='font-bold'>Github-Link:-</p>
                                                                                                        <a href="https://github.com/sanjuverma373/calculator.git" target='_blank'>https://github.com/sanjuverma373/calculator.git</a>
                                                                                                </div>
                                                                                                <div className=' flex items-center gap-2 pt-2'>
                                                                                                        <p className='font-bold'>Vercel-Link:-</p>
                                                                                                        <a href="https://calculator-olive-psi.vercel.app/" target='_blank'>https://calculator-olive-psi.vercel.app/</a>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className=' bg-white flex gap-7 p-5 rounded-2xl mt-7 '>
                                                                                <div className=' gap-2 flex'>
                                                                                        <p className='font-bold text-xl'>5.</p>
                                                                                    <Image className=' object-cover rounded-xl' src="/image/nexai.png" alt='img' height={300} width={300}/>
                                                                
                                                                                </div>
                                                                                <div className=' flex gap-6'>
                                                                                        <div>
                                                                                        <p className=' font-bold pb-3 text-xl'>NexAi-bootstrap</p>
                                                                                                <div className=' flex items-center gap-2'>
                                                                                                        <p className='font-bold'>Github-Link:-</p>
                                                                                                        <a href="https://github.com/sanjuverma373/nexaib.git" target='_blank'>https://github.com/sanjuverma373/nexaib.git</a>
                                                                                                </div>
                                                                                                <div className=' flex items-center gap-2 pt-2'>
                                                                                                        <p className='font-bold'>Netlify-Link:-</p>
                                                                                                        <a href="https://moonlit-liger-7b71a9.netlify.app/" target='_blank'>https://moonlit-liger-7b71a9.netlify.app/</a>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>                                                        
                                                }
                                                {
                                                        first === "tab3" &&
                                                        <div className=' bg-slate-400 p-4 rounded-2xl w-full h-[1080px] overflow-hidden overflow-y-scroll flex flex-col'>
                                                                        <h2 className='font-bold text-2xl text-black pb-8'>March Topics :--</h2>
                                                                        <div className=' bg-white flex gap-7 p-5 rounded-2xl '>
                                                                                <div className=' gap-2 flex'>
                                                                                        <p className='font-bold text-xl'>1.</p>
                                                                                    <Image className=' object-cover rounded-xl' src="/image/cloopp.png" alt='img' height={300} width={300}/>
                                                                
                                                                                </div>
                                                                                <div className=' flex gap-6'>
                                                                                        <div>
                                                                                        <p className=' font-bold pb-3 text-xl'>Cloopp</p>
                                                                                                <div className=' flex items-center gap-2'>
                                                                                                        <p className='font-bold'>Github-Link:-</p>
                                                                                                        <a href="https://github.com/sanjuverma373/cloopp.git" target='_blank'>https://github.com/sanjuverma373/cloopp.git</a>
                                                                                                </div>
                                                                                                <div className=' flex items-center gap-2 pt-2'>
                                                                                                        <p className='font-bold'>Vercel-Link:-</p>
                                                                                                        <a href="https://jocular-starlight-3c2675.netlify.app/" target='_blank'>https://jocular-starlight-3c2675.netlify.app/</a>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className=' bg-white flex gap-7 p-5 rounded-2xl mt-7 '>
                                                                                <div className=' gap-2 flex'>
                                                                                        <p className='font-bold text-xl'>2.</p>
                                                                                    <Image className=' object-cover rounded-xl' src="/image/248labs.png" alt='img' height={300} width={300}/>
                                                                
                                                                                </div>
                                                                                <div className=' flex gap-6'>
                                                                                        <div>
                                                                                        <p className=' font-bold pb-3 text-xl'>248Labs</p>
                                                                                                <div className=' flex items-center gap-2'>
                                                                                                        <p className='font-bold'>Github-Link:-</p>
                                                                                                        <a href="https://github.com/sanjuverma373/248labs.git" target='_blank'>https://github.com/sanjuverma373/248labs.git</a>
                                                                                                </div>
                                                                                                <div className=' flex items-center gap-2 pt-2'>
                                                                                                        <p className='font-bold'>Vercel-Link:-</p>
                                                                                                        <a href="https://248labs-two.vercel.app/" target='_blank'>https://248labs-two.vercel.app/</a>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className=' bg-white flex gap-7 p-5 rounded-2xl mt-7 '>
                                                                                <div className=' gap-2 flex'>
                                                                                        <p className='font-bold text-xl'>3.</p>
                                                                                    <Image className=' object-cover rounded-xl' src="/image/form-validation.png" alt='img' height={300} width={300}/>                                                                
                                                                                </div>
                                                                                <div className=' flex gap-6'>
                                                                                        <div>
                                                                                        <p className=' font-bold pb-3 text-xl'>Form-Validation</p>
                                                                                                <div className=' flex items-center gap-2'>
                                                                                                        <p className='font-bold'>Github-Link:-</p>
                                                                                                        <a href="https://github.com/sanjuverma373/form-validation.git" target='_blank'>https://github.com/sanjuverma373/form-validation.git</a>
                                                                                                </div>
                                                                                                <div className=' flex items-center gap-2 pt-2'>
                                                                                                        <p className='font-bold'>Vercel-Link:-</p>
                                                                                                        <a href="https://form-validation-kappa-two.vercel.app/" target='_blank'>https://form-validation-kappa-two.vercel.app/</a>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className=' bg-white flex gap-7 p-5 rounded-2xl mt-7 '>
                                                                                <div className=' gap-2 flex '>
                                                                                        <p className='font-bold text-xl'>4.</p>
                                                                                    <Image className=' object-cover rounded-xl' src="/image/next-js.png" alt='img' height={300} width={300}/>
                                                                
                                                                                </div>
                                                                                <div className=' flex gap-6'>
                                                                                        <div>
                                                                                        <p className=' font-bold pb-3 text-xl'>Next-js</p>
                                                                                                <div className=' flex items-center gap-2'>
                                                                                                        <p className='font-bold'>Github-Link:-</p>
                                                                                                        <a href="https://github.com/sanjuverma373/nx-page.git" target='_blank'>https://github.com/sanjuverma373/nx-page.git</a>
                                                                                                </div>
                                                                                                <div className=' flex items-center gap-2 pt-2'>
                                                                                                        <p className='font-bold'>Vercel-Link:-</p>
                                                                                                        <a href="https://nx-page.vercel.app/" target='_blank'>https://nx-page.vercel.app/</a>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>                                                                
                                                                        <div className=' bg-white flex gap-7 p-5 rounded-2xl mt-7 '>
                                                                                <div className=' gap-2 flex '>
                                                                                        <p className='font-bold text-xl'>5.</p>
                                                                                    <Image className=' object-cover rounded-xl' src="/image/swipslid.png" alt='img' height={300} width={300}/>
                                                                
                                                                                </div>
                                                                                <div className=' flex gap-6'>
                                                                                        <div>
                                                                                        <p className=' font-bold pb-3 text-xl'>Swiper-Slider</p>
                                                                                                <div className=' flex items-center gap-2'>
                                                                                                        <p className='font-bold'>Github-Link:-</p>
                                                                                                        <a href="https://github.com/sanjuverma373/swiperslider.git" target='_blank'>https://github.com/sanjuverma373/swiperslider.git</a>
                                                                                                </div>
                                                                                                <div className=' flex items-center gap-2 pt-2'>
                                                                                                        <p className='font-bold'>Vercel-Link:-</p>
                                                                                                        <a href="https://swiperslider-zeta.vercel.app/" target='_blank'>https://swiperslider-zeta.vercel.app/</a>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>                                                                
                                                                </div> 
                                                }~

                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Page

