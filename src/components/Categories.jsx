import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

export default function Categories() {
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categories);

  return (
    <>
      {typeof categories === 'string' && <p>{categories}</p>}
      <button
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        CHECK STATUS
      </button>
    </>
  );
}
