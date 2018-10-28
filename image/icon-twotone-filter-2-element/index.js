import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilter2Element
 * @class IconTwotoneFilter2Element
 * @extends {AoflElement}
 */
class IconTwotoneFilter2Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilter2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilter2Element.is, IconTwotoneFilter2Element);

export default IconTwotoneFilter2Element;
