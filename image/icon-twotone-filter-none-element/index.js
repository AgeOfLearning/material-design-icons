import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilterNoneElement
 * @class IconTwotoneFilterNoneElement
 * @extends {AoflElement}
 */
class IconTwotoneFilterNoneElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilterNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilterNoneElement.is, IconTwotoneFilterNoneElement);

export default IconTwotoneFilterNoneElement;
