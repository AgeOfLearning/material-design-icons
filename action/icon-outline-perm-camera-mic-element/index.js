import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePermCameraMicElement
 * @class IconOutlinePermCameraMicElement
 * @extends {AoflElement}
 */
class IconOutlinePermCameraMicElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePermCameraMicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-perm-camera-mic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePermCameraMicElement.is, IconOutlinePermCameraMicElement);

export default IconOutlinePermCameraMicElement;
