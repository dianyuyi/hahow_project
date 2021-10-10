import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getHeroProfile, clearHeroProfile, increaseAbility, decreaseAbility, updateHeroProfile } from '../actions';
import { Outer, ProfileContainer, Wrapper, StatusWrapper } from '../styles/profileStyle';
import { SubmitButton } from '../components/SubmitButton';
import { AbilityCounter } from '../components/AbilityCounter';
import {Loading} from '../components/Loading'


const ProfileScreen = (props) => {
  const heroProfile = useSelector((state) => state.heroProfile);
  const updateProfile = useSelector((state) => state.updateProfile);

  const { id, profile, loading, error, availablePoints } = heroProfile;
  const { upLoading } = updateProfile


  const dispatch = useDispatch();
  const { heroId } = useParams();


  useEffect(() => {
    dispatch(getHeroProfile(heroId));
    return () => {
      dispatch(clearHeroProfile())
    };
  }, [dispatch, heroId]);

  const handleSubmit = (heroId, profile) => {
    dispatch(updateHeroProfile(heroId, profile))
  }

  const handleIncrese = (name) => {
    dispatch(increaseAbility(name))
  }
  const handleDecrese = (name) => {
    dispatch(decreaseAbility(name))
  }

  return (
    <>
    {loading ? (
      <Loading />
      ) : error ? (
      <div>{error}</div>
    ) : ( id !==null &&
      <Outer>
        <ProfileContainer>
          <Wrapper>
          {Object.entries(profile).map(([name, value], index) => {
          return (
            <AbilityCounter
            key={index}
              name={name}
              value={value}
              availablePoints={availablePoints}
              onIncrease={handleIncrese}
              onDecrease={handleDecrese}
              />
              )
            })}
          </Wrapper>
          <StatusWrapper>
            <SubmitButton
              onSubmit={handleSubmit}
              profile={profile}
              heroId={heroId}
              availablePoints={availablePoints}
              upLoading={upLoading}
            />
          </StatusWrapper>

        </ProfileContainer>
    </Outer>
    )
    }
    </>
  )
}

export default ProfileScreen;
