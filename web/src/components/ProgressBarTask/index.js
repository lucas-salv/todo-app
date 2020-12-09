import { Progress, Bar, Percent } from './styles';

export default function ProgressBarTask() {
    return (
        <Progress>
            <Bar />
            <Percent>50%</Percent>
        </Progress>
    )
}