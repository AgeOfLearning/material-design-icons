import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpEjectElement
 * @class IconSharpEjectElement
 * @extends {AoflElement}
 */
class IconSharpEjectElement extends AoflElement {
  /**
   * Creates an instance of IconSharpEjectElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-eject';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpEjectElement.is, IconSharpEjectElement);

export default IconSharpEjectElement;
