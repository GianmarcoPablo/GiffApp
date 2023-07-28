import { Gif } from '../../src/components/Gif'
import {render,screen} from '@testing-library/react'

describe('Pruebas en GifItem', () => { 

    const title = 'Un titulo'
    const url = 'https://localhost/algo.jpg'

    test('debe de hacer match con el snapshot', () => { 
        const {container} = render(<Gif
            title={title}
            url={url}
        />)
        expect(container).toMatchSnapshot()
    })
    test('debe de mostrar la imagen on el url y alt indicado', () => { 
        render(<Gif title={title} url={url}/>)
        const {src,alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })
    test("debe de mostrar el titulo en el componente",()=>{ 
        render(<Gif title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })
})