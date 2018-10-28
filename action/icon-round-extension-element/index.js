import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExtensionElement
 * @class IconRoundExtensionElement
 * @extends {AoflElement}
 */
class IconRoundExtensionElement extends AoflElement {
  /**
   * Creates an instance of IconRoundExtensionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-extension';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExtensionElement.is, IconRoundExtensionElement);

export default IconRoundExtensionElement;
