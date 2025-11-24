import { useState } from 'react';
import { useAccount, useWriteContract } from 'wagmi';
import { contract } from '../utils/contract';

export function DeployForm() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [supply, setSupply] = useState(1000000);
  const [decimals, setDecimals] = useState(18);

  const handleDeploy = async () => {
    writeContract({
      address: contract.address,
      abi: contract.abi,
      functionName: 'createToken',
      args: [name, symbol, supply, decimals],
    });
  };

  return (
    <form className="mt-4 space-y-4">
      <input type="text" placeholder="Token Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
      <input type="number" placeholder="Initial Supply" value={supply} onChange={(e) => setSupply(e.target.value)} />
      <input type="number" placeholder="Decimals" value={decimals} onChange={(e) => setDecimals(e.target.value)} />
      <button type="button" onClick={handleDeploy}>Deploy Token</button>
    </form>
  );
}