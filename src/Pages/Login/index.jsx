import Container from "../../components/Container";
import logo from "../../components/Img/Logo.svg";
import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Api } from "../../Services/Api";
import { BsFillEyeFill } from "react-icons/bs";

export default function Login() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email Obrigatório"),
    password: yup
      .string()
      .required("Informar uma senha")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Sua senha deve conter pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial "
      ),
  });

  function toRegister() {
    history.push("/register");
  }

  function onSubmitHandle(data) {
    Api.post("/sessions", data)
      .then((response) => {
        localStorage.setItem("hubToken", response.data.token);
        localStorage.setItem("hubId", response.data.user.id);
        history.push(
          `/home/${response.data.user.name}/${response.data.user.course_module}`
        );
      })
      .catch(() => {
        toast.error(
          "Seu login não foi encontrado, verifique sua senha e email"
        );
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
      <img src={logo} alt="" />
      <Container>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit(onSubmitHandle)}>
          <label>Email</label>
          <Input
            placeholder={"Digite aqui seu email"}
            type={"text"}
            register={register}
            name={"email"}
          ></Input>
          <span>{errors.email?.message}</span>

          <label>Senha</label>
          <Input
            placeholder={"Digite aqui sua senha"}
            type={"password"}
            register={register}
            name={"password"}
          >
            <BsFillEyeFill />
          </Input>
          <span>{errors.password?.message}</span>

          <Button type={"submit"}>Login</Button>
          <h3>Ainda não possui uma conta?</h3>
          <Button type={"button"} onClick={toRegister} color={"var(--gray)"}>
            Cadastre-se
          </Button>
        </Form>
      </Container>
    </>
  );
}
