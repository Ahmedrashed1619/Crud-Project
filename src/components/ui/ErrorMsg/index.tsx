
interface IProps {
    msg: string
}
const ErrorMsg = ({msg}: IProps) => {
    return msg && <div className="text-red-700 font-semibold text-sm">{msg}</div>;
}

export default ErrorMsg