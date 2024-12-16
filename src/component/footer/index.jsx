import React from "react";
import logo1 from "../../../public/logo1.png";
import img1 from "../../../public/22.png"
import img2 from "../../../public/dell.png"
import img3 from "../../../public/amazon.png";
import img4 from "../../../public/01.png";
import { Button } from "antd";
function Footer() {
  return (
    <section>
      <div className="flex justify-between items-center my-9">
        <img src={logo1} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="flex my-9 items-center border-[3px] border-[solid] p-3 m-auto border-[#54565d]  w-[70%]  justify-center gap-3">
        <img className="w-[150px] " src={img4} alt="" />
        <div className="flex gap-8 items-center text-white">
          <div>
            <p className="text-[32px] font-bold">Eжедневное преимущество!</p>
            <p className="text-[18px] font-normal">
              Даже полтора часа в день (в среднем столько занимает время <br />{" "}
              на дорогу в мегаполисе на работу и домой), посвященных <br />{" "}
              аудиочтению!
            </p>
          </div>
          <Button type='link' >Получить скидку</Button>
        </div>
      </div>
      <div className="border-[1px] text-[#686666] w-full opacity-10 mb-5 "></div>
      <footer className="flex justify-between items-start">
        <div>
          <img src={logo1} alt="" />
        </div>
        <div className="flex flex-col justify-between items-start ">
          <p className="text-[#D9D9D9] text-[21px] font-bold">Жанры</p>
          <a href="#" className="text-[12px] text-[#ADADAD] font-light">
            Нонфикшн{" "}
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            Псиология{" "}
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            Бизнес{" "}
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            Финансы{" "}
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            Все жанры
          </a>
        </div>
        <div className="flex flex-col justify-between items-start ">
          <p className="text-[#D9D9D9] text-[21px] font-bold">Категории</p>

          <a href="#" className="text-[12px] text-[#ADADAD] font-light">
            Популярное
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            Новинки
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            Выбор
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            редакции
          </a>
        </div>
        <div className="flex flex-col justify-between items-start ">
          <p className="text-[#D9D9D9] text-[21px] font-bold">Разделы</p>
          <a href="#" className="text-[12px] text-[#ADADAD] font-light">
            Нонфикшн{" "}
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            Псиология{" "}
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            Бизнес{" "}
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            Финансы{" "}
          </a>
          <a href="#" className="text-[12px] text-[#ADADAD]  font-light">
            Все жанры
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
