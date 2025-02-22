import ProjectCard from '@/components/ProjectCard'

import WacaImgSmall from '../../public/waca-small.jpg'
import WacaImg from '@/assets/images/waca.webp'
import PingoImgSmall from '../../public/pingo-small.jpg'
import PingoImg from '@/assets/images/pingo.webp'
import KolImgSmall from '../../public/kol-small.jpg'
import KolImg from '@/assets/images/kol.webp'
import KaiImgSmall from '../../public/kai-small.jpg'
import KaiImg from '@/assets/images/kai.webp'
import MandalaImgSmall from '../../public/mandala-small.jpg'
import MandalaImg from '@/assets/images/mandala.webp'

const PROJECT_LIST = [
  {
    name: 'waca',
    path: '/project/waca',
    title: 'WACA - 設計規範',
    imgSrc: WacaImg,
    imgPlaceholder: WacaImgSmall,
    imgAlt: 'WACA - 設計規範',
    desc: 'UI Design B2B  Design System'
  },
  {
    name: 'kol',
    path: '/project/kol',
    title: 'KOL Master 網紅媒合平台',
    imgSrc: KolImg,
    imgPlaceholder: KolImgSmall,
    imgAlt: 'KOL Master 網紅媒合平台',
    desc: 'UI/UX Design B2B Product Design '
  },
  {
    name: 'pingo',
    path: '/project/pingo',
    title: 'Pingo 美食搜集神器',
    imgSrc: PingoImg,
    imgPlaceholder: PingoImgSmall,
    imgAlt: 'Pingo 美食搜集神器',
    desc: 'APP Redesign'
  },
  {
    name: 'kai',
    path: '/project/kai',
    title: 'KAI’S Gallery 凱奧畫廊',
    imgSrc: KaiImg,
    imgPlaceholder: KaiImgSmall,
    imgAlt: 'KAI’S Gallery 凱奧畫廊',
    desc: 'Online Store Web Design'
  },
  {
    name: 'mandala',
    path: '/project/mandala',
    title: 'Mandala 新睿生醫',
    imgSrc: MandalaImg,
    imgPlaceholder: MandalaImgSmall,
    imgAlt: 'Mandala 新睿生醫',
    desc: 'Branding Web Design '
  }
]

export default function ProjectList() {
  return (
    <ul className='project-list'>
      {PROJECT_LIST.map(project => (
        <ProjectCard
          key={project.name}
          {...project}
        />
      ))}
    </ul>
  )
}
