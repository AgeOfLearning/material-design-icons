import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTextRotationDownElement
 * @class IconOutlineTextRotationDownElement
 * @extends {AoflElement}
 */
class IconOutlineTextRotationDownElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTextRotationDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-text-rotation-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTextRotationDownElement.is, IconOutlineTextRotationDownElement);

export default IconOutlineTextRotationDownElement;
