import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPlaceElement
 * @class IconSharpPlaceElement
 * @extends {AoflElement}
 */
class IconSharpPlaceElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPlaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-place';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPlaceElement.is, IconSharpPlaceElement);

export default IconSharpPlaceElement;
