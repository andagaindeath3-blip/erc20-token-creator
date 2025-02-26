'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RocketIcon } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useState } from "react";
import { toast } from "sonner";
import useDeploy from "@/hooks/useDeploy";
export default function CreateCard() {
    const { address, isConnected } = useAccount()
    const { deploy, isPending } = useDeploy()
    const [tokenName, setTokenName] = useState("")
    const [tokenSymbol, setTokenSymbol] = useState("")
    const [tokenSupply, setTokenSupply] = useState(1000)
    const [tokenDecimals, setTokenDecimals] = useState(18)
    const [tokenAddress, setTokenAddress] = useState("");



    const handleDeploy = async () => {
        if (!isConnected) {
            toast.warning("Connect Wallet");
            return
        };
        if (!tokenName) {
            toast.warning("Enter Token Name");
            return
        }
        if (!tokenSymbol) {
            toast.warning("Enter Token Symbol");
            return
        }
        if (!tokenSupply) {
            toast.warning("Enter Token Supply");
            return
        }
        if (tokenSupply < 1) {
            toast.warning("Token Supply must be greater than 1");
            return
        }
        if (!tokenDecimals) {
            toast.warning("Enter Token Decimals");
            return
        }
        if (tokenDecimals > 18) {
            toast.warning("Token Decimals must be less than 18");
            return
        }
        if (tokenDecimals < 1) {
            toast.warning("Token Decimals must be greater than 1");
            return
        }
        try {

            const supplyToMint = tokenSupply * 10 ** tokenDecimals
            await deploy(tokenName, tokenSymbol, supplyToMint, tokenDecimals);

        } catch (err) {
            console.log(err.message);
        }
    }



    return (
        <Card className="w-full max-w-lg p-4 space-y-5">

            <CardTitle>
                <h1 className="text-lg font-bold sm:text-xl">
                    ERC20 Token Creator
                </h1>
            </CardTitle>
            <CardDescription>
                <p>
                    Simply enter the token name and symbol and click the button to create your ERC20 token.
                </p>
            </CardDescription>
            <CardContent className=' w-full p-2  grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center items-center'>
                <div className="space-y-2 w-full">
                    <label className="font-bold">
                        Name
                    </label>
                    <Input value={tokenName} onChange={(e) => setTokenName(e.target.value)} placeholder="AI Wizard" />
                </div>
                <div className="space-y-2 w-full">
                    <label className="font-bold">
                        Symbol
                    </label>
                    <Input value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} placeholder="AIWIZ" />
                </div>
                <div className="space-y-2 w-full">
                    <label className="font-bold">
                        Decimals
                    </label>
                    <Input min={1} max={18} value={tokenDecimals} onChange={(e) => setTokenDecimals(Number(e.target.value))} type="number" placeholder="18" />
                </div>
                <div className="space-y-2 w-full">
                    <label className="font-bold">
                        Supply
                    </label>
                    <Input min={1} value={tokenSupply} onChange={(e) => setTokenSupply(Number(e.target.value))} type="number" placeholder="15000000000" />
                </div>

            </CardContent>
            {!isConnected ? <ConnectButton /> : (
                <Button disabled={isPending} onClick={() => handleDeploy()}>
                    <RocketIcon />Deploy
                </Button>
            )}

        </Card>
    );
}