import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineKitchenElement
 * @class IconOutlineKitchenElement
 * @extends {AoflElement}
 */
class IconOutlineKitchenElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineKitchenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-kitchen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineKitchenElement.is, IconOutlineKitchenElement);

export default IconOutlineKitchenElement;
