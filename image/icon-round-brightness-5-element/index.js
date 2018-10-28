import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBrightness5Element
 * @class IconRoundBrightness5Element
 * @extends {AoflElement}
 */
class IconRoundBrightness5Element extends AoflElement {
  /**
   * Creates an instance of IconRoundBrightness5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-brightness-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBrightness5Element.is, IconRoundBrightness5Element);

export default IconRoundBrightness5Element;
