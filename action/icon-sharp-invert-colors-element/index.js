import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpInvertColorsElement
 * @class IconSharpInvertColorsElement
 * @extends {AoflElement}
 */
class IconSharpInvertColorsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpInvertColorsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-invert-colors';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpInvertColorsElement.is, IconSharpInvertColorsElement);

export default IconSharpInvertColorsElement;
