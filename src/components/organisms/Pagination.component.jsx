import React from 'react';
import styled, { css } from 'styled-components';
import { LinkMain } from 'components/atoms/Links.component';
import { Link } from 'gatsby';

const StyledPagination = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const StyledNavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
`;

const StyledPrevButton = styled(LinkMain)`
  margin: 0 auto 0 1rem;
`;

const StyledNextButton = styled(LinkMain)`
  margin: 0 1rem 0 auto;
`;

const StyledNumber = styled.span`
  display: inline-block;
  color: var(--primaryColor);
  background-color: var(--mainWhite);
  padding: 0.4rem;
  margin: 1rem;
  border: 2px solid var(--primaryColor);
  border-radius: 5px;

  ${({ curr }) =>
    curr &&
    css`
      color: var(--mainWhite);
      background-color: var(--primaryColor);
    `}
`;

const StyledNumbers = styled.div`
  display: flex;
  justify-content: center;
`;

const Pagination = ({ pageContext, slug }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <StyledPagination>
      <StyledNumbers>
        {Array.from({ length: numPages }, (_, i) => {
          return (
            <Link key={`${slug}-${i + 1}`} to={i === 0 ? `/${slug}/` : `/${slug}/${i + 1}`}>
              <StyledNumber curr={i === currentPage - 1}>{i + 1}</StyledNumber>
            </Link>
          );
        })}
      </StyledNumbers>
      <StyledNavButtons>
        {!isFirst && (
          <StyledPrevButton inverted to={`/${slug}/${prevPage}`} rel="prev">
            ← Previous Page
          </StyledPrevButton>
        )}

        {!isLast && (
          <StyledNextButton inverted to={`/${slug}/${nextPage}`} rel="next">
            Next Page →
          </StyledNextButton>
        )}
      </StyledNavButtons>
    </StyledPagination>
  );
};

export default Pagination;
