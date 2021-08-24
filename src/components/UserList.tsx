import { Avatar, Tag, TagLabel, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";

export default function UserList() {
  const content = useSelector((state: AppState) => state.users.users);

  return (
    <div>
      <VStack spacing={2} align="stretch" w="max-content">
        {content.map((it, key) => (
          <Tag key={key} size="lg" colorScheme="red" borderRadius="full">
            <Avatar
              src="https://bit.ly/sage-adebayo"
              size="xs"
              name={it.name}
              ml={-1}
              mr={2}
            />
            <TagLabel>{it.name}</TagLabel>
          </Tag>
        ))}
      </VStack>
    </div>
  );
}
