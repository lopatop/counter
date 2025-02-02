import {Button} from "./Button.tsx";
import {useState} from "react";
import styled from "styled-components";


export const Counter = () => {

    const minValue = 0
    const maxValue = 5

    const [count, setCount] = useState(minValue);

    const onClickCounter = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }

    }

    const onClickResetCounter = () => {
        setCount(minValue)
    }

    return (
        <Container>

            <CounterValue className={count === maxValue ? 'error' : 'counter'}>
                {count}

            </CounterValue>
            <ButtonContainer>
                <Button className='button' name="inc" onClick={onClickCounter} disabled={count >= maxValue}/>
                <Button className='button' name="reset" onClick={onClickResetCounter} disabled={count === minValue}/>
            </ButtonContainer>
        </Container>
    );
};

const Container = styled.div`

    width: 200px;
    height: 150px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    padding: 8px;
`
const CounterValue = styled.div`
    width: 180px;
    height: 80px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &.error {
        color: red;
        font-weight: bold;

`

const ButtonContainer = styled.div`

    width: 180px;
    height: 44px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;

`