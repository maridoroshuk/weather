import React from 'react';
import { Container } from './styled';

interface IError {
  children: JSX.Element | JSX.Element[];
}

interface IState {
  hasError?: boolean;
}

class ErrorBoundary extends React.Component<IError> {
  constructor(props: IError) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError }: IState = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Container data-testid="errorBoundary">
          Oops... Something went wrong :(
        </Container>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
