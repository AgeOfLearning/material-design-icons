import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpFaceElement
 * @class IconSharpFaceElement
 * @extends {AoflElement}
 */
class IconSharpFaceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpFaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-face';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpFaceElement.is, IconSharpFaceElement);

export default IconSharpFaceElement;
