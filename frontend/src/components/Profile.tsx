import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { RootDispatch } from '../actions/types';
import { getProfileRequestAsync } from '../actions';
import { ChangeWallet } from './ChangeWallet'

export const Profile: React.FC = () => {
  const state = useSelector((state: RootState) => state.system);
  const dispatch = useDispatch<RootDispatch>();

  React.useEffect(() => {
    dispatch(getProfileRequestAsync());
  }, [])

  return (
    <div>
      <div>
        <label>Current wallet: </label>
        <label>{state.wallet}</label>
        <ChangeWallet />
      </div>
      <div>
        <div>
          <label>Items: </label>
        </div>
        <div>
          <div>
            <div>
              <label>Own</label>
            </div>
            {state.items.own.map(item =>
              <div key={item._id}>
                {item.name}
              </div>
            )}
          </div>
          <div>
            <div>
              <label>Bought</label>
            </div>
            {state.items.bought.map(item =>
              <div key={item._id}>
                {item.name}
              </div>
            )}
          </div>
          <div>
            <div>
              <label>Betted</label>
            </div>
            {state.items.betted.map(item =>
              <div key={item._id}>
                {item.name}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}