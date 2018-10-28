import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGifElement
 * @class IconRoundGifElement
 * @extends {AoflElement}
 */
class IconRoundGifElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGifElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-gif';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGifElement.is, IconRoundGifElement);

export default IconRoundGifElement;
