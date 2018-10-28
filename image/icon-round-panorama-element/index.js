import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPanoramaElement
 * @class IconRoundPanoramaElement
 * @extends {AoflElement}
 */
class IconRoundPanoramaElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPanoramaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-panorama';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPanoramaElement.is, IconRoundPanoramaElement);

export default IconRoundPanoramaElement;
