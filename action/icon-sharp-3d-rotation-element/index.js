import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharp3DRotationElement
 * @class IconSharp3DRotationElement
 * @extends {AoflElement}
 */
class IconSharp3DRotationElement extends AoflElement {
  /**
   * Creates an instance of IconSharp3DRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-3d-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharp3DRotationElement.is, IconSharp3DRotationElement);

export default IconSharp3DRotationElement;
