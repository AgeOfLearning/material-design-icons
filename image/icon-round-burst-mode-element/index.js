import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBurstModeElement
 * @class IconRoundBurstModeElement
 * @extends {AoflElement}
 */
class IconRoundBurstModeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBurstModeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-burst-mode';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBurstModeElement.is, IconRoundBurstModeElement);

export default IconRoundBurstModeElement;
