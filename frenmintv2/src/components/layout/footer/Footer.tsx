import { Button } from "@/components/ui/button";
import { FaKey, FaTractor } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { MdHowToVote } from "react-icons/md";
import { RiGovernmentFill } from "react-icons/ri";
function Footer() {
  return (
    <div className="border border-soft bg-cardBg rounded-md  text-text h-[50%] p-2">
      <div className="grid grid-cols-5  place-items-center">
        <div className="">
          <Button className="">
            <span className="grid grid-rows-1 w-full ">
              <div className="ms-3">
                <IoIosStats className="text-text text-[20px] ms-1" />
                <h3 className="me-2">Stats</h3>
              </div>
              <div></div>
            </span>
          </Button>
        </div>
        <div className="w-full  p-1">
          <Button className="">
            <span className="grid grid-rows-1 w-full ">
              <div className="ms-[3px]">
                <FaTractor className="text-text text-[20px] ms-2" />
                <h3>Farms</h3>
              </div>
              <div></div>
            </span>
          </Button>
        </div>
        <div>
          <Button className="">
            <span className="grid grid-rows-1 w-full ">
              <div className="ms-3">
                <MdHowToVote className="text-text text-[20px] ms-1" />
                <h3>Vote</h3>
              </div>
              <div></div>
            </span>
          </Button>
        </div>
        <div>
          <Button className="">
            <span className="grid grid-rows-1 w-full ">
              <div className="ms-3">
                <RiGovernmentFill className="text-text text-[20px] ms-7" />
                <h3>Governance</h3>
              </div>
              <div></div>
            </span>
          </Button>
        </div>
        <div className="border border-soft bg-accent rounded-md">
          <Button className="">
            <span className="grid grid-rows-1 w-full ">
              <div className="ms-3">
                <FaKey className="text-text text-[16px] ms-4" />
                <h3 className="mt-0.5">FT Keys</h3>
              </div>
              <div></div>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
