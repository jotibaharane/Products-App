import CategoriesList from '@/components/CategoryList';
import Container from '@/components/Container';
import ProductListComponent from '@/components/ProductList';
import SearchComponent from '@/components/SearchComponent';
import { categories, propsData } from '@/constants';
import { ScrollView, Text, View } from 'react-native';
export default function ProductList() {
  return (
    <Container>
      {/* Search */}
      <SearchComponent />
      {/* Categories */}
      <CategoriesList categories={categories} />
      {/* list */}
      <View className='h-full'>
        <View className='my-4 mx-4 flex-row justify-between items-center'>
          <Text className='text-xl dark:text-white'>Product List</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductListComponent productArray={propsData?.products} />
        </ScrollView>
      </View>
    </Container>
  );
}
