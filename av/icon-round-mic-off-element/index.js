import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMicOffElement
 * @class IconRoundMicOffElement
 * @extends {AoflElement}
 */
class IconRoundMicOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMicOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mic-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMicOffElement.is, IconRoundMicOffElement);

export default IconRoundMicOffElement;
