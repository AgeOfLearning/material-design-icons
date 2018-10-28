import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundColorizeElement
 * @class IconRoundColorizeElement
 * @extends {AoflElement}
 */
class IconRoundColorizeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundColorizeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-colorize';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundColorizeElement.is, IconRoundColorizeElement);

export default IconRoundColorizeElement;
