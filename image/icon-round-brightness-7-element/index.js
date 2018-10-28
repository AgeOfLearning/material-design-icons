import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightness7Element
 * @class IconRoundBrightness7Element
 * @extends {AoflElement}
 */
class IconRoundBrightness7Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightness7Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-7';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightness7Element.is, IconRoundBrightness7Element);

export default IconRoundBrightness7Element;
