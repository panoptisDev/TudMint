import { React, useState } from 'react'
import Ellipse from "../assets/image/ellipse.png"
import Card from "../assets/image/card.gif"
import Card2 from "../assets/image/card2.gif"
import { ReactComponent as Grid } from "../assets/grid.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Line } from "../assets/line.svg";
import { ReactComponent as Line2 } from "../assets/line2.svg";

const Hero = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
    };
    const decrease = () => {
        setCounter(count => count - 1);
    };

    return (
        <div className="relative w-full h-full overflow-hidden lg:h-screen bg-[#0b0819]">
            <div className="absolute sm:inset-0 sm:block" aria-hidden="true">
                <div className='relative -ml-[500px] sm:ml-0 sm:fixed z-10 xl:w-screen xl:h-screen rotate-90 sm:rotate-0'>
                    <Grid />
                </div>
                <svg className='sm:fixed -mt-[940px] sm:mt-0 sm:ml-20 md:ml-40 lg:ml-0 z-10 w-[500px] h-[300px] lg:w-screen lg:h-screen' width="1664" height="1000" viewBox="0 0 1664 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_14_166)">
                        <ellipse cx="831.797" cy="499.57" rx="598.373" ry="118.346" transform="rotate(-45 831.797 499.57)" fill="#292539" />
                    </g>
                    <defs>
                        <filter id="filter0_f_14_166" x="0.405396" y="-331.821" width="1662.78" height="1662.78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_14_166" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="relative pt-6 md:pt-5 3xl:pt-8 pb-6 sm:pb-24 z-20">
                <nav className="relative mx-auto flex max-w-[376px] md:max-w-[1200px] items-center justify-between px-5">
                    <div className="flex flex-1 items-center">
                        <div className="flex items-center justify-between md:w-auto">
                            <Logo />
                            <h1 className='hidden md:flex text-3xl font-semibold sm:text-[22px] font-gilroy text-white tracking-wider -ml-20'>TudMint</h1>
                        </div>
                    </div>
                    <div className="flex">
                        <button
                            href="/"
                            className="flex flex-row items-center pl-8 text-white cursor-pointer bg-[#110e25] border-2 border-[#211e2d] w-[205px] h-[58px] text-[16px] font-gilroy font-medium tracking-wider hover:bg-[#15112a] hover:text-white rounded-md"
                        >
                            Connect Wallet
                            <img className='flex w-7 h-7'
                                src={Ellipse}
                                alt="/" />
                        </button>
                    </div>
                </nav>
                <main className="mt-16 lg:mt-24 3xl:mt-36 z-20">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8 max-w-[360px] lg:max-w-none m-auto pl-3 md:pl-0">
                            <div className="px-1 md:pl-5 lg:pl-6 xl:px-6 md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                                <div>
                                    <h1 className="mt-[380px] lg:mt-0 text-white text-5xl lg:text-[74px] font-semibold font-gilroyMedium tracking-wider lg:leading-[74px]">
                                        Exclusive nft <br /> <span className='bg-gradient-to-r from-[#B1A6F5] via-[#6252E2] to-[#3DB7CF] bg-clip-text text-transparent'>Collection</span> <br /> Тud Mint
                                    </h1>
                                    <p className="mt-6 text-base text-[#696969] font-gilroy lg:text-lg font-bold max-w-[320px] lg:max-w-[470px]">
                                        TUD is an exclusive NFT collection of 10,000 unique tokens. TUD is a combination of business, street fashion and creative impulses, you can see yourself in it!
                                    </p>
                                    <div className="mt-7 w-full sm:max-w-lg lg:ml-0">
                                        <div className='flex flex-wrap gap-5 lg:gap-10'>
                                            <div className='flex flex-row gap-2.5 justify-center items-center'>
                                                <span className='text-white flex flex-row items-center justify-center w-[200px] lg:w-[102px] text-center h-[50px] lg:h-[50px] text-lg font-gilroyMedium bg-[#110e25] rounded border-2 border-[#211e2d]'>{counter}</span>
                                                <button className='text-white flex flex-row items-center justify-center w-[50px] h-[50px] bg-[#110e25] rounded border-2 border-[#211e2d] hover:bg-[#15112a] hover:text-white' onClick={increase}>
                                                    <svg className='w-5 h-5' clip-rule="evenodd" fill-rule="evenodd" fill='#ffffff' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" fill-rule="nonzero" /></svg>
                                                </button>
                                                <button className='text-white flex flex-row items-center justify-center w-[50px] h-[50px] bg-[#110e25] rounded border-2 border-[#211e2d] hover:bg-[#15112a] hover:text-white' onClick={decrease}>
                                                    <svg className='w-5 h-5' clip-rule="evenodd" fill-rule="evenodd" fill='#ffffff' stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 11.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" /></svg>
                                                </button>
                                            </div>
                                            <button className='text-white flex flex-row items-center justify-center cursor-pointer bg-[#6252e2] border-none w-[320px] lg:w-[190px] h-[58px] lg:h-[58px] text-[17px] font-gilroy font-medium tracking-wide hover:text-white hover:bg-gradient-to-tr from-white via-[#6252e2] to-[#6252e2]'>
                                                Connect Wallet
                                            </button>
                                        </div>
                                    </div>
                                    <div className='pt-16 flex flex-row space-x-8 lg:space-x-16'>
                                        <div>
                                            <p className='text-lg text-[#969696] font-gilroy font-bold tracking-wider'>
                                                Price
                                            </p>
                                            <p className='mt-1 lg:mt-3 bg-gradient-to-r from-[#B1A6F5] via-[#6252E2] to-[#3DB7CF] bg-clip-text text-transparent font-gilroyMedium text-[35px] font-black uppercase tracking-wide'>
                                                0.23 eth
                                            </p>
                                        </div>
                                        <div className='pb-10 lg:pb-0'>
                                            <p className='text-lg text-[#969696] font-gilroy font-bold tracking-wider'>
                                                Transaction
                                            </p>
                                            <p className='mt-1 lg:mt-3 text-white font-gilroy text-[34px] font-semibold uppercase tracking-wide'>
                                                30 max
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-0 lg:mt-[78px] lg:col-span-6 px-5 lg:px-6">
                                <div>
                                    <img
                                        className='absolute w-[158px] h-[192px] xl:w-[260px] xl:h-[320px] rounded-[15px] -rotate-[10deg] mt-7 xl:mt-0'
                                        src={Card}
                                        alt="/"
                                    />
                                </div>
                                <div>
                                    <img
                                        className='absolute w-[158px] h-[192px] xl:w-[260px] xl:h-[320px] rounded-[15px] rotate-[10deg] ml-[142px] xl:ml-[240px] xl:-mt-[44px]'
                                        src={Card2}
                                        alt="/"
                                    />
                                </div>
                                <div className='absolute pt-[256px] lg:pt-[403px] max-w-[560px] m-auto px-0 md:px-4 lg:px-0 -ml-5'>
                                    <p className='pl-1 text-[16px] text-[#969696] font-gilroy lg:text-lg font-bold tracking-wider'>NFT Minted</p>
                                    <div className='-mt-[26px] block xl:hidden'>
                                        <Line />
                                    </div>
                                    <div className='-mt-4 hidden xl:block'>
                                        <Line2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Hero