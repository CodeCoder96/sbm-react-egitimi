import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Zorunlu alan!")
        .email("Geçerli bir e-mail giriniz!"),
      password: Yup.string()
        .required("Zorunlu alan!")
        .min(6, "Şifre en az 6 karakter olmalı!"),
    }),
    onSubmit: (values) => {
      const user = {
        id: Math.random(),
        email: values.email,
        username: "eminbasbayan",
        roles: ["user"],
      };

      dispatch(loginUser({ user }));
      toast.success("Giriş başarılı! Ana sayfaya yönlendiriliyorsun.", {
        autoClose: 1500,
      });
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
  });
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Giriş Yap</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email adresi
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Emailinizi girin"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-danger">{formik.errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Şifre
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Şifrenizi girin"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-danger">{formik.errors.password}</span>
            )}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-block">
              Giriş Yap
            </button>
          </div>
        </form>
        <div className="text-center mt-3">
          <a href="#">Şifremi Unuttum</a>
        </div>
        <div className="text-center mt-2">
          <a href="#">Hesabınız yok mu? Kayıt olun</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
