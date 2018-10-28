import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPanoramaHorizontalElement
 * @class IconSharpPanoramaHorizontalElement
 * @extends {AoflElement}
 */
class IconSharpPanoramaHorizontalElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPanoramaHorizontalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-panorama-horizontal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPanoramaHorizontalElement.is, IconSharpPanoramaHorizontalElement);

export default IconSharpPanoramaHorizontalElement;
