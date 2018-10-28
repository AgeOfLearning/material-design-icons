import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVolumeDownElement
 * @class IconOutlineVolumeDownElement
 * @extends {AoflElement}
 */
class IconOutlineVolumeDownElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVolumeDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-volume-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVolumeDownElement.is, IconOutlineVolumeDownElement);

export default IconOutlineVolumeDownElement;
