import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHeroList,clearHeroProfile } from '../actions';
import { Outer, ListContainer, ListWrapper, ListCard } from '../styles/listStyle';
import { useHistory } from "react-router-dom";
import { Loading } from '../components/Loading'


const ListScreen = () => {
  const heroList = useSelector((state) => state.heroList);
  const { heroes, loading, error } = heroList;
  const history = useHistory()
  const [currentId, setCurrentId] = useState(null)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHeroList());
    return () => {
      //
    };
  }, [dispatch]);

  const handleHeroSelect = (heroId) => {
    if (heroId === currentId) {
      dispatch(clearHeroProfile())
      history.push(`/heroes`);
      setCurrentId(null)
    } else {
      setCurrentId(heroId)
    }
  };


  return (
    <>
    {loading ? (
      <Loading />
    ) : error ? (
      <div>{error}</div>
    ) : (
      <Outer>
        <ListContainer>
          {heroes.map((hero)=>{
            return (
              <ListWrapper onClick={()=> handleHeroSelect(hero.id)} key={hero.id} isSelect={currentId===hero.id}>
              <ListCard to={`/heroes/${hero.id}`} >
                <img className={`image`} src={hero.image} alt={hero.name}/>
                <p className={`name`}>{hero.name}</p>
              </ListCard>
              </ListWrapper>
            )
          })}
        </ListContainer>
      </Outer>
      )
    }
    </>
  )
}

export default ListScreen;
