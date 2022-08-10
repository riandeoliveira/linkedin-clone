import Image from "next/image";

const menuItems = [
  {
    title: "Início",
    path: "/feed",
    icon: (
      <Image
        src="/assets/icons/home.svg"
        alt="Ícone de uma casa"
        width={16}
        height={18}
      />
    ),
  },
  {
    title: "Minha rede",
    path: "/mynetwork",
    icon: (
      <Image
        src="/assets/icons/my-network.svg"
        alt="Ícone de pessoas"
        width={22}
        height={16}
      />
    ),
  },
  {
    title: "Vagas",
    path: "/jobs",
    icon: (
      <Image
        src="/assets/icons/jobs.svg"
        alt="Ícone de maleta"
        width={20}
        height={19}
      />
    ),
  },
  {
    title: "Mensagens",
    path: "/messaging",
    icon: (
      <Image
        src="/assets/icons/messaging.svg"
        alt="Ícone de mensagem"
        width={20}
        height={20}
      />
    ),
  },
  {
    title: "Notificações",
    path: "/notifications",
    icon: (
      <Image
        src="/assets/icons/notifications.svg"
        alt="Ícone de um sino"
        width={16}
        height={20}
      />
    ),
  },
  {
    title: "Soluções",
    path: "/work",
    icon: (
      <Image
        src="/assets/icons/work.svg"
        alt="Ícone de nove caixas pequenas formando um quadrado"
        width={16}
        height={16}
      />
    ),
  },
];

export default menuItems;
