import "./Chart.css"
import ChartBar from "./ChartBar";
function chart(props){
    const dataPointValues=props.dataPoints.map(array=>array.value)
    const Max=Math.max(...dataPointValues);
    return(
        <div className="chart">
                {props.dataPoints.map(array=> 
                <ChartBar 
                value={array.value}
                key={array.label}
                label={array.label}
                maxValue={Max}         
                />
                )}
        </div>
    )
}
export default chart;