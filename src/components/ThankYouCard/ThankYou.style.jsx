import styled from "styled-components";

export const CardContainerThanks = styled.div`
    max-width: 420px;
    min-height: 420px;
    border-radius: 3rem;
    background-color: #202731;
    padding: 3.5rem 3rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: 2rem;

    .selected-info {
        font-size: 1.7rem;
        padding: 0.8rem 1.4rem;
        border-radius: 1.8rem;
        background-color: #222f3d;
        color: #fc7614;
    }

    .box-info {
        width: 100%;
        text-align: center;
    }

    .box-info h2 {
        color: white;
        padding-bottom: 1.5rem;
    }

    .box-info p {
        color: hsl(217, 12%, 63%);
        font-size: 15px;
        line-height: 2.8rem;
    }

`;