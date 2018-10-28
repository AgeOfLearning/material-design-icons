import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTodayElement
 * @class IconSharpTodayElement
 * @extends {AoflElement}
 */
class IconSharpTodayElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTodayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-today';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTodayElement.is, IconSharpTodayElement);

export default IconSharpTodayElement;
