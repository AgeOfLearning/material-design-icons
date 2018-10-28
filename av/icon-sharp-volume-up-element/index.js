import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpVolumeUpElement
 * @class IconSharpVolumeUpElement
 * @extends {AoflElement}
 */
class IconSharpVolumeUpElement extends AoflElement {
  /**
   * Creates an instance of IconSharpVolumeUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-volume-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpVolumeUpElement.is, IconSharpVolumeUpElement);

export default IconSharpVolumeUpElement;
