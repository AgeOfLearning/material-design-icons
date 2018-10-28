import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpKitchenElement
 * @class IconSharpKitchenElement
 * @extends {AoflElement}
 */
class IconSharpKitchenElement extends AoflElement {
  /**
   * Creates an instance of IconSharpKitchenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-kitchen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpKitchenElement.is, IconSharpKitchenElement);

export default IconSharpKitchenElement;
