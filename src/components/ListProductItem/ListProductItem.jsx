import classNames from 'classnames';

import radio from './img/radio.svg';
import radioWithDot from './img/radioWithDot.svg';

const ListProductItem = ({
  id,
  product,
  price,
  priceForEach,
  discount,
  isSelect,
  onSelect,
  ...props
}) => (
  <li
    className={props.styles.listItem}
    onChange={() => onSelect(id)}
  >
    <label
      className={classNames(
        props.styles.column,
        {
          [props.styles.selectedColumn]: isSelect,
        },
      )}
    >
      <span className={props.styles.radioBox}>
        <img
          className={props.styles.radioImg}
          src={isSelect ? radioWithDot : radio}
          alt=""
        />
        <input
          className={props.styles.radio}
          name="selectProduct"
          type="radio"
          value="5"
        />
      </span>
      <div className={props.styles.description}>
        <p className={classNames(
          props.styles.title,
          {
            [props.styles.onlyTitle]: !discount,
          },
        )}>
          {product} for {price} usd {
            (priceForEach ? `/ ${priceForEach}$ for each` : '')
          }
        </p>
        {
          (discount ?
            (<p className={classNames(
              props.styles.subtitle,
              {
                [props.styles.choicedSubtitle]: isSelect,
              },
            )}>
              You safe ${discount}% on each patent check
            </p>) : ''
          )}
      </div>
    </label>
  </li>
);

export default ListProductItem;
