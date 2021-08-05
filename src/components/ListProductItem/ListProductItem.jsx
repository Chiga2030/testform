import classNames from 'classnames';

const ListProductItem = ({
  product,
  price,
  priceForEach,
  discount,
  ...props
}) => (
  <li className={props.styles.withBorderBottom}>
    <label className={props.styles.column}>
      <input
        className={props.styles.radio}
        name="selectProduct"
        type="radio"
        value="5"
      />
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
            (<p className={props.styles.subtitle}>
              You safe ${discount}% on each patent check
            </p>) : ''
          )}
      </div>
    </label>
  </li>
);

export default ListProductItem;
