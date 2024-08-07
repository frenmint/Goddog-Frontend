import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import axios from "axios";
import { Heading, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import "../../../../../App.css";
import useUserTokens from "../../../../../hooks/holdings/useUserTokens";
import useViewport from "../../../../../hooks/view-port/useViewport";
import DialogHeroCards from "../../dialog-hero-cards";
import DialogSwitch from "../../dialog-switch";
import useUserKeyHoldings from "../../../../../hooks/holdings/useUserKeyHoldings";
import { sliceContract } from "../../../../../formatters/contract-slicer";
import { IoMdCube } from "react-icons/io";

import useTokenPrice from "@/hooks/price/useTokenPrice";
import { getUSDValue } from "@/formatters/calculate-usd-value";
import { FaPowerOff } from "react-icons/fa";
import { MetaMaskAvatar } from "react-metamask-avatar";

// 0xec72bc65000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000b35f5e09ae15dfb320d99f1cb599ba1510285727000000000000000000000000b35f5e09ae15dfb320d99f1cb599ba15102857270000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000eb887247da1d81375e789886afee3502ae898b8700000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000003c03ce9ca925030000000000000000000000000000000000000000000000000037db53615fb42d0000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000027930000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000374dbf8b7fb4ec
function WalletDialog(props: any) {
  const { address, logout } = props;
  const tokens: any = useUserTokens(address);
  const viewport = useViewport();
  const keys = useUserKeyHoldings(address);
  const [side, setSide] = useState("end");
  const slicedAddress = sliceContract(address);
  useEffect(() => {
    if (viewport.width <= 530) {
      setSide("bottom");
    } else {
      setSide("right");
    }
  }, [viewport]);

  let total = 0;

  const prices = useTokenPrice();
  if (tokens) {
    Object.keys(tokens).map((key: any) => {
      const token: any = tokens[key];
      console.log(token);
      let USD;
      switch (key) {
        case "Friend":
          USD = getUSDValue(prices?.friend, token?.balance);
          total += USD;

          break;
        case "oooOOO":
          USD = getUSDValue(prices?.goddog, token?.balance);
          total += USD;

          break;
        case "ETH":
          USD = getUSDValue(prices?.eth, token?.balance);
          total += USD;

          break;
      }
    });
  }
  // 0x452b5a5dbbf75bebee33cce791bd19e6dbcc327c5ef3a4b0e8b5e4bff369fa0d
  //basescan api key: VAAGUVZPXRQZHUITAPCE6B5VNFZPHEF44U

  //docs: https://docs.basescan.org/api-endpoints/logs the offset is how much transactions u want to retreive

  //example endpoint of getting all sudoswap pool txs https://api.basescan.org/api?module=account&action=txlist&address=0xa07ebd56b361fe79af706a2bf6d8097091225548&startblock=0&endblock=99999999999&page=1&offset=10&sort=desc&apikey=VAAGUVZPXRQZHUITAPCE6B5VNFZPHEF44U
  //what we can do is get all erc1155 pools from sudoswap sdk decode the input data and compare the pool address and see if it is a 1155 pool
  //the hash is the transaction from the basescan api response hash the input is the input data we want to decode
  //in the transaction the expectedSpotprice is the buy or sell price we must calculate dpending on if they buy a large or small amount

  return (
    <Sheet>
      <SheetTrigger className=" p-1">
        <div className="flex gap-5">
          <div className="text-text  mt-0.5">
            <img
              src="data:image/png;base64,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"
              className="size-5 border border-soft rounded-md"
            />
          </div>
          <div className="flex gap-2 mt-1 text-text text-[10px] font-bold ">
            <div className="">
              <MetaMaskAvatar address={props?.address} size={15} />
            </div>
            <Text className="">{slicedAddress}</Text>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent
        className={`bg-background text-text border-0 ${
          side === "bottom" ? "h-[90%]" : null
        }`}
        side={side}
      >
        <SheetHeader>
          <SheetTitle className="text-start text-[12px] flex justify-between">
            <div className="flex gap-2">
              <MetaMaskAvatar address={props?.address} size={22} />
              <Text>{slicedAddress}</Text>
            </div>
            <div className=" text-[14px] hover:text-error">
              <Text role="button" onClick={logout}>
                <FaPowerOff />
              </Text>
            </div>
          </SheetTitle>
          <SheetDescription>
            <div className="mt-2 text-start p-3">
              <Heading className="text-[25px] font-bold">
                ${total.toFixed(2) || 0}
              </Heading>
              <div className="flex gap-1 mt-2 text-[10px]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="lime"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path d="M4 9H11L7.5 4.5L4 9Z" fill="lime"></path>
                </svg>
                <Text>$50.00 (30%)</Text>
              </div>
            </div>

            <div className="">
              <DialogSwitch tokens={tokens} keys={keys} />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default WalletDialog;
