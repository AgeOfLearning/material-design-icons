import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightness1Element
 * @class IconRoundBrightness1Element
 * @extends {AoflElement}
 */
class IconRoundBrightness1Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightness1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightness1Element.is, IconRoundBrightness1Element);

export default IconRoundBrightness1Element;
