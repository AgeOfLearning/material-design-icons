import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundExposureElement
 * @class IconRoundExposureElement
 * @extends {AoflElement}
 */
class IconRoundExposureElement extends AoflElement {
  /**
   * Creates an instance of IconRoundExposureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-exposure';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundExposureElement.is, IconRoundExposureElement);

export default IconRoundExposureElement;
