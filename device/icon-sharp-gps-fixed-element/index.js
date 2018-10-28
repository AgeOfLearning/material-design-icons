import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGpsFixedElement
 * @class IconSharpGpsFixedElement
 * @extends {AoflElement}
 */
class IconSharpGpsFixedElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGpsFixedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-gps-fixed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGpsFixedElement.is, IconSharpGpsFixedElement);

export default IconSharpGpsFixedElement;
