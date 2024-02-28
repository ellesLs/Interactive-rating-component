import styled from "styled-components"

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;

    form {
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
    }

    .box-star {
        width: 100%;
    }

    .box-star div {
        width: 50px;
        height: 50px;
        background-color: #222f3d;
        border: none;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .box-star div .star {
        font-size: 2.5rem;
        color: #ff750f;
    }

    .box-info {
        width: 100%;
        text-align: left;
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
    
    .box-rating-btn {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* align-items: center; */
        /* gap: 1rem; */
    }

    .box-rating-btn button {
        width: 50px;
        height: 50px;
        font-size: 1.7rem;
        background-color: #222f3d;
        color: hsl(217, 12%, 63%);
        border: none;
        border-radius: 50%;
        line-height: 0;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .box-rating-btn button:hover {
        background-color: #7a8899;
        color: white;
    }

    .box-rating-btn button:focus {
        background-color: #ff750f;
        color: white;
    }

    .btn-submit {
        width: 100%;
        letter-spacing: 0.2em;
        padding-block: 1.4rem;
        text-align: center;
        background-color: #ff750f;
        color: white;
        border: none;
        border-radius: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
    }

    .btn-submit:hover {
        background-color: white;
        color: #ff750f;
        
    }


    @media screen and (max-width: 375px) {
        .box-rating-btn button {
            width: 45px;
            height: 45px;
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 320px) {
        .box-rating-btn button {
            width: 40px;
            height: 40px;
        }
    }
`;