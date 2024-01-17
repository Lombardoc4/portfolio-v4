import styled from "styled-components";

export const StyledContactForm = styled.div`
    position: relative;

    margin-block: 1rem;
    padding: 1rem;

    background-color: var(--color-white);
    color: var(--color-black);

    border: 1px solid var(--color-black);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);

    max-width: 420px;
    margin: auto;

    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`

export const FormError = styled.div.attrs({
    className: 'roboto'
})`
    color: var(--color-secondary)
`