import Container from '@/components/Container';
import ImageCarousal from '@/components/ProductDetails/ImageCarousal';
import ProductInfo from '@/components/ProductDetails/ProductInfo';
import SkeletonProductDetails from '@/components/ProductDetails/SkeletonProductDetails';
import { RootNavigatorParamList } from '@/navigation/type';
import { getProductById } from '@/services';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useQuery } from 'react-query';

const ProductDetails = ({
  route,
}: NativeStackScreenProps<
  RootNavigatorParamList,
  keyof RootNavigatorParamList
>) => {
  const pageId = route?.params?.id;
  const { data, isLoading } = useQuery(['product', pageId], () =>
    getProductById(Number(pageId)),
  );

  if (isLoading) return <SkeletonProductDetails />;

  return (
    <Container>
      <ImageCarousal data={data} />
      <ProductInfo data={data} />
    </Container>
  );
};

export default ProductDetails;
