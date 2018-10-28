import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePermCameraMicElement
 * @class IconTwotonePermCameraMicElement
 * @extends {AoflElement}
 */
class IconTwotonePermCameraMicElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePermCameraMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-perm-camera-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePermCameraMicElement.is, IconTwotonePermCameraMicElement);

export default IconTwotonePermCameraMicElement;
