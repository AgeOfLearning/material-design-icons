import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundVideocamOffElement
 * @class IconRoundVideocamOffElement
 * @extends {AoflElement}
 */
class IconRoundVideocamOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundVideocamOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-videocam-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundVideocamOffElement.is, IconRoundVideocamOffElement);

export default IconRoundVideocamOffElement;
