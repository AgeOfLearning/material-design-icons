import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPanoramaVerticalElement
 * @class IconRoundPanoramaVerticalElement
 * @extends {AoflElement}
 */
class IconRoundPanoramaVerticalElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPanoramaVerticalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-panorama-vertical';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPanoramaVerticalElement.is, IconRoundPanoramaVerticalElement);

export default IconRoundPanoramaVerticalElement;
