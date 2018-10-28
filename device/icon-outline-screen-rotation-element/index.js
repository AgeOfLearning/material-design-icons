import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineScreenRotationElement
 * @class IconOutlineScreenRotationElement
 * @extends {AoflElement}
 */
class IconOutlineScreenRotationElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineScreenRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-screen-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineScreenRotationElement.is, IconOutlineScreenRotationElement);

export default IconOutlineScreenRotationElement;
