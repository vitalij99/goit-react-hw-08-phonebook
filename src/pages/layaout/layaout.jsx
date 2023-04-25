import AppBar from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import style from './layaout.module.scss';

const Layaout = () => {
  return (
    <>
      <AppBar />
      <main>
        <section className={style.section}>
          <div className={style.container}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default Layaout;
