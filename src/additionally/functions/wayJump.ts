export const wayJump = (array: string[][], now: { y: number, x: number }, jump: number): { y: number, x: number, guides: string } => {

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
        let after: { y: number, x: number, guides: string } = {y: now.y, x: now.x, guides: guides[rand]}
        switch (guides[rand]) {
            case 'up':
                for (let i = 0; i < jump; i++) {
                    if ((after.y - 1) != 0) {
                        after = {y: after.y - 1, x: after.x, guides: guides[rand]}
                    } else {
                        after = {y: array.length - 1, x: after.x, guides: guides[rand]}
                    }

                }
                return after

            case 'right':

                for (let i = 0; i < jump; i++) {
                    if ((after.x + 1) !== array.length)
                        after = {y: after.y, x: after.x + 1, guides: guides[rand]}
                    else {
                        after = {y: after.y, x: 1, guides: guides[rand]}
                    }


                }

                return after


            case  'down':

                for (let i = 0; i < jump; i++) {
                    if ((after.y + 1) !== array.length) {
                        after = {y: after.y + 1, x: after.x, guides: guides[rand]}

                    } else {
                        after = {y: 1, x: after.x, guides: guides[rand]}
                    }
                }

                return after

            case 'left':
                for (let i = 0; i < jump; i++) {
                    if ((after.x - 1) !== 0) {
                        after = {y: after.y, x: after.x - 1, guides: guides[rand]}
                    } else {
                        after = {y: after.y, x: array[0].length - 1, guides: guides[rand]}
                    }
                }
                return after

        }
    }

}


