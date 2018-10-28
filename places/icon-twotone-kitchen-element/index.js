import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneKitchenElement
 * @class IconTwotoneKitchenElement
 * @extends {AoflElement}
 */
class IconTwotoneKitchenElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneKitchenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-kitchen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneKitchenElement.is, IconTwotoneKitchenElement);

export default IconTwotoneKitchenElement;
