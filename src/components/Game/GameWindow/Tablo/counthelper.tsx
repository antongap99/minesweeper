import { Icons } from "./icons"



export const timeUpdate = (bombs: number): string[] => {
    const timesNumbers: string[] = []
    if (bombs > 999 && bombs < 10000) {
        timesNumbers.push(...['9', '9', '9'])
    } else if (bombs <= 999 && bombs > 99){
        timesNumbers.push(...bombs.toString().split(''))
    } else if (bombs <= 99 && bombs >= 10) {
        timesNumbers.push(...['0', ...bombs.toString().split('')])
    } else if (bombs <= 9) {
        timesNumbers.push(...['0', '0', bombs.toString()])
    }
    const res: string[] = [];

    if (timesNumbers) {
        timesNumbers.forEach(number => {
            res.push(Icons[+number])
        })
    }

    return res
}

export const counterUpdate = (bombs: number): string[] => {
    const bombsNumbers: string[] = []
    if (bombs > 99 && bombs < 10000) {
        bombsNumbers.push(...bombs.toString().split(''))
    } else if (bombs <= 99 && bombs > 9) {
        bombsNumbers.push(...bombs.toString().split(''))
        bombsNumbers.unshift('0')
    } else if (bombs <= 9 && bombs > 0) {

        bombsNumbers.push(...['0', '0', bombs.toString()])
    } else if (bombs <= 0) {
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