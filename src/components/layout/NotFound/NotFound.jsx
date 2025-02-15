import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container h={'90vh'}>
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading my={'8'} textAlign={'center'}>
          Page Not Found
        </Heading>
        <Link to={'/'}>
          <Button w={'full'} variant={'ghost'} colorScheme={'yellow'}>
            Go To Home
          </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
