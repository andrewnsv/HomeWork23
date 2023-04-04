import React, { useState } from "react";
import useFetchHeroes from "../hooks/useFetchHeroes";
import { nextHandler, prevHandler } from "../helpers/btnPrevNext";

const HeroCard = () => {
  const [page, setPage] = useState(1);
  const { data, loading } = useFetchHeroes(`character/?page=${page}`);

  return (
    <div className={'wrap'}>
      <div className={"hero-wrapper"}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data.results.map((item, index) => {
              return (
                <div className={'card-hero'} key={index}>
                  <img alt={item.name} src={item.image}></img>
                  <p>{item.name}</p>
                  <p>{item.status}</p>
                  <p>{item.species}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div>
        <button
          disabled={page === 1}
          onClick={() => prevHandler(page, setPage)}
        >
          prev
        </button>
        <button
          disabled={page === data.info?.pages}
          onClick={() => nextHandler(page, setPage)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
