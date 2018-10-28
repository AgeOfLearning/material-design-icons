import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPanoramaHorizontalElement
 * @class IconRoundPanoramaHorizontalElement
 * @extends {AoflElement}
 */
class IconRoundPanoramaHorizontalElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPanoramaHorizontalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-panorama-horizontal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPanoramaHorizontalElement.is, IconRoundPanoramaHorizontalElement);

export default IconRoundPanoramaHorizontalElement;
