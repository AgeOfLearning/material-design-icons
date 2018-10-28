import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInvertColorsOffElement
 * @class IconRoundInvertColorsOffElement
 * @extends {AoflElement}
 */
class IconRoundInvertColorsOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInvertColorsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-invert-colors-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInvertColorsOffElement.is, IconRoundInvertColorsOffElement);

export default IconRoundInvertColorsOffElement;
