import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {style} from './style';

import ImgRedCircle from '../../assets/icons/red-circle.png';

import ImgValorant from '../../assets/images/ValorantIMG.jpg';
import LogoValorant from '../../assets/images/valorantLogo.png';
import ImgDK from '../../assets/images/livedk.png';
import LogoDK from '../../assets/images/dk_1.jpg';
import ImgXBOX from '../../assets/images/xboxIMG.png';
import LogoXbox from '../../assets/images/xbox.png';

export const Channels = () => {
  return (
    <View>
      <View style={style.card}>
        <View style={style.backgroundVideo}>
          <Image style={style.img} source={ImgValorant} />
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textIcon}>71.7K</Text>
          </View>
        </View>
        <View style={style.descriptionCard}>
          <View style={style.titleCard}>
            <Image style={style.logoCard} source={LogoValorant} />
            <Text style={style.textCard}>VALORANT</Text>
          </View>
          <Text
            style={style.descriptionTextCard}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
              Team Secret vs Ascend - VALORANT CHAMPIONS
          </Text>
          <Text style={style.categoryTextCard}>VALORANT</Text>
          <Text style={style.languageTextCard}>English</Text>
        </View>
      </View>
      <View style={style.card}>
        <View style={style.backgroundVideo}>
          <Image style={style.img} source={ImgDK} />
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textIcon}>1.5K</Text>
          </View>
        </View>
        <View style={style.descriptionCard}>
          <View style={style.titleCard}>
            <Image style={style.logoCard} source={LogoDK} />
            <Text style={style.textCard}>SamukailDK</Text>
          </View>
          <Text
            style={style.descriptionTextCard}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Sem título hoje
          </Text>
          <Text style={style.categoryTextCard}>League of Legends</Text>
          <Text style={style.languageTextCard}>Portuguese</Text>
        </View>
      </View>
      <View style={style.card}>
        <View style={style.backgroundVideo}>
          <Image style={style.img} source={ImgXBOX} />
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textIcon}>2K</Text>
          </View>
        </View>
        <View style={style.descriptionCard}>
          <View style={style.titleCard}>
            <Image style={style.logoCard} source={LogoXbox} />
            <Text style={style.textCard}>Xbox</Text>
          </View>
          <Text
            style={style.descriptionTextCard}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Day 1 - RLCS Fall Major
          </Text>
          <Text style={style.categoryTextCard}>Rocket League</Text>
          <Text style={style.languageTextCard}>Portuguese</Text>
        </View>
      </View>
      <View style={style.card}>
        <View style={style.backgroundVideo}>
          <Image style={style.img} source={ImgXBOX} />
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textIcon}>2K</Text>
          </View>
        </View>
        <View style={style.descriptionCard}>
          <View style={style.titleCard}>
            <Image style={style.logoCard} source={LogoXbox} />
            <Text style={style.textCard}>Xbox</Text>
          </View>
          <Text
            style={style.descriptionTextCard}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Day 1 - RLCS Fall Major
          </Text>
          <Text style={style.categoryTextCard}>Rocket League</Text>
          <Text style={style.languageTextCard}>Portuguese</Text>
        </View>
      </View>
      <View style={style.card}>
        <View style={style.backgroundVideo}>
          <Image style={style.img} source={ImgXBOX} />
          <View style={style.viewsCount}>
            <Image style={style.imgIcon} source={ImgRedCircle} />
            <Text style={style.textIcon}>2K</Text>
          </View>
        </View>
        <View style={style.descriptionCard}>
          <View style={style.titleCard}>
            <Image style={style.logoCard} source={LogoXbox} />
            <Text style={style.textCard}>Xbox</Text>
          </View>
          <Text
            style={style.descriptionTextCard}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Day 1 - RLCS Fall Major
          </Text>
          <Text style={style.categoryTextCard}>Rocket League</Text>
          <Text style={style.languageTextCard}>Portuguese</Text>
        </View>
      </View>
    </View>
  );
};
