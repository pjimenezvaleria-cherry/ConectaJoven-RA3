// pages/RegisterPage.jsx
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { SimpleFooter } from '../components/layout/Footer';
import RegisterForm from '../components/forms/RegisterForm';

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar variant="register" />
      <main>
        <section id="registro-section" className="auth-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <RegisterForm onGoToLogin={() => navigate('/login')} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default RegisterPage;
