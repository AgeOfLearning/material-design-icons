import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpMmsElement
 * @class IconSharpMmsElement
 * @extends {AoflElement}
 */
class IconSharpMmsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpMmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-mms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpMmsElement.is, IconSharpMmsElement);

export default IconSharpMmsElement;
