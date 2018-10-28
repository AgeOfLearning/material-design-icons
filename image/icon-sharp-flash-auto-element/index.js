import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFlashAutoElement
 * @class IconSharpFlashAutoElement
 * @extends {AoflElement}
 */
class IconSharpFlashAutoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFlashAutoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-flash-auto';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFlashAutoElement.is, IconSharpFlashAutoElement);

export default IconSharpFlashAutoElement;
