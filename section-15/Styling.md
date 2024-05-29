<h1>Shared State</h1>
- 의미 : 하나의 데이터를 여러개의 컴포넌트에서 사용해야한다. 이 때 부모의 State를 공유받아 사용한다. 
        State에 있는 데이터를 여러개의 하위 컴포넌트에서 공통적으로 사용하는 경우

<h3>Shared State 예시</h3>
<code> 
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>물이 끓습니다</p>;
    }
    return <p>물이 끓지 않습니다</p>;
}

function Calculator(props){ //부모 컴포넌트
const [temperature, setTemperature] = useState('');
const handleChange = (event) => {
setTemperature(event.target.value);
}

    return {
        <fieldset>
            <legend>섭씨 온도를 입력하세요 : </legend>
            <input value={temperature} onChange={handleChange}/>
            <BoilingVerdict celsius={parseFloat(temperature)}/>
        </fieldset>
    }

}
</code>
