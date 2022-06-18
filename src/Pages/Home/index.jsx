import { InlineDiv } from "../Register/style";
import Logo from "../../components/Img/Logo.svg";
import Button from "../../components/Button";
import { useHistory, useParams } from "react-router-dom";
import Container from "../../components/Container/index";
import { HomeBox, ItemsBox, StyledModal } from "./style";
import { useState } from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Api } from "../../Services/Api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { BsFillTrashFill } from "react-icons/bs";

export default function Home() {
  const params = useParams();
  const history = useHistory();

  const [modal, setModal] = useState(false);
  const [tecnologies, setTecnologies] = useState([]);

  if (localStorage.getItem("hubToken") === null) {
    history.push("/");
  }

  function toLogin() {
    localStorage.removeItem("hubToken");
    history.push("/");
  }

  function onSubmitHandle(data) {
    let token = localStorage.getItem("hubToken");
    Api.post(`users/techs`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        toast.success("Você cadastrou um conhecimento com sucesso!");
        getData();
        setModal(false);
      })
      .catch((err) =>
        toast.error("Erro ao cadastrar conhecimento, tente com outro nome")
      );
  }

  const formSchema = yup.object().shape({
    title: yup.string().required("Insira um nome de projeto"),
    status: yup.string().required("Nível obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function getData() {
    let id = localStorage.getItem("hubId");
    Api.get(`/users/${id}`)
      .then((response) => {
        setTecnologies(response.data.techs);
      })
      .catch((err) =>
        toast.error("Erro ao carregar informações, efetue o login novamente")
      );
  }

  function deleteTec(techId) {
    let token = localStorage.getItem("hubToken");
    Api.delete(`/users/techs/${techId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        toast.success("Item excluído com sucesso!");
        getData();
      })
      .catch((err) => toast.error("Erro na exclusão, tente novamente"));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HomeBox>
        <InlineDiv height={"72px"} alignSelf={"center"}>
          <img src={Logo} alt="" />
          <Button
            onClick={toLogin}
            color={"var(--gray)"}
            width={"68px"}
            alignSelf={"center"}
          >
            Sair
          </Button>
        </InlineDiv>
      </HomeBox>
      <HomeBox paddingBottom={"37px"}>
        <InlineDiv height={"100px"}>
          <h2>Olá, {params.id}</h2>
          <h4>{params.course_module}</h4>
        </InlineDiv>
      </HomeBox>
      <InlineDiv height={"64px"}>
        <h3>Tecnologias</h3>
        <Button
          onClick={() => setModal(true)}
          color={"var(--gray)"}
          width={"44px"}
          alignSelf={"center"}
          size={"24px"}
        >
          +
        </Button>
      </InlineDiv>
      <Container justify={"flex-start"} gap={"0px"}>
        {tecnologies.map((element) => (
          <ItemsBox key={element.id}>
            <h6>{element.title}</h6>
            <p>
              {element.status}
              <BsFillTrashFill onClick={() => deleteTec(element.id)} />
            </p>
          </ItemsBox>
        ))}
      </Container>

      {modal && (
        <StyledModal>
          <section>
            <header>
              <h5>Cadastrar Tecnologia</h5>
              <Button
                onClick={() => setModal(false)}
                type={"button"}
                width={"10%"}
                color={"var(--gray)"}
              >
                X
              </Button>
            </header>
            <Form onSubmit={handleSubmit(onSubmitHandle)}>
              <label>Nome do projeto</label>
              <Input
                placeholder={"Nome do projeto"}
                type={"text"}
                register={register}
                name={"title"}
              ></Input>
              <span>{errors.title?.message}</span>

              <label>
                Status <span>{errors.status?.message}</span>
              </label>
              <select name={"course-module"} {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>

              <Button type={"submit"}>Cadastrar Tecnologia</Button>
            </Form>
          </section>
        </StyledModal>
      )}
    </>
  );
}
