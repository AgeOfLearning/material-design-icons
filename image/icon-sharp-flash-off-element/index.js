import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlashOffElement
 * @class IconSharpFlashOffElement
 * @extends {AoflElement}
 */
class IconSharpFlashOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlashOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flash-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlashOffElement.is, IconSharpFlashOffElement);

export default IconSharpFlashOffElement;
