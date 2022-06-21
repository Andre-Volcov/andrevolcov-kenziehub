import Container from "../../components/Container";
import logo from "../../components/Img/Logo.svg";
import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { InlineDiv } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Api } from "../../Services/Api";

export default function Register() {
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome de usuário obrigatório")
      .matches(/^[aA-zZ\s]+$/, "Utilize apenas caracteres de A-Z"),
    email: yup.string().email("Email inválido").required("Email Obrigatório"),
    password: yup
      .string()
      .required("Informar uma senha")
      .min(6, "Insira pelo menos 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Sua senha precisa ser igual a anterior")
      .oneOf([yup.ref("password")], "Sua senha precisa ser igual a anterior"),
    bio: yup.string().required("Escreva algo sobre você"),
    contact: yup.string().required("Informe um contato"),
    course_module: yup.string().required("Informe um contato"),
  });

  function back() {
    history.push("/");
  }

  if (localStorage.getItem("hubToken")) {
    let module = localStorage.getItem("hubModule");
    let user = localStorage.getItem("hubUser");
    history.push(`/home/${user}/${module}`);
  }

  function onSubmitHandle(data) {
    Api.post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso!");
        setTimeout(history.push("/"), 2000);
      })
      .catch(() => {
        toast.error("Ops! Algo deu errado");
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
      <InlineDiv>
        <img src={logo} alt="" />
        <Button onClick={back} color={"var(--gray)"} width={"68px"}>
          Voltar
        </Button>
      </InlineDiv>

      <Container paddingTop={"50px"} paddingBot={"20px"}>
        <Form
          height={"100%"}
          border={"none"}
          onSubmit={handleSubmit(onSubmitHandle)}
        >
          <h2>Crie sua conta</h2>
          <h3>Rapido e grátis vamos nessa</h3>

          <label>Nome</label>
          <Input
            placeholder={"Digite aqui seu nome"}
            type={"text"}
            border={"none"}
            register={register}
            name={"name"}
          ></Input>
          <span>{errors.name?.message}</span>

          <label>Email</label>
          <Input
            placeholder={"Digite aqui seu email"}
            type={"text"}
            border={"none"}
            register={register}
            name={"email"}
          ></Input>
          <span>{errors.email?.message}</span>

          <label>Senha</label>
          <Input
            placeholder={"Digite aqui sua senha"}
            type={"password"}
            border={"none"}
            register={register}
            name={"password"}
          ></Input>
          <span> {errors.password?.message}</span>

          <label>Confirmar senha</label>
          <Input
            placeholder={"Digite sua senha novamente"}
            type={"password"}
            border={"none"}
            register={register}
            name={"confirmPassword"}
          ></Input>
          <span> {errors.confirmPassword?.message}</span>

          <label>Bio</label>
          <Input
            placeholder={"Fale sobre você"}
            type={"text"}
            border={"none"}
            register={register}
            name={"bio"}
          ></Input>
          <span> {errors.bio?.message}</span>

          <label>Contato</label>
          <Input
            placeholder={"Opção de contato"}
            type={"text"}
            border={"none"}
            register={register}
            name={"contact"}
          ></Input>
          <span> {errors.contact?.message}</span>

          <label>Selecionar módulo</label>
          <select name={"course-module"} {...register("course_module")}>
            <option value="Modulo 1">Modulo 1</option>
            <option value="Modulo 2">Modulo 2</option>
            <option value="Modulo 3">Modulo 3</option>
            <option value="Modulo 4">Modulo 4</option>
            <option value="Modulo 5">Modulo 5</option>
            <option value="Modulo 6">Modulo 6</option>
          </select>

          <Button type={"submit"} color={"var(--secondaryRed)"}>
            Cadastrar
          </Button>
        </Form>
      </Container>
    </>
  );
}
