import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVolumeOffElement
 * @class IconOutlineVolumeOffElement
 * @extends {AoflElement}
 */
class IconOutlineVolumeOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVolumeOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-volume-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVolumeOffElement.is, IconOutlineVolumeOffElement);

export default IconOutlineVolumeOffElement;
