import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTrafficElement
 * @class IconSharpTrafficElement
 * @extends {AoflElement}
 */
class IconSharpTrafficElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTrafficElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-traffic';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTrafficElement.is, IconSharpTrafficElement);

export default IconSharpTrafficElement;
