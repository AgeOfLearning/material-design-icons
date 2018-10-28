import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpScreenRotationElement
 * @class IconSharpScreenRotationElement
 * @extends {AoflElement}
 */
class IconSharpScreenRotationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpScreenRotationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-screen-rotation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpScreenRotationElement.is, IconSharpScreenRotationElement);

export default IconSharpScreenRotationElement;
