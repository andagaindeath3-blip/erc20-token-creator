import { erc20Abi, erc20ByteCode } from '@/lib/erc20';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useDeployContract } from 'wagmi'

export default function useDeploy() {
    const { deployContractAsync, isPending, isSuccess, error, isError } = useDeployContract()

    const deploy = async (name, symbol, supply, decimals) => {
        await deployContractAsync({
            abi: erc20Abi,
            args: [name, symbol, supply, decimals],
            bytecode: erc20ByteCode,

        })
    }

    useEffect(() => {
        if (isPending) {
            toast.dismiss();
            toast.loading("Deploying...", {
                description: "Confirm Transaction in your wallet"
            });
        }
        if (isSuccess) {
            toast.dismiss();
            toast.success("Token Created Successfully");
        }
        if (isError) {
            toast.dismiss()
            toast.error(error.message.split("\n")[0]);
        }
    }, [isPending, isSuccess, isError, error])


    return { deploy, isPending };
}