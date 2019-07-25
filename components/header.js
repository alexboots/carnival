import styled from 'styled-components';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function Header() {
  return (
    <header>
      <Title>Next.js Example on Now 2.0</Title>
    </header>
  );
}

export default Header;
