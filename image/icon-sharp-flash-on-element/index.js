import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlashOnElement
 * @class IconSharpFlashOnElement
 * @extends {AoflElement}
 */
class IconSharpFlashOnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlashOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flash-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlashOnElement.is, IconSharpFlashOnElement);

export default IconSharpFlashOnElement;
