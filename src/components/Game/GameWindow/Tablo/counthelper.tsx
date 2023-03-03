import { Icons } from "./icons"



export const counterUpdate = (bombs: number): string[] => {
    const bombsNumbers: string[] = []
    if (bombs > 99 && bombs < 10000) {
        bombsNumbers.push(...bombs.toString().split(''))
    } else if (bombs <= 99 && bombs > 9) {
        bombsNumbers.push(...bombs.toString().split(''))
        bombsNumbers.unshift('0')
    } else if (bombs <= 9 && bombs > 0) {

        bombsNumbers.push(...['0', '0', bombs.toString()])
    } else if (bombs <= 0){
        bombsNumbers.push(...['0', '0', '0'])
    }
    const res: string[] = [];

    if (bombsNumbers) {
        bombsNumbers.forEach(number => {
            res.push(Icons[+number])
        })
    }

    return res
}