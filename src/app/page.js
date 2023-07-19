import Head from "next/head";
import Data from './dataa'

export const metadata = {
  title: 'Copiers for Sale and Rent | Office Copy Machines | Copiers Utah',
  description: 'Copiers Utah: Quality copiers for sale/rent. Pick from various office machines with advanced features & affordable prices. Contact us now! ',
}
export default function Home() {
  return (
    <Data/>
  );
}
