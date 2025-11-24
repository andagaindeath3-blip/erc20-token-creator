export const contract = {
  address: '0xYourFactoryAddress', // Замените на deployed адрес
  abi: [
    // ABI из artifacts (скопируйте из build)
    {
      "inputs": [{"name": "name", "type": "string"}, ...],
      "name": "createToken",
      "type": "function"
    }
  ]
};