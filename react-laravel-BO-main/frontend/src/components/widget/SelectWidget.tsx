interface Props {
    title: string,
    options: any[],
    onEmit: (value: string) => void,
}

export default function SelectWidget({ title, options, onEmit }: Props) {

    return (
        <div>
            <h3>{ title }</h3>
            <select id="cars" name="cars" onChange={event => onEmit(event.target.value)}>
                {
                    options && (
                        <>
                            {
                                options.map((option) => (
                                    <option value={option.id}>{ option.name }</option>
                                ))
                            }
                        </>
                    )
                }
            </select>
        </div>
    )
}