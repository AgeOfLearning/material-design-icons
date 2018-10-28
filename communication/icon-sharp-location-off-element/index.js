import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocationOffElement
 * @class IconSharpLocationOffElement
 * @extends {AoflElement}
 */
class IconSharpLocationOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocationOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-location-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocationOffElement.is, IconSharpLocationOffElement);

export default IconSharpLocationOffElement;
