import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCancelElement
 * @class IconSharpCancelElement
 * @extends {AoflElement}
 */
class IconSharpCancelElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCancelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-cancel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCancelElement.is, IconSharpCancelElement);

export default IconSharpCancelElement;
