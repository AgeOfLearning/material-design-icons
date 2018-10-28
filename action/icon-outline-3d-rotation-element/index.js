import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutline3DRotationElement
 * @class IconOutline3DRotationElement
 * @extends {AoflElement}
 */
class IconOutline3DRotationElement extends AoflElement {
  /**
   * Creates an instance of IconOutline3DRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-3d-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutline3DRotationElement.is, IconOutline3DRotationElement);

export default IconOutline3DRotationElement;
