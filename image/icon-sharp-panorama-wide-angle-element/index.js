import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPanoramaWideAngleElement
 * @class IconSharpPanoramaWideAngleElement
 * @extends {AoflElement}
 */
class IconSharpPanoramaWideAngleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPanoramaWideAngleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-panorama-wide-angle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPanoramaWideAngleElement.is, IconSharpPanoramaWideAngleElement);

export default IconSharpPanoramaWideAngleElement;
