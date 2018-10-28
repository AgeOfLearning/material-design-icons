import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpHdElement
 * @class IconSharpHdElement
 * @extends {AoflElement}
 */
class IconSharpHdElement extends AoflElement {
  /**
   * Creates an instance of IconSharpHdElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-hd';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpHdElement.is, IconSharpHdElement);

export default IconSharpHdElement;
