import MainHeader from '@/components/header/MainHeader';
import MainProduct from '@/components/product/MainProduct';

import CartDetailProvider from '@/context/useCartDetails';

const App = () => {
    return (
        <div className="md:max-w-[1100px] md:mx-auto md:overflow-y-hidden h-[100%] dark:bg-neutral-900" >
            <CartDetailProvider>
                <MainHeader />
                <MainProduct />
            </CartDetailProvider>
        </div>
    );
};

export default App;
