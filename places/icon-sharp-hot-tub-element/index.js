import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHotTubElement
 * @class IconSharpHotTubElement
 * @extends {AoflElement}
 */
class IconSharpHotTubElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHotTubElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-hot-tub';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHotTubElement.is, IconSharpHotTubElement);

export default IconSharpHotTubElement;
