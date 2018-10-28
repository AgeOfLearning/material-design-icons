import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVideocamElement
 * @class IconRoundVideocamElement
 * @extends {AoflElement}
 */
class IconRoundVideocamElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVideocamElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-videocam';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVideocamElement.is, IconRoundVideocamElement);

export default IconRoundVideocamElement;
