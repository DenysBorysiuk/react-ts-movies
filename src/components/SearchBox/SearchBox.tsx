import  { FormEvent } from 'react';
import { BsSearch } from "react-icons/bs";
import { FormWrap, Input, FormBtn } from "./SearchBox.styled";

interface IProps {
  updateQueryString: (query: string) => void;
}

interface CustomForm extends HTMLFormElement {  
 readonly elements: CustomElements;
}

interface CustomElements extends HTMLFormControlsCollection {
  readonly query: HTMLInputElement;
}

const SearchBox: React.FC<IProps> = ({ updateQueryString }) => {
  const handleSubmit = (e:FormEvent<CustomForm>)=> {

    e.preventDefault();
    const form = e.currentTarget;
    updateQueryString(form.elements.query.value);
    form.reset();
  };

  return (
    <FormWrap onSubmit={handleSubmit}>
      <Input type="text" name="query" placeholder="Search movie" />
      <FormBtn type="submit">
        <BsSearch size="1.5em" />
      </FormBtn>
    </FormWrap>
  );
};


export default SearchBox;
