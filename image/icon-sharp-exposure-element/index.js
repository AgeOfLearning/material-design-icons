import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExposureElement
 * @class IconSharpExposureElement
 * @extends {AoflElement}
 */
class IconSharpExposureElement extends AoflElement {
  /**
   * Creates an instance of IconSharpExposureElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-exposure';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExposureElement.is, IconSharpExposureElement);

export default IconSharpExposureElement;
