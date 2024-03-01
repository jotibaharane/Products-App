import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
interface CategoryCardProps {
  categories: string[];
}
export default function CategoriesList({ categories }: CategoryCardProps) {
  return (
    <View className='flex-row mx-4'>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className='space-x-4'
          contentContainerStyle={{
            paddingRight: 20,
          }}
        >
          {categories?.map((category, index) => {
            let isActive = category == 'business';
            let activeButtonClass = isActive
              ? 'bg-green-700 '
              : 'bg-black/10 dark:bg-neutral-400 ';
            let activeTextClass = isActive
              ? 'text-white '
              : 'text-gray-600 dark:text-neutral-600 ';

            return (
              <TouchableOpacity
                key={index}
                onPress={() => ''}
                className='flex items-center space-y-1'
              >
                <View className={'rounded-full py-2 px-4 ' + activeButtonClass}>
                  <Text className={'capitalize text-xs' + activeTextClass}>
                    {category}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
