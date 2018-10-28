import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightness3Element
 * @class IconRoundBrightness3Element
 * @extends {AoflElement}
 */
class IconRoundBrightness3Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightness3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightness3Element.is, IconRoundBrightness3Element);

export default IconRoundBrightness3Element;
