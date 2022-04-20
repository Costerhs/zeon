import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImages } from '../../redux/reducers/cartReducer';
import HelpItem from './HelpItem';

function Help() {
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setImages());
  // }, []);
  let fors = useSelector((state) => state.cart.images);
  console.log(fors);
  return (
    <div className="helsp">
      <div className="cont">
        <div>
          <img className="img" src="https://i.ibb.co/S62vq2L/fon5.png" alt="nice" />
        </div>
        <div className="text">
          <h1>Помощь</h1>
          {fors.length > 0
            ? fors[0].help.map((el) => {
                return (
                  <HelpItem
                    hes={el}
                    text={
                      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit        nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a        sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque          gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque         elit nulla. Id est tellus maecenas ornare velit.'
                    }
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Help;
/*fors[0].help.map((el) => {
                return (
                  <HelpItem
                    hes={el}
                    text={
                      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque, gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque elit        nulla. Id est tellus maecenas ornare velit. Ut cras ut rhoncus fermentum pharetra a        sit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet laoreet a, neque          gravida urna libero iaculis lacus. Pellentesque pellentesque massa ornare sit pellentesque         elit nulla. Id est tellus maecenas ornare velit.'
                    }
                  />
                );
              })*/
