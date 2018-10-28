import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineStreetviewElement
 * @class IconOutlineStreetviewElement
 * @extends {AoflElement}
 */
class IconOutlineStreetviewElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineStreetviewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-streetview';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineStreetviewElement.is, IconOutlineStreetviewElement);

export default IconOutlineStreetviewElement;
