import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTheatersElement
 * @class IconSharpTheatersElement
 * @extends {AoflElement}
 */
class IconSharpTheatersElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTheatersElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-theaters';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTheatersElement.is, IconSharpTheatersElement);

export default IconSharpTheatersElement;
