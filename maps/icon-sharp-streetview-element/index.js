import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpStreetviewElement
 * @class IconSharpStreetviewElement
 * @extends {AoflElement}
 */
class IconSharpStreetviewElement extends AoflElement {
  /**
   * Creates an instance of IconSharpStreetviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-streetview';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpStreetviewElement.is, IconSharpStreetviewElement);

export default IconSharpStreetviewElement;
