import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilter9Element
 * @class IconTwotoneFilter9Element
 * @extends {AoflElement}
 */
class IconTwotoneFilter9Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilter9Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-9';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilter9Element.is, IconTwotoneFilter9Element);

export default IconTwotoneFilter9Element;
