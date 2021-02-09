import { useContext, useState, useEffect } from 'react';
import { Progress, Bar, Percent } from './styles';
import { Context } from './../../utils/AuthContext';

export default function ProgressBarTask() {
    const { dataActivated } = useContext(Context);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const totalTasks = dataActivated ? dataActivated.tasks.length : 0;
        const totalFiltered = dataActivated ? dataActivated.tasks.length > 0 ? dataActivated.tasks.filter(item => item.checked).length : 0 : 0;
        const result = totalTasks === 0 ? 0 : (100 * totalFiltered) / totalTasks;
        setPercent(result); 
    }, [dataActivated]);

    return (
        <Progress>
            <Bar percent={percent}/>
            <Percent>{percent}%</Percent>
        </Progress>
    )
}