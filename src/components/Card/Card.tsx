import Button from "../Button/Button";
import { Header } from "../Header/Header";
import { Paragraph } from "../Paragraph/Paragraph";
import { Shape } from "../Shape/Shape";
import Spacer from "../Spacer/Spacer";
import { Subtitle } from "../Subtitle/Subtitle";

export interface Props {
  heading: string;
  subtitle: string;
  paragraph: string;
  buttonLabel: string;
}

export const Card = (props: Props) => {
  const { heading, subtitle, paragraph, buttonLabel } = props;
  return (
    <Shape>
      <Spacer size="xxxs">
        <Header>{heading}</Header>
      </Spacer>
      <Spacer size="xs">
        <Subtitle>{subtitle}</Subtitle>
      </Spacer>
      <Spacer size="sm">
        <Paragraph>{paragraph}</Paragraph>
      </Spacer>
      <Button>{buttonLabel}</Button>
    </Shape>
  );
};
