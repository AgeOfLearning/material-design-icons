import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTextRotationNoneElement
 * @class IconSharpTextRotationNoneElement
 * @extends {AoflElement}
 */
class IconSharpTextRotationNoneElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTextRotationNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-text-rotation-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTextRotationNoneElement.is, IconSharpTextRotationNoneElement);

export default IconSharpTextRotationNoneElement;
