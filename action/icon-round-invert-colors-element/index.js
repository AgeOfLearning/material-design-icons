import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInvertColorsElement
 * @class IconRoundInvertColorsElement
 * @extends {AoflElement}
 */
class IconRoundInvertColorsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInvertColorsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-invert-colors';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInvertColorsElement.is, IconRoundInvertColorsElement);

export default IconRoundInvertColorsElement;
