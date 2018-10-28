import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilter4Element
 * @class IconTwotoneFilter4Element
 * @extends {AoflElement}
 */
class IconTwotoneFilter4Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilter4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilter4Element.is, IconTwotoneFilter4Element);

export default IconTwotoneFilter4Element;
