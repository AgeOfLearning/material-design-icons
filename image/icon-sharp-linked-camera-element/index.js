import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLinkedCameraElement
 * @class IconSharpLinkedCameraElement
 * @extends {AoflElement}
 */
class IconSharpLinkedCameraElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLinkedCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-linked-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLinkedCameraElement.is, IconSharpLinkedCameraElement);

export default IconSharpLinkedCameraElement;
