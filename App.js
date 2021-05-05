import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator }from 'react-navigation-drawer';
import Contato from './src/pages/Contato';
import Home from './src/pages/Home';
import CustumerContent from './src/pages/CustumerContent';
import listaContatos from './src/pages/listaContatos';
import buscaCep from './src/pages/buscaCep';

const Route = createAppContainer(
  createDrawerNavigator({
    Home,
    listaContatos,
    buscaCep,
    Contato,
  }, {
    initialRouteName: 'Home',
    contentComponent: CustumerContent
  })
)

export default Route;