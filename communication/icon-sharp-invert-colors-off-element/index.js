import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInvertColorsOffElement
 * @class IconSharpInvertColorsOffElement
 * @extends {AoflElement}
 */
class IconSharpInvertColorsOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInvertColorsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-invert-colors-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInvertColorsOffElement.is, IconSharpInvertColorsOffElement);

export default IconSharpInvertColorsOffElement;
