// pages/LoginPage.jsx
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { SimpleFooter } from '../components/layout/Footer';
import LoginForm from '../components/forms/LoginForm';

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar variant="login" />
      <main>
        <section id="login-section" className="auth-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                <LoginForm
                  onGoToRegister={() => navigate('/registro')}
                  onLoginSuccess={() => navigate('/')}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default LoginPage;
