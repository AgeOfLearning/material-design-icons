import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilter6Element
 * @class IconTwotoneFilter6Element
 * @extends {AoflElement}
 */
class IconTwotoneFilter6Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilter6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilter6Element.is, IconTwotoneFilter6Element);

export default IconTwotoneFilter6Element;
