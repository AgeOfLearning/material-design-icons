import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaseline3DRotationElement
 * @class IconBaseline3DRotationElement
 * @extends {AoflElement}
 */
class IconBaseline3DRotationElement extends AoflElement {
  /**
   * Creates an instance of IconBaseline3DRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-3d-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaseline3DRotationElement.is, IconBaseline3DRotationElement);

export default IconBaseline3DRotationElement;
