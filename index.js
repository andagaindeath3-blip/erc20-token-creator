import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { DeployForm } from '../components/DeployForm';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">ERC20 Token Creator</h1>
      <ConnectButton onConnect={() => setIsConnected(true)} />
      {isConnected && <DeployForm />}
    </div>
  );
}