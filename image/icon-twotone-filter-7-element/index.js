import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilter7Element
 * @class IconTwotoneFilter7Element
 * @extends {AoflElement}
 */
class IconTwotoneFilter7Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilter7Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-7';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilter7Element.is, IconTwotoneFilter7Element);

export default IconTwotoneFilter7Element;
