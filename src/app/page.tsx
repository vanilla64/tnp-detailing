import Image from 'next/image'
import {PageLayout} from "@/components/PageLayout/PageLayout";
import {LayoutWrapper} from "@/components/LayoutWrapper/LayoutWrapper";

export default function Home() {
  return (
    <PageLayout>
      <LayoutWrapper>
        <div className="flex flex-col items-center">
          <h1 className="flex flex-col items-center mb-[20px]">
            <span className="text-8xl">TNP</span>
            <span className="text-4xl">Detailing</span>
          </h1>
          <h2 className="text-3xl mb-[38px]">Работаем на качество и репутацию</h2>
          <p className="text-center text-m w-[550px] mb-[10px]">
            Восстановление , преображение внешнего вида автомобиля, утраченного в ходе эксплуатации,
            защита от внешних воздействий.
          </p>

          <p className="text-center mb-[10px]">Широкий спектр услуг.</p>

          <p className="text-center w-[450px]">
            T.N.P. Detailing - сообщество специалистов, которые помогут вам осуществить задуманное!
          </p>
        </div>
      </LayoutWrapper>

      <LayoutWrapper>
        <h3>ABOUT</h3>
      </LayoutWrapper>
    </PageLayout>
  )
}
