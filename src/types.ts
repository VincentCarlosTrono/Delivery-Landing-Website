export interface ServiceDataInterface {
    title: string;
    image: any;
    description: string;
    more: string;
  }
  export type ServiceLists = Array<ServiceDataInterface>

  export interface ButtonPropsInterface {
    name: String;
    icon?: any;
  }

  export interface ContactInterface {
      device: string,
      contact: any
  }
  export type Contacts = Array<ContactInterface>

  export interface ServiceDataInterface {
    title: string;
    image: any;
    description: string;
    more: string;
  }

  export interface FooterInfoInterface {
    title: string;
    info1: string;
    info2: string;
    info3: string;
  }

  export interface MenuPropsInterface {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }

  export interface HeaderListInterface {
    header: string;
    link: string
  }
  export type HeaderLists = Array<HeaderListInterface>;
  