import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpGpsOffElement
 * @class IconSharpGpsOffElement
 * @extends {AoflElement}
 */
class IconSharpGpsOffElement extends AoflElement {
  /**
   * Creates an instance of IconSharpGpsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-gps-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpGpsOffElement.is, IconSharpGpsOffElement);

export default IconSharpGpsOffElement;
