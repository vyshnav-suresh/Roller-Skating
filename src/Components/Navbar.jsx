'use client'
import React from 'react'
import { Header, Menu, Group, Center, Burger, Container, rem, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image';
import { nav } from '@/utils';



const Navbar=()=>{
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = nav();
  const links=[
      {
        "link": "/about",
        "label": "Features"
      },
      {
        "link": "#1",
        "label": "Learn",
        "links": [
          {
            "link": "/docs",
            "label": "Documentation"
          },
          {
            "link": "/resources",
            "label": "Resources"
          },
          {
            "link": "/community",
            "label": "Community"
          },
          {
            "link": "/blog",
            "label": "Blog"
          }
        ]
      },
      {
        "link": "/about",
        "label": "About"
      },
      {
        "link": "/timing",
        "label": "Pricing"
      },
      {
        "link": "#2",
        "label": "Support",
        "links": [
          {
            "link": "/faq",
            "label": "FAQ"
          },
          {
            "link": "/demo",
            "label": "Book a demo"
          },
          {
            "link": "/forums",
            "label": "Forums"
          }
        ]
      }
    ]
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} className={`bg-main_dark ${classes.header}`}>
      <Container>
        <div className={classes.inner}>
          {/* <MantineLogo size={28} inverted /> */}
          <div className='flex w-max text-xl text-main_light'>
          <Image src='/img/main.png' alt='log' height={30} width={30}  />
          Ris
          </div>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            color="#fff"
          />
        </div>
      </Container>
    </Header>
  );
}
export default Navbar