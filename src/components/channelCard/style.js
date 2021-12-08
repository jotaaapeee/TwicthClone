import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  img: {
    width: 140,
    height: 80,
    resizeMode: 'contain',
  },
  viewsCount: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgIcon: {
    width: 10,
    height: 10,
    marginLeft: 4,
    top: 7,
    resizeMode: 'contain',
  },

  textIcon: {
    fontWeight: 'bold',
    marginLeft: 8,
    top: 7,
    color: '#fff',
  },

  descriptionCard: {
    marginHorizontal: 10,
  },
  titleCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCard: {
    borderRadius: 50,
    marginRight: 8,
    width: 15,
    height: 15,
  },
  textCard: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  descriptionTextCard: {
    fontWeight: '500',
    width: 250,
    marginTop: 6,
    color: '#fff',
  },
  categoryTextCard: {
    fontSize: 14,
    color: 'gray',
  },
  languageTextCard: {
    backgroundColor: '#323234',
    width: 90,
    textAlign: 'center',
    borderRadius: 50,
    color: 'white',
    fontSize: 13,
    marginTop: 15,
  },
});
