import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpNotListedLocationElement
 * @class IconSharpNotListedLocationElement
 * @extends {AoflElement}
 */
class IconSharpNotListedLocationElement extends AoflElement {
  /**
   * Creates an instance of IconSharpNotListedLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-not-listed-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpNotListedLocationElement.is, IconSharpNotListedLocationElement);

export default IconSharpNotListedLocationElement;
