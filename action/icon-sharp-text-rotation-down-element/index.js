import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTextRotationDownElement
 * @class IconSharpTextRotationDownElement
 * @extends {AoflElement}
 */
class IconSharpTextRotationDownElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTextRotationDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-text-rotation-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTextRotationDownElement.is, IconSharpTextRotationDownElement);

export default IconSharpTextRotationDownElement;
