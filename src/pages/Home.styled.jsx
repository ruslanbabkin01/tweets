import styled from 'styled-components';

export const Caption = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSize.xl};
  font-weight: ${p => p.theme.fontWeight.semiBold};
  margin-bottom: 40px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSize.m};
`;
