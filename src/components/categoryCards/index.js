import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {style} from './style';
import ImgJC from '../../assets/images/JC.jpg';
import ImgCOD from '../../assets/images/COD.jpg';
import ImgLOL from '../../assets/images/LOL.jpg';
import ImgValorant from '../../assets/images/VALORANT.jpg';
import ImgFG from '../../assets/images/FALLGUYS.jpg';
import ImgGTAV from '../../assets/images/GTAV.jpg';
import ImgFortnite from '../../assets/images/FORTNITE.jpg';
import ImgRedCircle from '../../assets/icons/red-circle.png';

export const Category = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={style.container}>
        <View>
          <Image style={style.img} source={ImgJC} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Just Chatting
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>480,8K</Text>
          </View>
        </View>

        <View>
          <Image style={style.img} source={ImgCOD} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Call of Duty: Warzone
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>378,8K</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgLOL} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            League of Legends
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>145,9K</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgValorant} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            VALORANT
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>377,9K</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgGTAV} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Grand Theft Auto V
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>186,1K</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgFortnite} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Fortnite
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>147,7k</Text>
          </View>
        </View>
        <View>
          <Image style={style.img} source={ImgFG} />
          <Text
            style={style.textCategory}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Fall Guys: Ultimate Knockout
          </Text>
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textViewCount}>110,7K</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
