import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme})=> theme.text};
`;
const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`;
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme})=> theme.textSoft};
    margin-left: 5px;

`;
const Text = styled.span`
    
`;

function Comment() {
    return (
        <Container>
            <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
            <Details>
                <Name>John Doe<Date>1 day ago</Date></Name>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam dicta totam. At, autem veniam reprehenderit in eos rerum tempora possimus perferendis ex, cum assumenda a qui blanditiis non nisi doloribus explicabo et ullam. Natus laboriosam optio corporis illo laborum?
                </Text>
            </Details>
        </Container>
    )
}

export default Comment