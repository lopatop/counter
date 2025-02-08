import {Button} from "./Button.tsx";
import {ChangeEvent, useState} from "react";
import styled from "styled-components";


export const Counter = () => {

    const [start, setStart] = useState(0);
    const [max, setMax] = useState(5);

    const [startCount, setStartCount] = useState(start);
    const [maxValueCount, setMaxCount] = useState(max);

    const [messageWindow, setMessageWindow] = useState(false);
    const [startError, setStartError] = useState<string | null>(null);
    const [maxError, setMaxError] = useState<string | null>(null);

    const validateValues = (newStart: number, newMax: number) => {
        let startErr = null
        let maxErr = null

        if (newStart < 0 || newStart >= newMax) {
            startErr = 'Incorrect value'
            setMessageWindow(false)
        }
        if (newMax <= 0 || newMax <= newStart) {
            maxErr = 'Incorrect value'
            setMessageWindow(false)
        }
        setStartError(startErr)
        setMaxError(maxErr)

        return !(startErr || maxErr)
    }

    const onClickCounter = () => {
        if (startCount < maxValueCount) {
            setStartCount(startCount + 1)
        }
    }

    const onClickResetCounter = () => {
        setStartCount(start)
    }

    const onChangeInputMaxValueHandler =(event:ChangeEvent<HTMLInputElement>) => {
        setMax(Number(event.target.value))
        setMaxCount(Number(event.target.value))
        setMax(value)

        if (validateValues(start, value)) {
            setMessageWindow(false)
        }
    }

    const onChangeInputStartValueHandler =(event:ChangeEvent<HTMLInputElement>) => {
        setStart(Number(event.target.value))
        setStartCount(Number(event.target.value))
        if (validateValues(value, max)) {
            setMessageWindow(false);
        }
    }

    const onClickSetHandler = ()=>{
        // setStartValueCount(start);
        // setMaxValueCount(max);
        if (validateValues(start, max)) {
            setMessageWindow(true)
        }
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