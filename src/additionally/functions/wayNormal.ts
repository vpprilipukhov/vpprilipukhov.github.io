export const wayNormal = (array: string[][], now: { y: number, x: number }): { y: number, x: number, guides: string } => {

    const guides = [

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

                if ((now.y - 1) != 0) {
                    return {y: now.y - 1, x: now.x, guides: guides[rand]}
                } else {
                    return {y: array.length - 1, x: now.x, guides: guides[rand]}
                }


            case 'right':

                if ((now.x + 1) !== array.length)
                    return {y: now.y, x: now.x + 1, guides: guides[rand]}
                else {
                    return {y: now.y, x: 1, guides: guides[rand]}
                }


            case  'down':
                if ((now.y + 1) !== array.length ) {
                    return {y: now.y + 1, x: now.x, guides: guides[rand]}

                } else {
                    return {y: 1, x: now.x, guides: guides[rand]}
                }
            case 'left':

                if ((now.x - 1) !== 0) {
                    return {y: now.y, x: now.x - 1, guides: guides[rand]}
                } else {
                    return {y: now.y, x: array[0].length - 1, guides: guides[rand]}
                }


        }
    }

}


