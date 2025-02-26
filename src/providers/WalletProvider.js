'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    arbitrum,
    arbitrumSepolia,
    avalanche,
    avalancheFuji,
    base,
    baseSepolia,
    bsc,
    bscTestnet,
    canto,
    cronos,
    cronosTestnet,
    fantom,
    flare,
    flareTestnet,
    mainnet,
    moonbeam,
    optimism,
    optimismSepolia,
    polygon,
    polygonMumbai,
    polygonZkEvm,
    sepolia,
    sonic,
    sonicTestnet,
} from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';
export const config = getDefaultConfig({
    appName: 'ERC20 Token Creator',
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    chains: [
        mainnet,
        sepolia,
        arbitrum,
        arbitrumSepolia,
        base,
        baseSepolia,
        polygon,
        polygonMumbai,
        polygonZkEvm,
        bsc,
        bscTestnet,
        avalanche,
        avalancheFuji,
        cronos,
        cronosTestnet,
        optimism,
        optimismSepolia,
        sonic,
        sonicTestnet,
        flare,
        flareTestnet,
        canto,
    ],
    ssr: true,
});



const queryClient = new QueryClient();

export function RainbowProvider({ children }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
