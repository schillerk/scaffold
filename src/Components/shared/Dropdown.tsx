import * as React from "react";

import Button from "Shared/Button";
import { css, withStyles, withStylesProps } from "Core/withStyles";
import { render } from "react-dom";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  onClickOutside?: () => void;
  label: string;
  open: boolean;
} & withStylesProps;

class Dropdown extends React.Component<Props> {
  ref = React.createRef<HTMLDivElement>();

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside = (event: MouseEvent) => {
    const { onClickOutside } = this.props;
    const { current } = this.ref;
    if (current && current.contains(event.target as any)) {
      return;
    }
    if (onClickOutside) {
      onClickOutside(event);
    }
  };

  render() {
    const { children, label, onClick, open = false, styles } = this.props;
    return (
      <div ref={this.ref}>
        <Button inverted onClick={onClick}>
          {label} v
        </Button>
        {open && <div {...css(styles.dropdown_items)}>{children}</div>}
      </div>
    );
  }
}

export default withStyles(({ color, ui }: withStylesProps) => ({
  dropdown_items: {
    display: "flex",
    flexDirection: "column",
    width: 20 * ui.unit,
    position: "absolute",
    background: color.neutral[0],
    borderRadius: ui.borderRadius,
    padding: `${ui.unit}px 0`,
    boxShadow: `0 4px 8px rgba(16,22,26, .35)`,
    marginTop: ui.unit / 2
  }
}))(Dropdown);
