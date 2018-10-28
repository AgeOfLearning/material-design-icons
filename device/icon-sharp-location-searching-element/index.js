import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLocationSearchingElement
 * @class IconSharpLocationSearchingElement
 * @extends {AoflElement}
 */
class IconSharpLocationSearchingElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLocationSearchingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-location-searching';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLocationSearchingElement.is, IconSharpLocationSearchingElement);

export default IconSharpLocationSearchingElement;
