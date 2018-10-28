import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPanoramaElement
 * @class IconSharpPanoramaElement
 * @extends {AoflElement}
 */
class IconSharpPanoramaElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPanoramaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-panorama';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPanoramaElement.is, IconSharpPanoramaElement);

export default IconSharpPanoramaElement;
