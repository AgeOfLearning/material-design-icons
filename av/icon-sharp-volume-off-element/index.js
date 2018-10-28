import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVolumeOffElement
 * @class IconSharpVolumeOffElement
 * @extends {AoflElement}
 */
class IconSharpVolumeOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVolumeOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-volume-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVolumeOffElement.is, IconSharpVolumeOffElement);

export default IconSharpVolumeOffElement;
