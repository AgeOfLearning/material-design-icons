import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpUpdateElement
 * @class IconSharpUpdateElement
 * @extends {AoflElement}
 */
class IconSharpUpdateElement extends AoflElement {
  /**
   * Creates an instance of IconSharpUpdateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-update';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpUpdateElement.is, IconSharpUpdateElement);

export default IconSharpUpdateElement;
