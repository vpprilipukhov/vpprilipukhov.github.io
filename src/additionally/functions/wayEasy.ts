export const wayEasy = (array: string[][], now: { y: number, x: number }): { y: number, x: number, guides: string } => {

    const guides = [
        'up',
        'right',
        'down',
        'left',
        'left',
        'down',
        'right',
        'up'
    ]

    let rand
    while (true) {
        rand = Math.floor(Math.random() * guides.length);
        switch (guides[rand]) {
            case 'up':
                if ((now.y - 1) > 0) {
                    if ((array[now.y - 1][now.x]) === '1') {
                        return {y: now.y - 1, x: now.x, guides: guides[rand]}
                    }
                }


                break

            case 'right':
                if (array[0].length > now.x + 1) {
                    if ((array[now.y][now.x + 1]) === '1') {
                        return {y: now.y, x: now.x + 1, guides: guides[rand]}
                    }
                }

                break

            case  'down':
                if (array.length > now.y + 1) {
                    if ((array[now.y + 1][now.x]) === '1') {
                        return {y: now.y + 1, x: now.x, guides: guides[rand]}
                    }
                }

                break

            case 'left':

                if ((array[now.y][now.x - 1]) === '1') {
                    return {y: now.y, x: now.x - 1, guides: guides[rand]}
                }

                break

        }

    }


}


