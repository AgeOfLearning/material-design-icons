import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSendElement
 * @class IconRoundSendElement
 * @extends {AoflElement}
 */
class IconRoundSendElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSendElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-send';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSendElement.is, IconRoundSendElement);

export default IconRoundSendElement;
