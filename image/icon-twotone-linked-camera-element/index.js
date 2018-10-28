import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLinkedCameraElement
 * @class IconTwotoneLinkedCameraElement
 * @extends {AoflElement}
 */
class IconTwotoneLinkedCameraElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLinkedCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-linked-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLinkedCameraElement.is, IconTwotoneLinkedCameraElement);

export default IconTwotoneLinkedCameraElement;
