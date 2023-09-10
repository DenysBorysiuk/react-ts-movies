import { FormEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FormWrap, Input, FormBtn } from './SearchBox.styled';

type Props = {
  updateQueryString: (query: string) => void;
};

const SearchBox = ({ updateQueryString }: Props) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    updateQueryString(form.query.value);
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
