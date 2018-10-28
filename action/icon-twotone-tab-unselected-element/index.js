import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTabUnselectedElement
 * @class IconTwotoneTabUnselectedElement
 * @extends {AoflElement}
 */
class IconTwotoneTabUnselectedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTabUnselectedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tab-unselected';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTabUnselectedElement.is, IconTwotoneTabUnselectedElement);

export default IconTwotoneTabUnselectedElement;
