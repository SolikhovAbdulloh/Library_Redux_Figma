import React from "react";
import logo from "../../../public/logo.png";
import { FaSearch } from "react-icons/fa";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  return (
    <section>
      <nav className="flex header justify-between items-center">
        <img className="cursor-pointer" src={logo} alt="logo" />
        <div className="flex text-white items-center gap-7">
          <a href="#" onClick={() => navigate("/")}>
            Как купить
          </a>
          <a href="#" onClick={() => navigate("/")}>
            F.A.Q
          </a>
          <a href="#" onClick={() => navigate("/")}>
            Контакты
          </a>
          <FaSearch className="cursor-pointer" />
        </div>
        <div className="flex items-center gap-4">
          <Button className="rounded-3xl" type="default" color="default">
            Регистрация
          </Button>
          <Button className="bg-[#EC8F32] rounded-3xl text-white">Войти</Button>
        </div>
      </nav>
      <div className="bg1 flex justify-between items-center">
        <div className="mt-8">
          <h3 className="text-[62px]  font-bold">
            Книги, которые <br /> вам хочется слушать
          </h3>
          <p className="text-[24px] font-medium">
            Лучшая подборка аудиокниг по психологиии <br /> саморазвитию за все
            годы издательства...
          </p>
        </div>
        <Button className="bg-[#EC8F32] text-white w-[249px] h-[78px] rounded-3xl">
          Выбрать книгу
        </Button>
      </div>
    </section>
  );
}

export default Navbar;
