import { useEffect } from 'react';
import { useRouter } from 'next/router';

const requireAuthentication = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => {
  const WithAuthentication: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WithAuthentication;
};

export default requireAuthentication;
