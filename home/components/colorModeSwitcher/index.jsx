import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, Button } from "@chakra-ui/react"
export default function ColorModeSwitcher() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
    )
}