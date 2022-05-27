import React from "react";
import { Container } from "./styles";

function SubMenuListItems({ subMenu, isOpen }) {
    return (
        <Container isOpen={isOpen}>
            {subMenu.map((item, index) => {
                return (
                    <li key={index}>
                        {item.icon ? (
                            <>
                                <img src={item.icon} alt="Icon" />
                                <a href="#">{item.title}</a>
                            </>
                        ) : (
                            <a href="#">{item.title}</a>
                        )}
                    </li>
                );
            })}
        </Container>
    );
}

export default SubMenuListItems;
