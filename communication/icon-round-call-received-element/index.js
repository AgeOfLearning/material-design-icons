import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCallReceivedElement
 * @class IconRoundCallReceivedElement
 * @extends {AoflElement}
 */
class IconRoundCallReceivedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCallReceivedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-call-received';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCallReceivedElement.is, IconRoundCallReceivedElement);

export default IconRoundCallReceivedElement;
