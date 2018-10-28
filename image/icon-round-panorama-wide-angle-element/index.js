import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPanoramaWideAngleElement
 * @class IconRoundPanoramaWideAngleElement
 * @extends {AoflElement}
 */
class IconRoundPanoramaWideAngleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPanoramaWideAngleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-panorama-wide-angle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPanoramaWideAngleElement.is, IconRoundPanoramaWideAngleElement);

export default IconRoundPanoramaWideAngleElement;
