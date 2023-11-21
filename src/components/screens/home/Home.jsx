import styles from './Home.module.css'

function Header() {
  return (
    <header className='relative flex items-center'>
      <IconPurple />
      <select className='ml-5' name="" id="">
        <option value="">РУС</option>
        <option value="">САХ</option>
        <option value="">ENG</option>
      </select>
      <div className='flex absolute right-0 items-center'>
        <p className='mx-10'>Главная</p>
        <p className='mx-10'>Про сайт</p>
        <p className='mx-10'>Свяжитесь с нами</p>

        <button className={styles.button1}>Войти</button>
      </div>
    </header>
  )
}

function Main() {
  return (
    <main>
      <div className='flex justify-end'>
        <img className='absolute -top-8 hover:animate-spin' src="/mascot.svg" alt="" />
      </div>

      <div className='container md:container md:mx-auto'>
        <div className='center'>
          <p className='text-purple mb-3'><b>ПРИВЕТСТВУЕМ ВАС!</b></p>
          <h1 className={styles.bold}>Платформа для</h1>
          <h1 className={`${styles.bold} ${styles.purple}`}>проведения<br/>конкурсов МПИТ  </h1>
          <p className='my-5'>У нас собраны все самые необходимые функции для развития сообщества МПИТ.</p>
          <button className={styles.button2}>Узнать поподробнее</button>
        </div>
      </div>
      <div className='relative h-16' />
      <div className='h-80 relative bg-gray top-96'>

      </div>

    </main>
  )
}

function IconPurple() {
  return (
    <img className={styles.item} src="/icon.purple.svg" alt="" />
  )
}

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}