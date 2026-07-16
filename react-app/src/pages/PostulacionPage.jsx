// pages/PostulacionPage.jsx
import Navbar from '../components/layout/Navbar';
import { SimpleFooter } from '../components/layout/Footer';
import JobApplicationForm from '../components/forms/JobApplicationForm';

const PostulacionPage = () => (
  <>
    <Navbar variant="application" />
    <main>
      <section id="postulacion-section" className="auth-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <JobApplicationForm />
            </div>
          </div>
        </div>
      </section>
    </main>
    <SimpleFooter />
  </>
);

export default PostulacionPage;
