import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import tw, { styled } from "twin.macro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const qandaPage = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <Wrapper>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              Website Title
            </h1>
          </header>
        )}

        <h2>Modal Page</h2>

        <GoToQA to="/">
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        </GoToQA>
      </Wrapper>
    )}
  </ModalRoutingContext.Consumer>
)


const Wrapper = styled.div`
  ${tw``}
`;

const GoToQA = styled(Link)`
  ${tw``}
`;

export default qandaPage