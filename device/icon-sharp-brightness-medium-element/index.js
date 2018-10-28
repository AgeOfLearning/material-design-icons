import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpBrightnessMediumElement
 * @class IconSharpBrightnessMediumElement
 * @extends {AoflElement}
 */
class IconSharpBrightnessMediumElement extends AoflElement {
  /**
   * Creates an instance of IconSharpBrightnessMediumElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-brightness-medium';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpBrightnessMediumElement.is, IconSharpBrightnessMediumElement);

export default IconSharpBrightnessMediumElement;
