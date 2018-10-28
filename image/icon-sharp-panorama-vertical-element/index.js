import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPanoramaVerticalElement
 * @class IconSharpPanoramaVerticalElement
 * @extends {AoflElement}
 */
class IconSharpPanoramaVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPanoramaVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-panorama-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPanoramaVerticalElement.is, IconSharpPanoramaVerticalElement);

export default IconSharpPanoramaVerticalElement;
