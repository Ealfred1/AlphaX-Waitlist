import { CSSProperties, ElementType, ReactNode } from 'react';
import './StarBorder.css';

interface StarBorderProps {
  as?: ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: ReactNode;
  [key: string]: unknown;
}

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = '#9b1fe8',
  speed = '5s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{ padding: `${thickness}px 0`, ...((rest.style as CSSProperties) ?? {}) }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{ background: `radial-gradient(circle, ${color}, transparent 10%)`, animationDuration: speed }}
      />
      <div
        className="border-gradient-top"
        style={{ background: `radial-gradient(circle, ${color}, transparent 10%)`, animationDuration: speed }}
      />
      <div className="star-inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
