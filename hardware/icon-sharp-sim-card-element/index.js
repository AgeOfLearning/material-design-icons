import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSimCardElement
 * @class IconSharpSimCardElement
 * @extends {AoflElement}
 */
class IconSharpSimCardElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSimCardElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-sim-card';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSimCardElement.is, IconSharpSimCardElement);

export default IconSharpSimCardElement;
