import DetailsProduct from "@/components/product/col-details/DetailsProduct";
import MainImages from "@/components/product/col-images/MainImages";

import imgProduct1 from "@/assets/images/image-product-1.jpg";
import imgProduct2 from "@/assets/images/image-product-2.jpg";
import imgProduct3 from "@/assets/images/image-product-3.jpg";
import imgProduct4 from "@/assets/images/image-product-4.jpg";

import imgProductSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProductSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProductSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProductSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

const ARRAY_IMGS = [imgProduct1, imgProduct2, imgProduct3, imgProduct4]
const ARRAY_IMGS_SMALL = [imgProductSmall1, imgProductSmall2, imgProductSmall3, imgProductSmall4]

const MainProduct = () => {
    return (
        <main className="grid grid-cols-1 gap-8 items-center px-2 mt-4 mx-auto md:min-h-[calc(100vh-89px)] md:container md:grid-cols-2 md:px-6 md:mt-6 md:items-start lg:items-center lg:min-h-0">
            <MainImages
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMGS_SMALL={ARRAY_IMGS_SMALL} />
            <DetailsProduct />
        </main>
    )
}
export default MainProduct;