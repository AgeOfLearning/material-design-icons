import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilter1Element
 * @class IconTwotoneFilter1Element
 * @extends {AoflElement}
 */
class IconTwotoneFilter1Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilter1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilter1Element.is, IconTwotoneFilter1Element);

export default IconTwotoneFilter1Element;
