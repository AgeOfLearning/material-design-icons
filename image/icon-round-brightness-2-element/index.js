import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightness2Element
 * @class IconRoundBrightness2Element
 * @extends {AoflElement}
 */
class IconRoundBrightness2Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightness2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightness2Element.is, IconRoundBrightness2Element);

export default IconRoundBrightness2Element;
