import { ElementType } from "react";
import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";

import { ActiveLink } from "../activeLInk";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
     <ChakraLink display="flex" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
    </ActiveLink>
   
  );
}
