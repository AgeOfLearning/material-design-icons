import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpExposureZeroElement
 * @class IconSharpExposureZeroElement
 * @extends {AoflElement}
 */
class IconSharpExposureZeroElement extends AoflElement {
  /**
   * Creates an instance of IconSharpExposureZeroElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-exposure-zero';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpExposureZeroElement.is, IconSharpExposureZeroElement);

export default IconSharpExposureZeroElement;
