import styled from 'styled-components';

export const Container = styled.div`
background-color: #e5e5e5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
height: 100vh;
`;

export const BackgroundImg = styled.div`
background: linear-gradient(to right, #fe7e5d, #7f3841);
height: 30vh;
width: 90vh;
max-width: 800px;
border-radius: 30px;

display: flex;
align-items: center;
justify-content: center;

img {
    max-width: 100%;
    max-height: 100%;
}
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;
`;

export const Title = styled.h2`
text-align: center;
font-size: 38px;
font-style: normal;
font-weight: 600;
`

export const ContainerInputs = styled.div`
display: flex;
gap: 20px;
`;

export const Input = styled.input`
border-radius: 10px;
border: 1px solid rgb(95, 97, 99);
background-color: #ffffff;
padding: 12px 20px;
outline: none;
width: 100%;
`;

export const Label = styled.label`
color:rgb(27, 27, 27);
font-size: 12px;
font-weight: 600;

span {
    color: #ef4f45;
    font-weight: bold;
}
`;

export const InputEmail = styled.div`
width: 100%;
`;

export const Button = styled.button`
border: none;
background: linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%);
font-size: 16px;
color: #ffffff;
padding: 16px 32px;
width: fit-content;
cursor: pointer;
border-radius: 20px;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}
`;

