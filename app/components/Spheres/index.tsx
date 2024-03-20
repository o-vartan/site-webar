
import Art from '../Icons/svg/Art'
import Education from '../Icons/svg/Education'
import Entertainment from '../Icons/svg/Entertainment'
import Marketing from '../Icons/svg/Marketing'
import Monument from '../Icons/svg/Monument'
import Museum from '../Icons/svg/Museum'
import Other from '../Icons/svg/Other'
import Typography from '../Icons/svg/Typography'
import styles from './spheres.module.scss'





const Spheres = () => {

    const data =[
        {
            svg: <Marketing/>,
            title: 'Реклама и маркетинг',
            description: '"Оживающие" биг-борды, мерч-продукция как носитель живой рекламы, "живая" упаковка с видео-рецептами или развлекательным контентом, этикетки, анимированный логотип, дополненная реальность на листовках, визитках, буклетах и иной полиграфии, маркет-квесты'
        },
        {
            svg: <Museum/>,
            title: 'Выставки, музеи, парки, галереи',
            description: 'Афиши мероприятий с изменяемым контентом, виртуальные гиды, видео и анимация для статических экспозиций, озвученный перевод текстовых стендов на разные языки по QR-коду,  "оживающие" картины и стенды, виртуальные экспонаты и квест-игры'
        },
        {
            svg: <Education/>,
            title: 'Социальная и образовательная сферы',
            description: 'Тематические и агитационные стенды с элементами дополненной реальности: видео-сюжетами, слайд-шоу и озвучкой, с возможностью замены и коррекции контента, учебный и методический материал с "оживающими" иллюстрациями, видео-инструкции по технике безопасности и иным мероприятиям '
        },
        {
            svg: <Monument/>,
            title: 'Памятники и мемориальные комплексы',
            description: '"Оживающие" фото с повествованием о своей истории или неком событии, видео-обзор исторических хроник через экран смартфона, памятные таблички с ссылками на фото-архив или сайт с дополнительной информацией об объекте'
        },
        {
            svg: <Typography/>,
            title: 'Авторам книг, издательствам и типографиям',
            description: '"Живые" картинки в книгах, "оживающие" фото в газетах, 3д-модели в журналах, анимированные открытки, конверты, фото-книги с видео-роликами, меню с видео-обзорами блюд, "оживающие пазлы"'
        },
        {
            svg: <Entertainment/>,
            title: 'Развлекательная сфера',
            description: 'Игрушки с дополненной реальностью, видео-инструкции и обзоры, оживающие загадки и головоломки для квест-игр, виртуальные персонажи и игровые 3д-объекты'
        },
        {
            svg: <Art/>,
            title: 'Художественно-оформительные работы',
            description: '"Живые" муралы для государственных организаций и жкх, "живые" фото-обои и "оживающая" роспись стен'
        },
        {
            svg: <Other/>,
            title: 'Разработка сайтов любой сложности, 2д и 3д-анимация',
            description: 'Создание лендингов и многосраничных сайтов с нуля, разработка дизайна, оптимизация и техподдержка, проектирование двухмерных и трехмерных изображений'
        }
    ]



  return (
    <div className={styles.container}>
            <h2>Наши направления деятельности</h2>
            <div className={styles.blocksWrapper}>
                {data.map((el, index) => (
                    <div className={styles.block} key={index}>
                        <div>{el.svg}</div>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Spheres