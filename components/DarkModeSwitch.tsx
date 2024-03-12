import { useColorMode,IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode} = useColorMode()
    return (
        <IconButton
            boxSize={{ base: "30px", md: "30px", lg: "30px"}}
            aria-label="Toggle Dark Switch"
            icon={colorMode === 'dark' ? <SunIcon/> : <MoonIcon/>}
            onClick={toggleColorMode} 
            />
    )
}

export default DarkModeSwitch