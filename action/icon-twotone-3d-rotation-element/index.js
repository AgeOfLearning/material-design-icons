import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotone3DRotationElement
 * @class IconTwotone3DRotationElement
 * @extends {AoflElement}
 */
class IconTwotone3DRotationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotone3DRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-3d-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotone3DRotationElement.is, IconTwotone3DRotationElement);

export default IconTwotone3DRotationElement;
