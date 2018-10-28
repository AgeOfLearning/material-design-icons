import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEventElement
 * @class IconSharpEventElement
 * @extends {AoflElement}
 */
class IconSharpEventElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEventElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-event';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEventElement.is, IconSharpEventElement);

export default IconSharpEventElement;
