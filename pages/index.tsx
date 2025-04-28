import { SliderPhoto } from "@/components/SliderPhoto/SliderPhoto";
import { primaryFont } from "@/fonts/fonts";
import styles from "@/components/SliderPhoto/SliderPhoto.module.css";
import imgHeader from "@/public/assets/images/photo_2025-04-27_16-48-27.jpg";
// @ts-expect-error "Image"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import { photos } from "@/data/data";
import clsx from "clsx";

export default function Home() {
  return (
    <div
      className={`${primaryFont.className} flex min-h-screen flex-col items-center overflow-hidden bg-[#6d6e4b]`}
    >
      <div className="items-left flex w-full max-w-[440px] flex-col gap-y-2 px-[35px] pt-6 pb-[430px]">
        <h1 className="relative flex w-full flex-col items-baseline justify-between gap-x-2 gap-y-3 text-left font-[Cambria] text-2xl leading-[1] font-semibold text-white">
          Коробко Олексій <br />
          Леонідович "Блек"
        </h1>
        <span className="text-sm text-white md:text-base">
          18.09.1989 - 04.12.2024
        </span>
      </div>

      <div className="flex w-full flex-col items-center bg-[#a59a86]">
        <div className="container flex flex-col items-center">
          <div className="mt-[-430px] flex w-full max-w-xl flex-col items-center">
            <div className="relative z-10 my-2 px-4">
              <Image
                src={imgHeader}
                alt="Фото Коробко Олексій"
                width={400}
                height={600}
                className=""
              />
            </div>
            <div className="mt-[-80px] w-full bg-white p-10 pt-[110px] shadow-md">
              <p className="text-center text-sm md:text-base">
                Народився Олексій 18 вересня 1989 року в місті Дніпро в
                багатодітній родині, мав три сестри та два брата.
              </p>
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center">
          {/* Шапка */}
          <div className="my-10 w-full max-w-3xl">
            <Slider
              slidesToShow={3}
              infinite={true}
              centerMode={true}
              centerPadding="0px"
              slidesToScroll={1}
              dots={false}
              className={styles.carouselSlider}
            >
              {photos.slider1 &&
                photos.slider1?.map((photo, i) => (
                  <div
                    key={i}
                    className="relative !flex max-h-[400px] min-h-[150px] flex-col items-center justify-center overflow-hidden"
                  >
                    <Image
                      fill
                      className="object-cover"
                      src={photo}
                      alt="Фото"
                    />
                  </div>
                ))}
            </Slider>
          </div>

          {/* Секции с фото и текстом */}
          <div className="w-full max-w-xl bg-white p-10 py-8 shadow-md">
            <p className="text-sm md:text-base">
              З раннього віку звик до відповідальності та допомагав батькам по
              дому.
            </p>
            <p className="mt-4 text-sm md:text-base">
              Навчався у міській школі № 79. Навчання в школі давалося Олексію
              не так легко, але він завжди намагався підтримувати порядок та
              допомагати вдома, що формувало його сильне почуття
              відповідальності та турботи про близьких.
            </p>
            <p className="mt-4 text-sm md:text-base">
              У 2003 році, разом з родиною переїхав в Крим, в село Углове,
              Бахчисарайського району, де і продовжив навчання у школі-ліцеї. У
              2008 році закінчив навчання, та почав самостійно опановувати
              навики ландшафтного дизайну. Потім разом зі своїми друзями почав
              працювати в Алуштинському акваріумі та Ялтинському крокодиляріумі.
            </p>
            <p className="mt-4 text-sm md:text-base">
              Згодом познайомився зі своєю майбутньою дружиною, а у 2014
              одружився, створивши сім'ю. Через кілька років у них народилася
              донька Ангеліна, Олексій був люблячим і дбайливим батьком, який
              завжди намагався проводити час із донькою та дарувати їй свою
              підтримку та любов. Через ситуацію в країні вирішили переїхати у
              село Теплівка на Пирятинщину.
            </p>
          </div>

          <div className="my-10 w-full max-w-3xl">
            <Slider
              slidesToShow={3}
              infinite={true}
              centerMode={true}
              centerPadding="0px"
              slidesToScroll={1}
              dots={false}
              className={styles.carouselSlider}
            >
              {photos.slider2 &&
                photos.slider2?.map((photo, i) => {
                  return (
                    <div
                      key={i}
                      className="relative !flex max-h-[400px] min-h-[150px] flex-col items-center justify-center overflow-hidden"
                    >
                      <Image
                        fill
                        className={clsx("object-cover")}
                        src={photo}
                        alt="Фото"
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>

          <div className="w-full max-w-xl bg-white p-10 py-8 shadow-md">
            <p className="text-sm md:text-base">
              Олексій був людиною рідкісної доброти, справедливості та
              відданості. Його життєвий шлях був сповнений працею, любов'ю до
              сім'ї та турботою про людей навколо. Переїхавши разом із дружиною
              до нового міста, він не розгубився перед життєвими труднощами:
              знаходив друзів, допомагав сусідам та односельцям. Його поважали
              за чесність, уміння підтримати у скрутну хвилину та готовність
              прийти на допомогу без зайвих слів.
            </p>
            <p className="mt-4 text-sm md:text-base">
              Щоб забезпечити свою сім'ю, Олексій працював на різних роботах.
              Він не боявся важкої праці і завжди прагнув зробити життя своїх
              близьких кращим. Турбота про велике господарство, догляд за
              городом, повсякденні турботи все це він сприймав як природну
              частину життя, наповнюючи кожну справу душею та відповідальністю.
            </p>
            <p className="mt-4 text-sm md:text-base">
              У центрі світу завжди була сім'я. Олексій глибоко любив свою
              дружину і доньку, пишався ними, знаходив у них опору та сенс свого
              життя. Його будинок був сповнений тепла, затишку та
              взаєморозуміння все це заслуга його характеру, кохання, терпіння
              та нескінченного кохання.
            </p>
          </div>

          <div className="my-10 w-full max-w-3xl">
            <Slider
              slidesToShow={3}
              infinite={true}
              centerMode={true}
              centerPadding="0px"
              slidesToScroll={1}
              dots={false}
              className={styles.carouselSlider}
            >
              {photos.slider3 &&
                photos.slider3?.map((photo, i) => {
                  return (
                    <div
                      key={i}
                      className="relative !flex max-h-[400px] min-h-[150px] flex-col items-center justify-center overflow-hidden"
                    >
                      <Image
                        fill
                        className={clsx("object-cover")}
                        src={photo}
                        alt="Фото"
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className="w-full max-w-xl bg-white p-10 py-8 shadow-md">
            <p className="text-sm md:text-base">
              Коли почалося повномасштабне вторгнення Росії на територію
              України, Олексій не зміг залишитись осторонь. Керуючись своїм
              почуттям справедливості, любов'ю до Батьківщини та
              відповідальністю за майбутнє своїх близьких, він добровільно став
              на захист своєї землі. Він зробив цей вибір усвідомлено і гідно,
              як і все у своєму житті. Служив в 503-му окремому батальйоні
              морської піхоти.
            </p>
          </div>

          <div className="my-10 w-full max-w-3xl">
            <Slider
              slidesToShow={3}
              infinite={true}
              centerMode={true}
              centerPadding="0px"
              slidesToScroll={1}
              dots={false}
              className={styles.carouselSlider}
            >
              {photos.slider4 &&
                photos.slider4?.map((photo, i) => {
                  return (
                    <div
                      key={i}
                      className="relative !flex max-h-[400px] min-h-[150px] flex-col items-center justify-center overflow-hidden"
                    >
                      <Image
                        fill
                        className={clsx("object-cover")}
                        src={photo}
                        alt="Фото"
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className="w-full max-w-xl bg-white p-10 py-8 shadow-md">
            <p className="text-sm md:text-base">
              4 грудня, поблизу населеного пункту Миколаївка Покровського району
              Донецької області Олексій загинув. Це стало величезним горем для
              його сім'ї, друзів та всіх, хто мав щастя знати його. Але в
              пам'яті близьких він назавжди залишиться прикладом мужності,
              доброти та честі. Його життя це історія про справжню людину, яка
              жила серцем і залишила по собі світло, яке неможливо затьмарити.
            </p>
          </div>
          <div className="my-10 w-full max-w-3xl">
            <Slider
              slidesToShow={3}
              infinite={true}
              centerMode={true}
              centerPadding="0px"
              slidesToScroll={1}
              dots={false}
              className={styles.carouselSlider}
            >
              {photos.slider5 &&
                photos.slider5?.map((photo, i) => {
                  return (
                    <div
                      key={i}
                      className="relative !flex max-h-[400px] min-h-[150px] flex-col items-center justify-center overflow-hidden"
                    >
                      <Image
                        fill
                        className={clsx("object-cover")}
                        src={photo}
                        alt="Фото"
                      />
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className="mb-10 w-full max-w-xl bg-white p-10 py-8 text-center shadow-md">
            <p className="text-sm md:text-base">
              Церемонія прощання із Захисником відбулася 10 грудня, на
              сільському кладовищі.
            </p>
          </div>
        </div>
      </div>
      {/* Футер */}
      <footer className="mt-2 w-full max-w-xl rounded-b-lg bg-[#6d6e4b] px-9 py-6 text-center font-[Cambria] text-sm font-bold text-white md:text-base">
        Світла пам'ять про нього назавжди залишиться у наших серцях. Нехай його
        ім'я живе вічно серед тих, хто пам'ятає та любить.
      </footer>
    </div>
  );
}
