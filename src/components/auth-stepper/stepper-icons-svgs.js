// import * as React from 'react';
import PropTypes from 'prop-types';

function Briefcase(props) {
  const { stroke, fill } = props;
  return (
    <svg
      width='42'
      height='42'
      viewBox='0 0 41 42'
      fill={`${fill}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='20.5427'
        cy='20.5427'
        r='20.2927'
        fill={`${fill}`}
        stroke={`${stroke}`}
        strokeWidth='0.5'
      />
      <path
        d='M16.0327 13.8875V12.8149C16.0327 11.0377 17.4734 9.59698 19.2506 9.59698H21.3959C23.1731 9.59698 24.6138 11.0377 24.6138 12.8149V13.8875M9.59697 18.5507C9.59697 18.5507 12.9415 20.7785 18.1541 21.3003M31.0496 18.5507C31.0496 18.5507 27.7051 20.7785 22.4925 21.3003M13.8875 31.0496H26.7591C29.1286 31.0496 31.0496 29.1287 31.0496 26.7591V18.178C31.0496 15.8084 29.1286 13.8875 26.7591 13.8875H13.8875C11.5179 13.8875 9.59697 15.8084 9.59697 18.178V26.7591C9.59697 29.1287 11.5179 31.0496 13.8875 31.0496Z'
        stroke={`${stroke}`}
        strokeLinecap='round'
      />
      <path
        d='M22.4685 20.4949V21.5676C22.4685 21.5783 22.4685 21.5783 22.4685 21.589C22.4685 22.7582 22.4578 23.7128 20.3233 23.7128C18.1995 23.7128 18.178 22.7689 18.178 21.5997V20.4949C18.178 19.4223 18.178 19.4223 19.2506 19.4223H21.3959C22.4685 19.4223 22.4685 19.4223 22.4685 20.4949Z'
        stroke={`${stroke}`}
        strokeMiterlimit='10'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

Briefcase.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string
};

function Switch(props) {
  const { stroke, fill, innerStroke } = props;
  return (
    <svg
      width='41'
      height='42'
      viewBox='3 0 36.5 42'
      fill={`${fill}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='21.32'
        cy='20.5427'
        r='20.2927'
        fill={`${fill}`}
        stroke={`${stroke}`}
        strokeWidth='0.5'
      />
      <path
        d='M11.4469 14.9601H14.6648M14.6648 14.9601C14.6648 16.7373 16.1055 18.178 17.8827 18.178C19.6599 18.178 21.1006 16.7373 21.1006 14.9601C21.1006 13.1829 19.6599 11.7422 17.8827 11.7422C16.1055 11.7422 14.6648 13.1829 14.6648 14.9601ZM11.4469 25.6864H17.8827M27.5364 25.6864H30.7543M27.5364 25.6864C27.5364 27.4636 26.0957 28.9043 24.3185 28.9043C22.5413 28.9043 21.1006 27.4636 21.1006 25.6864C21.1006 23.9092 22.5413 22.4686 24.3185 22.4686C26.0957 22.4686 27.5364 23.9092 27.5364 25.6864ZM24.3185 14.9601H30.7543'
        stroke={`${innerStroke}`}
        strokeLinecap='round'
      />
    </svg>
  );
}

Switch.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string
};

function Completed(props) {
  const { stroke, fill, innerStroke } = props;
  return (
    <svg
      width='42'
      height='42'
      viewBox='1 0 42 42'
      fill={`${fill}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='21.4528'
        cy='20.5427'
        r='20.2927'
        fill={`${fill}`}
        stroke={`${stroke}`}
        strokeWidth='0.5'
      />
      <path
        d='M26.5966 11.032C25.0189 10.1193 23.1872 9.59698 21.2334 9.59698C15.3095 9.59698 10.5071 14.3993 10.5071 20.3233C10.5071 26.2473 15.3095 31.0496 21.2334 31.0496C27.1574 31.0496 31.9597 26.2473 31.9597 20.3233C31.9597 19.0025 31.721 17.7375 31.2844 16.5691M15.8703 18.178L19.6528 21.2041C20.5402 21.914 21.8273 21.8087 22.5875 20.964L30.8871 11.7422'
        stroke={`${innerStroke}`}
        strokeLinecap='round'
      />
    </svg>
  );
}

Completed.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string
};
export { Briefcase, Switch, Completed };
