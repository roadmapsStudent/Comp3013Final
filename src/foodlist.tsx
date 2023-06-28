import foods from './fooddata';
import { useState } from 'react'

String.prototype.equalIgnoreCase = function(str)
{
    return (str != null
            && typeof str === 'string'
            && this.toUpperCase() === str.toUpperCase());
}

export const FoodList = (props:any) => {
    const [foodlist] = useState(foods);

    const checkline = (food:any) => {
        let name = food.name;
        let description = food.description;

        const replaceWithHTML = (text:string) => {
            if(props.search=="") {
                return text;
            }
            const textPart = text.split(new RegExp(props.search, 'i'));
            let startPosition=0;
            return textPart.map((part:string, index:number) => {
                if(index==0 ) {
                    startPosition +=part.length;
                    return part;
                }
                let output = text.substr(startPosition, props.search.length);
                startPosition +=part.length+1;
                if(output.equalIgnoreCase(props.search)) {
                    return <div key={index} className='inline'><div className='match'>{output}</div>{part}</div>;
                } else {
                    return part;
                }



            });
          };

        if(name.toLowerCase().match(props.search.toLowerCase())) {
            return (
                <>
                    <td>{replaceWithHTML(name)}</td>
                    <td>{replaceWithHTML(description)}</td>
                </>
            )
        }
        return (
            <></>
        )
    }


    return(
        <table>
            <tbody>
            {
                Array.from(foodlist).map((food, index) => (
                    <tr key={index}>{checkline(food)}</tr>
                ))
            }
            </tbody>
        </table>
    )
}


export default FoodList;