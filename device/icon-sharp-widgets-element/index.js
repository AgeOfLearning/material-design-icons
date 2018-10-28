import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpWidgetsElement
 * @class IconSharpWidgetsElement
 * @extends {AoflElement}
 */
class IconSharpWidgetsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpWidgetsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-widgets';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpWidgetsElement.is, IconSharpWidgetsElement);

export default IconSharpWidgetsElement;
