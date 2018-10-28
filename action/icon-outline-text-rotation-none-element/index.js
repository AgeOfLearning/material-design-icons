import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTextRotationNoneElement
 * @class IconOutlineTextRotationNoneElement
 * @extends {AoflElement}
 */
class IconOutlineTextRotationNoneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTextRotationNoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-text-rotation-none';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTextRotationNoneElement.is, IconOutlineTextRotationNoneElement);

export default IconOutlineTextRotationNoneElement;
