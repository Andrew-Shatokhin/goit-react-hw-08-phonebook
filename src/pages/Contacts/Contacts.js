import { Layout } from 'components/Layout';
import { GlobalStyle } from '../../components/GlobalStyle';
import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import { Title, TitleSection } from '../../components/App.styled';
import ContactsList from '../../components/ContactsList/ContactsList';


export default function Contacts() {
  return (
    <Layout>
      <Title>Phonebook</Title>
      <Form />
      <TitleSection>Contacts</TitleSection>
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Layout>


  );
}
