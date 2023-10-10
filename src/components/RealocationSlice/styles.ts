import styled from "styled-components";

export const RelocationContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
`;
