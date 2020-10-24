import React from "react";
import { Container, Dropdown, Menu } from "semantic-ui-react";

const navbar = () => (
    <div>
        <Menu fixed="top" inverted>
        <Container>
            <Menu.Item as="a" header href="/">
            <span aria-label="bear" role="img" style={{ marginRight: "1em" }}>
                &#x2601;
            </span>

            Waldo Finder
            </Menu.Item>

            <Dropdown item simple text="Getting Started">
                <Dropdown.Menu>
                    <Dropdown.Item href="/budget101">CICD 101</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </Container>
        </Menu>
    </div>
);

export default navbar;
