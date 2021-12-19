import Image from "next/image"
import classNames from "classnames"
import { Button } from "@components/ui/common"
import {
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  InputRightElement,
  InputGroup
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/hooks"
import { useState } from "react"
import { FaDollarSign } from "react-icons/fa"

export default function Donation({ className, ethPrice, avaxPrice, bnbPrice }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const IMAGES = ["/small-eth.webp", "/small-avax.webp", "/small-binance-coin.webp"]
  const NAMES = ["ETH", "AVAX", "BNB"]
  const [selected, setSelected] = useState("0")

  return (
    <div className="bg-gray-50 bg-opacity-20 dark:bg-gray-50 dark:bg-opacity-70">
      <div className="flex justify-center p-8">
        <Button className="flex flex-col-2 items-center" onClick={onOpen}>
          Donate
        </Button>
        <ChakraProvider>
          <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={true} className="font-sans">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader className="mx-auto font-sans">Donation</ModalHeader>
              <ModalCloseButton />
              <ModalBody className="">
                <InputGroup size="md">
                  <Input className="font-sans" placeholder="Enter amount" size="lg" color="" />
                  <InputRightElement width="4.5rem">
                    <Menu>
                      <div className="mt-3 mr-2 font-sans">
                        <MenuButton
                          borderRadius="md"
                          borderWidth="1px"
                          _hover={{ bg: "gray.400" }}
                          _expanded={{ bg: "blue.400" }}
                          _focus={{ boxShadow: "outline" }}
                        >
                          <div className="flex flex-col-2">
                            <Image
                              layout="fixed"
                              height="35rem"
                              width="35rem"
                              src={IMAGES[selected]}
                              alt=""
                            />
                            <p>{NAMES[selected]}</p>
                          </div>
                        </MenuButton>
                      </div>
                      <MenuList >
                        <MenuItem onClick={(e) => setSelected(0)}>
                          <Image layout="fixed" height="35rem" width="35rem" src="/small-eth.webp" alt="" />
                          <p className="px-4 font-sans">{NAMES[0]}</p>
                        </MenuItem>
                        <MenuItem onClick={(e) => setSelected(1)}>
                          <Image layout="fixed" height="35rem" width="35rem" src="/small-avax.webp" alt="" />
                          <p className="px-4 font-sans">{NAMES[1]}</p>
                        </MenuItem>
                        <MenuItem onClick={(e) => setSelected(2)}>
                          <Image
                            layout="fixed"
                            height="35rem"
                            width="35rem"
                            src="/small-binance-coin.webp"
                            alt=""
                          />
                          <p className="px-4 font-sans">{NAMES[2]}</p>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </InputRightElement>
                </InputGroup>
                <Button hoverable={false} className="mx-32 ">
                  <p>Donate</p>
                </Button>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </ChakraProvider>
      </div>
      <div className={classNames("grid lg:grid-cols-3 sm:grid-cols-1 lg:space-x-4 mt-2", className)}>
        {tokenPriceInfo("/small-eth.webp", ethPrice, "ETH")}
        {tokenPriceInfo("/small-avax.webp", avaxPrice, "AVAX")}
        {tokenPriceInfo("/small-binance-coin.webp", bnbPrice, "BNB")}
      </div>
    </div>
  )
}

const tokenPriceInfo = (tokenLogoUrl, tokenPrice, tokenName) => {
  return (
    <div className="flex flex-col border drop-shadow rounded-md items-center mb-2 bg-white dark:bg-gray-600 dark:bg-opacity-50 ">
      <div className="flex space-x-1 text-2xl font-bold justify-center">
        <Image layout="fixed" height="50em" width="50em" src={tokenLogoUrl} alt={tokenName} />
        <p className="flex flex-col-2 items-center">
          = {tokenPrice}$
        </p>
      </div>
      <p className="italic sm: text-center center">Current {tokenName} Price</p>
    </div>
  )
}
