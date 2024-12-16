import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Useaxios from "../../Axios";
import {useNavigate} from "react-router-dom"
import { SetSelectfilter } from "../../redux/Slice_store";
import { useDispatch} from "react-redux"

function CategoryPage() {
  const navigate = useNavigate() 
  const data = Useaxios({ url: "/" });
  const [categories, setCategory] = useState([]); 
  useEffect(() => {
    if (data && data.data) {
      setCategory(data.data); 
    }
  }, [data]);

  const dispatch = useDispatch() 

  const SubmitFilter = (books) =>{
    dispatch(SetSelectfilter(books))
    navigate('/Select')
  }

  return (
    <div className="flex text-white justify-between items-center">
      <div className="flex justify-between items-center my-8">
        <div className="text-white">
          {categories.map((category, idx) => {
            return (
              <div key={idx}>
                <h2 className="font-medium text-[32px]">{category.category}</h2>
                <div className="grid grid-cols-4 items-center gap-5" key={idx}>
                  {category.books.map((book,bookIdx) => (
                    <div className="flex flex-col" key={bookIdx}>
                      <img
                        className="w-[60%]"
                        src={book.image}
                        alt={book.title}
                      />
                      <p className="text-[16px] font-normal text-[#ADADAD]">
                        {book.author}
                      </p>
                      <p className="text-[21px] font-semibold text-yellow-50">
                        {book.title}
                      </p>
                    </div>
                  ))}
                </div>
                <Button onClick={() => SubmitFilter(category)}>
                  Смотреть все
                </Button>
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
