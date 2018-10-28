import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundKitchenElement
 * @class IconRoundKitchenElement
 * @extends {AoflElement}
 */
class IconRoundKitchenElement extends AoflElement {
  /**
   * Creates an instance of IconRoundKitchenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-kitchen';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundKitchenElement.is, IconRoundKitchenElement);

export default IconRoundKitchenElement;
