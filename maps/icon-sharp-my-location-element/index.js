import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMyLocationElement
 * @class IconSharpMyLocationElement
 * @extends {AoflElement}
 */
class IconSharpMyLocationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMyLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-my-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMyLocationElement.is, IconSharpMyLocationElement);

export default IconSharpMyLocationElement;
