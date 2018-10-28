import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVolumeDownElement
 * @class IconSharpVolumeDownElement
 * @extends {AoflElement}
 */
class IconSharpVolumeDownElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVolumeDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-volume-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVolumeDownElement.is, IconSharpVolumeDownElement);

export default IconSharpVolumeDownElement;
