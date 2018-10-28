import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVolumeUpElement
 * @class IconOutlineVolumeUpElement
 * @extends {AoflElement}
 */
class IconOutlineVolumeUpElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVolumeUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-volume-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVolumeUpElement.is, IconOutlineVolumeUpElement);

export default IconOutlineVolumeUpElement;
