import {Button} from "./Button.tsx";
import {ChangeEvent, useState} from "react";
import styled from "styled-components";


export const Counter = () => {

    const [start, setStart] = useState(0);
    const [max, setMax] = useState(5);

    const [startCount, setStartCount] = useState(start);
    const [maxValueCount, setMaxCount] = useState(max);



    const onClickCounter = () => {
        if (startCount < maxValueCount) {
            setStartCount(startCount + 1)
        }
    }

    const onClickResetCounter = () => {
        setStartCount(start)
    }

    return (
        <Container>
            <ContainerSettingCounter>
                <CounterSettingValue>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <label>max value:</label>
                        <input className='input' value={max} type="number" onChange={onChangeInputMaxValueHandler} />
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <label>start value:</label>
                        <input className='input' value={start} type="number" onChange={onChangeInputStartValueHandler}/>
                    </div>
                </CounterSettingValue>
                <ButtonSettingContainer>
                    <Button className='button' name='set' onClick={onClickSetHandler}/>
                </ButtonSettingContainer>

            </ContainerSettingCounter>

        <ContainerCounter>

            <CounterValue className={startCount === maxValueCount ? 'error' : 'counter'}>
                {startCount}

            </CounterValue>
            <ButtonContainer>
                <Button className='button' name="inc" onClick={onClickCounter} disabled={startCount >= maxValueCount}/>
                <Button className='button' name="reset" onClick={onClickResetCounter} disabled={startCount === start}/>
            </ButtonContainer>
        </ContainerCounter>
        </Container>
    );
};


const Container = styled.div`
display: flex;
    gap: 100px 
`

const ContainerSettingCounter = styled.div`
    width: 200px;
    height: 150px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    padding: 8px;
    
`

const CounterSettingValue = styled.div`
    width: 180px;
    height: 80px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
`

const ButtonSettingContainer = styled.div`
    width: 180px;
    height: 44px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`


const ContainerCounter = styled.div`

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