"use client";
import React from "react";

import * as Style from "./styles";
import { useState } from "react";

import * as Popover from "@radix-ui/react-popover";

import { BiHomeAlt, BiUser } from "react-icons/bi";

export  function MobileMenu() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handlePopoverToggle = () => {
    setIsPopoverOpen((prevIsPopoverOpen) => !prevIsPopoverOpen);
  };

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Style.IconButton
          aria-label="Update dimensions"
          onClick={handlePopoverToggle}
        >
          {isPopoverOpen ? <BiUser /> : < BiHomeAlt />}
        </Style.IconButton>
      </Popover.Trigger>

      <Popover.Portal>
        <Style.PopoverContent sideOffset={5}>
          <Style.Flex css={{ flexDirection: "column", gap: 10 }}>
            <Style.Text css={{ marginBottom: 10 }}>Dimensions</Style.Text>
            <Style.Fieldset>
              <Style.Label htmlFor="width">Width</Style.Label>
              <Style.Input id="width" defaultValue="100%" />
            </Style.Fieldset>
            <Style.Fieldset>
              <Style.Label htmlFor="maxWidth">Max. width</Style.Label>
              <Style.Input id="maxWidth" defaultValue="300px" />
            </Style.Fieldset>
            <Style.Fieldset>
              <Style.Label htmlFor="height">Height</Style.Label>
              <Style.Input id="height" defaultValue="25px" />
            </Style.Fieldset>
            <Style.Fieldset>
              <Style.Label htmlFor="maxHeight">Max. height</Style.Label>
              <Style.Input id="maxHeight" defaultValue="none" />
            </Style.Fieldset>
          </Style.Flex>
          <Style.PopoverClose aria-label="Close">
            <Cross2Icon />
          </Style.PopoverClose>
          <Style.PopoverArrow />
        </Style.PopoverContent>
      </Popover.Portal>
    </Popover.Root>
  );
}
