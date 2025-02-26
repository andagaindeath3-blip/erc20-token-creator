'use client'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
export default function Header() {

    const { address, isConnected } = useAccount()
    return (
        <header className="w-full flex justify-center items-center p-4 absolute top-0 mx-auto">
            {isConnected && <div className="w-full flex justify-center items-center   max-w-7xl">
                <ConnectButton />
            </div>}

        </header>
    );
}