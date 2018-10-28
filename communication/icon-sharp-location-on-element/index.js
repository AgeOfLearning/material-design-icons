import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocationOnElement
 * @class IconSharpLocationOnElement
 * @extends {AoflElement}
 */
class IconSharpLocationOnElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocationOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-location-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocationOnElement.is, IconSharpLocationOnElement);

export default IconSharpLocationOnElement;
