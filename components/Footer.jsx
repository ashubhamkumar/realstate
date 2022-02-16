import { Box } from "@chakra-ui/layout";
const years = new Date().getFullYear();
const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100">
    © {years} Real Estate, Inc.
  </Box>
);

export default Footer;
